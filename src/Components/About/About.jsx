import React, { useRef, useEffect } from "react";
import style from "./style.module.css";
import vinpic from "./img/vin (2).png";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  animate,
} from "framer-motion";
// import TextShpere from "./TextShpere/TextShpere";

function About() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    targetRef: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.section
      className={style.section}
      id="About"
      initial={{ opacity: 0, x: -400 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: [0.6, 0.1, 0.05, 0.9] },
      }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
        transition: { duration: 0.5, ease: [0.6, 0.1, 0.05, 0.9] },
      }}
    >
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
