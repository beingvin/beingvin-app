import React from "react";
import { motion } from "framer-motion";
import style from "./style.module.css";

function PageTransition() {
  const boxVeriant = {
    visible: {
      opacity: 0,
      transition: {
        delay: 2.5,
        delayChildren: 0.3,
        staggerDirection: 1,
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 1,
    },
    exit: {
      opacity: 1,
      transition: {
        // when: "afterChildren",
        delayChildren: 0.3,
        staggerDirection: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const boxItemVeriant = {
    visible: {
      x: "100%",
      width: "100%",
      // opacity:0,
      transition: { duration: 1, ease: [0.6, 0.1, 0.05, 0.9] },
    },

    hidden: {
      x: "0%",
      width: "0%",
      // opacity:1
    },
    exit: {
      x: "-100%",
      width: "100%",
      transition: { duration: 1, ease: [0.6, 0.1, 0.05, 0.9] },
    },
  };

  return (
    <div className={style.container}>
      {/* <h1>Page Transition</h1> */}
      <motion.div
        animate="visible"
        initial="hidden"
        exit="exit"
        variants={boxVeriant}
      >
        <motion.div
          variants={boxItemVeriant}
          className={style.box1}
        ></motion.div>
        <motion.div
          variants={boxItemVeriant}
          className={style.box2}
        ></motion.div>
        <motion.div
          variants={boxItemVeriant}
          className={style.box3}
        ></motion.div>
        <motion.div
          variants={boxItemVeriant}
          className={style.box4}
        ></motion.div>
        <motion.div
          variants={boxItemVeriant}
          className={style.box5}
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default PageTransition;
