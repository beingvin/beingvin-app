import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import style from "./style.module.css";

function ScrollDown() {
  return (
    <div className={style.scroll}>
      Scroll Down <br/>
      <FontAwesomeIcon icon={faArrowDown} />
    </div>
  );
}

export default ScrollDown;
