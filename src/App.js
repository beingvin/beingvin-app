import React, { useRef } from "react";
import "./css/App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import Pricing from "./Components/Services/Pricing/Pricing";

function App() {
  const divRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);

  return (
    <>
      <motion.div className="progress-bar" ref={divRef} style={{ scaleX }} />

      <div className="container">
        <Router>
          <Hero />
          <About />
          <Services />
          <Pricing />
          <Contact />
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
