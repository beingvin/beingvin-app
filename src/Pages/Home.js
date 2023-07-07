import React from "react";
import Hero from "../Components/Page/Home/Hero/Hero";
import Services from "../Components/Page/Home/Services/Services";
import Contact from "../Components//Page/Home/Contact/Contact";
import Work from "../Components/Page/Home/Work/Work";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Beingvin | Full Stack Web Developer & Designer</title>
        <meta
          name="description"
          content="Vin is an skilled full stack web developer and designer. With expertise in creating visually stunning and functional responsive websites. Visit beingvin.com to explore collaboration opportunities and elevate your digital presence."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Services />
      <Work />
      <Contact />
    </>
  );
}

export default Home;
