import React from "react";
import Layout from "./Layout";
import Home from "./Home";
import About from "../Components/About/About";
import Pricing from "../Components/Services/Pricing/Pricing";
import NoPage from "../Pages/NoPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function AnimatePage() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatePage;
