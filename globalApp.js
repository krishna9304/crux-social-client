import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuth,
  setClassmates,
  setCollege,
  setUser,
} from "./redux/actions/actions";
import Home from "./pages";
import Loader from "./components/loader";

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
  let [authDone, setAuthDone] = useState(false);
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
                dispatch(setCollege(res.data.college));
                console.log("token verified");
                axios
                  .post(
                    "http://localhost:8080/api/v1/classmates/getClassmates",
                    res.data.userdata
                  )
                  .then((classRes) => {
                    dispatch(setClassmates(classRes.data.classmates));
                  })
                  .catch((err) => console.log(err));
                setAuthDone(true);
              } else {
                dispatch(setAuth(false));
                dispatch(setUser(null));
                setAuthDone(true);
              }
            } catch (err) {
              dispatch(setAuth(false));
              dispatch(setUser(null));
              setAuthDone(true);
              console.log(err);
            }
          })
          .catch((err) => console.log(err));
      } else {
        dispatch(setAuth(false));
        dispatch(setUser(null));
        setAuthDone(true);
      }
    } else {
      dispatch(setAuth(false));
      dispatch(setUser(null));
      setAuthDone(true);
    }
  };
  useEffect(() => {
    authUser();
  }, []);

  if (authDone === false) {
    return <Loader />;
  }

  return (
    <ChakraProvider>
      {!globalState.auth ? <Home /> : <Component {...pageProps} />}
    </ChakraProvider>
  );
};

export default GlobalApp;
