import React from "react";
import style from "./style.module.css";

function Header() {
  return (
    <div className={style.header}>
      <h2 className={style.logo}><a href="./">Beingvin</a></h2>
    </div>
  );
}

export default Header;
