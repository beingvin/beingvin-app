import React, { useRef } from "react";
import Header from "./Header/Header";
import ScrollDown from "./ScrollDown/ScrollDown";
import style from "./style.module.css";
import { motion, useScroll, useTransform } from "framer-motion";

function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const xplus = useTransform(scrollYProgress, [0, 0.5], [ 0 , 400])
  const xminus = useTransform(scrollYProgress, [0, 0.5], [ 0 , -400])


  //Name Animation
  const transition = { duration: 1.4, ease: [0.6, 0.1, 0.05, 0.9] };

  const Name = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,

      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    initial: {
      y: 100,
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ...transition },
    },
  };

  return (
    <motion.section className={style.section}>
      <motion.div className={style.wrapper}>
        <Header />

        <motion.div className={style.title}>
          <motion.div initial="in" animate="animate" exit="out">
            <motion.h1 style={{x:xplus, transition}} variants={Name} initial="initial" animate="animate">
              <div style={{ display: "inline-flex",  }}>
                <motion.span variants={letter}>H</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>,</motion.span>
                <motion.span variants={letter}>&nbsp;</motion.span>
                <motion.span variants={letter}>I</motion.span>
                <motion.span variants={letter}>'</motion.span>
                <motion.span variants={letter}>m</motion.span>
                <motion.span variants={letter}>&nbsp;</motion.span>
                <motion.span variants={letter}>V</motion.span>
                <motion.span variants={letter}>i</motion.span>
                <motion.span variants={letter}>n</motion.span>
              </div>
            </motion.h1>
          </motion.div>

          <motion.p style={{x:xminus, transition}} >FRONTEND DEVELOPER AND DESIGNER. <br /> I build interactive websites that run across platforms & devices</motion.p>

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
        </motion.div>
        <ScrollDown />
      </motion.div>
    </motion.section>
  );
}

export default Hero;
