import React, { useRef, useEffect } from "react";
import style from "./style.module.css";
import vinpic from "./img/vin (2).png";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
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
            I embarked on my journey as an IT professional More than a decade
            ago, and for the past two years, I have focused on honing my coding
            skills. Currently as full-stack web developer, bringing a wealth of
            expertise and experience to every project.
            <br /> <br /> I am a well-organized problem solver and an
            independent coder, committed to creating successful responsive
            websites that are both visually stunning and functional. I always
            build with best practices in mind, so you can trust that your
            website will be built to the highest standards.
            <br /> <br />
            Whether you're looking to create a brand new website or improve an
            existing one, I have the expertise and skills to make it happen. 
      
            <br /> <br /> Feel free to reach out to me for more details on how I
            can help you create a successful website that meets your specific
            needs.
            <br /> <br />
          </p>
        </div>
        {/* <TextShpere/> */}
      </div>
    </motion.section>
  );
}

export default About;
