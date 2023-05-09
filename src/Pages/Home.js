import React from "react";
import Hero from "../Components/Page/Home/Hero/Hero";
import Services from "../Components/Page/Home/Services/Services";
import Contact from "../Components//Page/Home/Contact/Contact";
import Work from "../Components/Page/Home/Work/Work";

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
