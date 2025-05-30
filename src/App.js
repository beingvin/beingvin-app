import React, { useEffect, useState } from "react";
import "./css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatePage from "./Pages/AnimatePage";
import Preloader from "./Components/Preloader/Preloader";
import Cursor from "./Components/Cursor/Cursor";
import ProgessBar from "./Components/ProgressBar/ProgessBar";
import { motion } from "framer-motion";
import CookieConsent from "./Components/CookieConsent/CookieConsent";
import SchemaMarkup from "./Components/SchemaMarkup/SchemaMarkup";

function App() {
  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false);
    }, 5000);
  }, []);

  return (
    <motion.div className="app">
      <SchemaMarkup />
      <ProgessBar />
      <Cursor />
      {preloader ? (
        <Preloader />
      ) : (
        <>
          <Router>
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
