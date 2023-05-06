import React, { useEffect, useRef, useState } from "react";
import "./css/App.css";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Components/About/About";
import Pricing from "./Components/Services/Pricing/Pricing";
import NoPage from "./Pages/NoPage";

import { motion, useScroll, useSpring } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

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
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="About" element={<About />} />
                  <Route path="Pricing" element={<Pricing />} />
                  <Route path="*" element={<NoPage />} />
                </Route>
              </Routes>
            </div>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
