import React, { useRef } from "react";
import style from "./style.module.css";
import { motion, useScroll, useSpring } from "framer-motion";

function ProgessBar() {
  const divRef = useRef(null);

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress);
  return (
    <motion.div className={style.progressBar} ref={divRef} style={{ scaleX }} />
  );
}

export default ProgessBar;
