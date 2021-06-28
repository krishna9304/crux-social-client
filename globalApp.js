import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth, setClassmates, setUser } from "./redux/actions/actions";

export function extractCookies(cookieStr) {
  return cookieStr
    .match(/(^|(?<=, ))[^=;,]+=[^;]+/g)
    .map((cookie) => cookie.split("=").map((v) => v.trim()))
    .filter((v) => v[0].length && v[1].length)
    .reduce((builder, cur) => {
      builder[cur[0]] = cur[1];
      return builder;
    }, {});
}

const GlobalApp = ({ Component, pageProps }) => {
  let globalState = useSelector((state) => state);

  let dispatch = useDispatch();
  let authUser = () => {
    if (document.cookie !== null && document.cookie !== "") {
      let token = extractCookies(document.cookie).jwt;

      if (token !== undefined || token !== null || token !== "") {
        axios
          .post("http://localhost:8080/api/v1/auth/verifyToken", {
            token: token,
          })
          .then((res) => {
            try {
              if (res.data.res) {
                dispatch(setAuth(true));
                dispatch(setUser(res.data.userdata));
                window.alert("token verified");
                axios
                  .post(
                    "http://localhost:8080/api/v1/classmates/getClassmates",
                    res.data.userdata
                  )
                  .then((classRes) => {
                    dispatch(setClassmates(classRes.data.classmates));
                  })
                  .catch((err) => window.alert(err));
              } else {
                dispatch(setAuth(false));
                dispatch(setUser(null));
              }
            } catch (err) {
              dispatch(setAuth(false));
              dispatch(setUser(null));
              console.log(err);
            }
          })
          .catch((err) => console.log(err));
      } else {
        dispatch(setAuth(false));
        dispatch(setUser(null));
      }
    } else {
      dispatch(setAuth(false));
      dispatch(setUser(null));
    }
  };
  useEffect(() => {
    authUser();
  }, []);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default GlobalApp;
