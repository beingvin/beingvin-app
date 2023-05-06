import React, { useRef } from "react";
import style from "./style.module.css";
import vinpic from "./img/vin (2).png";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import TextShpere from "./TextShpere/TextShpere";

function About() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    targetRef: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section className={style.section} id="About">
      <div ref={sectionRef} style={{ opacity }} className={style.wrapper}>
        <div className={style.mypic}>
          <img src={vinpic} alt="My pic" />
        </div>
        <div className={[style.aboutme, "section"].join(" ")}>
          <p>
            Professionally connected with the IT industry from nearly 10 years,
            Well-organised person, problem solver and independent coder and I
            create successful responsive websites that are fast, easy to use,
            and built with best practices. <br /> <br /> I have good skills in
            HTML5, CSS3, BOOTSTRAP, JAVASCRIPT, Node JS, REACT JS, Flask
            (Python) I build responsive website so that your website will look
            perfect on all the small and wide screens. <br /> <br /> I use
            advance CSS3 and vanilla javascript for animations on your website,
            I can convert figma to html and i can convert psd to html. <br />{" "}
            <br /> Connect me for more details .
          </p>
        </div>
        {/* <TextShpere/> */}
      </div>
    </motion.section>
  );
}

export default About;
