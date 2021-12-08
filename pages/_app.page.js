import React from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { PersistGate } from "redux-persist/integration/react";
import Axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navigation from "../components/navigation/navigation.component";
import { store, persistor } from "../redux/store";
import { askForNotificationPermission } from "../utils/notificationActivate";
import { getDeviceType } from "../utils/functions";
import { setDeviceType } from "../redux/user/user.actions";

Axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_SERVER_URL;
Axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

Axios.defaults.withCredentials = true;
Axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE";

Axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  "Origin, X-Requested-With, Content-Type, Accept";

Axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.message === "Network Error") return Promise.reject(error);
    return Promise.reject(error.response.data);
  }
);
function Layout({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
    askForNotificationPermission();
    store.dispatch(setDeviceType(getDeviceType()));
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <div>
        <Navigation />
        <Component {...pageProps} />
        <ToastContainer rtl />
      </div>
    </Provider>
  );
}

export default Layout;
