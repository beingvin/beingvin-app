import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";

function Cursor() {
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  console.log(cursor);

  useEffect(() => {
    const mouseMove = (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: cursor.x - 13,
      y: cursor.y - 13,
    },
    text: {
      height: 150,
      width: 150,
      x: cursor.x - 75,
      y: cursor.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <motion.div
      className={style.cursor}
      variants={variants}
      animate={cursorVariant}
    ></motion.div>
  );
}

export default Cursor;
