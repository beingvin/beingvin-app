import React from "react";
import ScrollDown from "./ScrollDown/ScrollDown";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import Logo from "../Logo/Logo";

function Hero() {
  // const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const xplus = useTransform(scrollYProgress, [0, 0.5], [0, 400]);
  const xminus = useTransform(scrollYProgress, [0, 0.5], [0, -400]);

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

  const Designation = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,

      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
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
    <motion.section className={style.section} id="Home">
      <motion.div className={style.wrapper}>
        <div className={style.header}>
          <Link to={"/"}>
            <Logo />
          </Link>
          <div className={style.aboutBtn}>
            <Link to={"About"}>
              <button>About me</button>{" "}
            </Link>
          </div>
        </div>
        <main>
          <motion.div className={style.title}>
            <motion.div initial="in" animate="animate" exit="out">
              <motion.h1 style={{ x: xplus, transition }}>
                <motion.div variants={Name} initial="initial" animate="animate">
                  <div style={{ display: "inline-flex" }}>
                    <motion.span variants={letter}>H</motion.span>
                    <motion.span variants={letter}>I</motion.span>
                    <motion.span variants={letter}>,</motion.span>
                    <motion.span variants={letter}>&nbsp;</motion.span>
                    <motion.span variants={letter}>I</motion.span>
                    <motion.span variants={letter}>'</motion.span>
                    <motion.span variants={letter}>M</motion.span>
                    <motion.span variants={letter}>&nbsp;</motion.span>
                    <motion.span variants={letter}>V</motion.span>
                    <motion.span variants={letter}>I</motion.span>
                    <motion.span variants={letter}>N</motion.span>
                    <motion.span variants={letter}>,</motion.span>
                    <motion.span variants={letter}>&nbsp;</motion.span>
                    <motion.span variants={letter}>F</motion.span>
                    <motion.span variants={letter}>U</motion.span>
                    <motion.span variants={letter}>L</motion.span>
                    <motion.span variants={letter}>L</motion.span>
                    <motion.span variants={letter}>&nbsp;</motion.span>
                    <motion.span variants={letter}>S</motion.span>
                    <motion.span variants={letter}>T</motion.span>
                    <motion.span variants={letter}>A</motion.span>
                    <motion.span variants={letter}>C</motion.span>
                    <motion.span variants={letter}>K</motion.span>
                  </div>
                </motion.div>
                <motion.div
                  variants={Designation}
                  initial="initial"
                  animate="animate"
                >
                  <div>
                    <motion.span variants={letter}>W</motion.span>
                    <motion.span variants={letter}>E</motion.span>
                    <motion.span variants={letter}>B</motion.span>
                    <motion.span variants={letter}>&nbsp;</motion.span>
                    <motion.span variants={letter}>D</motion.span>
                    <motion.span variants={letter}>E</motion.span>
                    <motion.span variants={letter}>V</motion.span>
                    <motion.span variants={letter}>E</motion.span>
                    <motion.span variants={letter}>L</motion.span>
                    <motion.span variants={letter}>O</motion.span>
                    <motion.span variants={letter}>P</motion.span>
                    <motion.span variants={letter}>E</motion.span>
                    <motion.span variants={letter}>R</motion.span>
                    <motion.span variants={letter}>&nbsp;</motion.span>
                    <motion.span variants={letter}>A</motion.span>
                    <motion.span variants={letter}>N</motion.span>
                    <motion.span variants={letter}>D</motion.span>
                  </div>
                  <div style={{ display: "inline-flex" }}>
                    <motion.span variants={letter}>D</motion.span>
                    <motion.span variants={letter}>E</motion.span>
                    <motion.span variants={letter}>S</motion.span>
                    <motion.span variants={letter}>I</motion.span>
                    <motion.span variants={letter}>G</motion.span>
                    <motion.span variants={letter}>N</motion.span>
                    <motion.span variants={letter}>E</motion.span>
                    <motion.span variants={letter}>R</motion.span>
                    <motion.span variants={letter}>.</motion.span>
                  </div>
                </motion.div>
              </motion.h1>
            </motion.div>
          </motion.div>
          <motion.h2
            style={{ x: xminus, transition }}
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 1.5, ...transition },
            }}
            className={style.subTitle}
          >
            I build interactive websites that run across platforms & devices
          </motion.h2>{" "}
        </main>
        <div className={style.scrollIcon}>
          <ScrollDown />
        </div>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
