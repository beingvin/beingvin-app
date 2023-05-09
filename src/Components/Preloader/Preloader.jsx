import React from "react";
import style from "./style.module.css";
function Preloader() {
  return (
    <figure className={style.figure}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </figure>
  );
}

export default Preloader;
