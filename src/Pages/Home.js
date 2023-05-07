import React from "react";
import Hero from "../Components/Hero/Hero";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";
import Work from "../Components/Work/Work";

function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Work />
      <Contact />
    </div>
  );
}

export default Home;
