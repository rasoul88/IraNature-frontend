import React from "react";
import { Provider } from "react-redux";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "../components/navigation/navigation.component";
import store from "../redux/store";
import Footer from "../components/footer/footer.component";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Provider store={store}>
      <div>
        <Navigation />
        <Component {...pageProps} />
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </Provider>
  );
}

export default MyApp;
