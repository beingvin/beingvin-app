import React, { useEffect, useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatePage from "./Pages/AnimatePage";
import Preloader from "./Components/Preloader/Preloader";
import Cursor from "./Components/Cursor/Cursor";
import ProgessBar from "./Components/ProgressBar/ProgessBar";
import { motion } from "framer-motion";
import CookieConsent from "./Components/CookieConsent/CookieConsent";
import SchemaManager from "./Components/Seo/SchemaMarkup/SchemaManager";

function App() {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div className="app">
      <ProgessBar />
      <Cursor />
      {preloader ? (
        <Preloader />
      ) : (
        <>
          <Router>
            <SchemaManager /> 
            <div className="container">
              <AnimatePage />
              <CookieConsent />
            </div>
          </Router>
        </>
      )}
    </motion.div>
  );
}

export default App;
