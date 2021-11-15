import React from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { PersistGate } from "redux-persist/integration/react";
import Navigation from "../components/navigation/navigation.component";
import { store, persistor } from "../redux/store";
// import Footer from "../components/footer/footer.component";
import Axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

Axios.defaults.baseURL = "http://localhost:6060/api/v1";
Axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  "http://localhost:3000";

Axios.defaults.withCredentials = true;
Axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE";

// Axios.defaults.headers.common["authorization"] = "";
Axios.defaults.headers.common["Access-Control-Allow-Headers"] =
  "Origin, X-Requested-With, Content-Type, Accept";

Axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response.data);
  }
);
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <div>
        <Navigation />
        <Component {...pageProps} />
        <ToastContainer rtl />
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </Provider>
  );
}

export default MyApp;
