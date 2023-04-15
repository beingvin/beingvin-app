import React from "react";
import Header from "./Header/Header";
import ScrollDown from "./ScrollDown/ScrollDown";
import style from "./style.module.css";


function Hero() {
  return (
    <section className={style.section}>
      <div className={style.hero}>
        <Header />

        <div className={style.title}>
          <h1>HI — I'M VIN,</h1>
          <p>FRONTEND DEVELOPER AND DESIGNER.</p>
          <div className="back-title">
            <span>W</span>
            <span>E</span>
            <span>B</span>
            <span>&nbsp;</span>
            <span>D</span>
            <span>E</span>
            <span>V</span>
            <span>E</span>
            <span>L</span>
            <span>O</span>
            <span>P</span>
            <span>E</span>
            <span>R</span>
          </div>
        </div>
        <ScrollDown />
      </div>
    </section>
  );
}

export default Hero;
