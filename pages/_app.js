import { Provider } from "react-redux";
import GlobalApp from "../globalApp";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalApp Component={Component} pageProps={pageProps} />
    </Provider>
  );
}

export default MyApp;
