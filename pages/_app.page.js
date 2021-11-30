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

Axios.defaults.baseURL = "https://iranature-r.herokuapp.com/api/v1";
Axios.defaults.headers.common["Access-Control-Allow-Origin"] =
  "http://localhost:3000";

Axios.defaults.withCredentials = true;
Axios.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE";

// it is temporary and will be deleted beacuse in localhost:3000 (unsecure protocol) we can not use set-cookie with sameSite=none and secure=true
let token;
if (typeof Storage !== "undefined") {
  token = localStorage.getItem("token");
}
Axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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
function MyApp({ Component, pageProps }) {
  // const [deferredPrompt, setdeferredPrompt] = React.useState(null);

  React.useEffect(() => {
    AOS.init();

    // if ("serviceWorker" in navigator) {
    //   navigator.serviceWorker.register("./sw.js").then((e) => {
    //     console.log("Service Worker Registeered");
    //     console.log(e);
    //   });
    // }

    // window.addEventListener("beforeinstallprompt", (event) => {
    //   console.log("beforeinstallprompt fired", event);
    //   event.preventDefault();
    //   setdeferredPrompt(event);
    //   return false;
    // });
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}></PersistGate>
      <div>
        <Navigation />
        <Component {...pageProps} />
        {/* <button
          onClick={() => {
            if (deferredPrompt) {
              deferredPrompt.prompt();

              deferredPrompt.userChoice.then(function (choiceResult) {
                console.log(choiceResult.outcome);

                if (choiceResult.outcome === "dismissed") {
                  console.log("User cancelled installation");
                } else {
                  console.log("User added to home screen");
                  console.log(
                    "deferredPrompt after installation",
                    deferredPrompt
                  );
                }
              });

              console.log("deferredPrompt", deferredPrompt);
              setdeferredPrompt(null);
            }
          }}
        >
          hellllo
        </button> */}
        <ToastContainer rtl />
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </Provider>
  );
}

export default MyApp;
