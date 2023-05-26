import React from "react";
import Layout from "./Layout";
import Home from "./Home";
import About from "../Components/Page/About/About";
import Pricing from "../Components/Page/Home/Services/Pricing/Pricing";
import NoPage from "../Pages/NoPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BugTracker from "./BugTracker/BugTracker";

function AnimatePage() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="/Services/Pricing" element={<Pricing />} />
          <Route path="/BugTracker" element={<BugTracker />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatePage;
