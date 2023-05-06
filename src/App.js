import React, { useEffect, useRef, useState } from "react";
import "./css/App.css";

import { motion, useScroll, useSpring } from "framer-motion";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatePage from "./Pages/AnimatePage";

function App() {
  const [preloader, setPreloader] = useState(false);

  const divRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  useEffect(() => {
    setPreloader(true);
    setTimeout(() => {
      setPreloader(false);
    }, 3000);
  }, []);

  return (
    <div className="app">
      {preloader ? (
        <figure>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </figure>
      ) : (
        <>
          <Router>
            <motion.div
              className="progress-bar"
              ref={divRef}
              style={{ scaleX }}
            />

            <div className="container">
              <AnimatePage />
            </div>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
