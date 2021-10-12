import React from "react";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "../components/navigation/navigation.component";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Navigation />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
