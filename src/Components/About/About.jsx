import React from "react";
import style from "./style.module.css";

function About() {
  return (
    <section className={style.section}>
      <div className={style.mypic}>
        <img src="./images/vin.jpg" alt="My pic" srcset="" />
      </div>
      <div className={style.aboutme}>
        <p>
          Professionally connected with the IT industry from nearly 10 years,
          Well-organised person, problem solver and independent coder and I
          create successful responsive websites that are fast, easy to use, and
          built with best practices. <br /> <br /> I have good skills in HTML5, CSS3,
          BOOTSTRAP, JAVASCRIPT, Node JS, REACT JS, Flask (Python) I build
          responsive website so that your website will look perfect on all the
          small and wide screens. <br /> <br /> I use advance CSS3 and vanilla javascript for
          animations on your website, I can convert figma to html and i can
          convert psd to html. <br /> <br /> Connect me for more details .
        </p>
      </div>
   
    </section>
  );
}

export default About;
