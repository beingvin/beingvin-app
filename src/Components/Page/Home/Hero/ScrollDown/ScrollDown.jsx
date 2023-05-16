import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowDown19 } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";


function ScrollDown() {
  const scroll = () => {
    // window.scrollTo({ 0, 500, behavior: "smooth" });
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={style.scroll} onClick={scroll}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        id="down-arrow"
      >
        <g data-name="Layer 2">
          <g data-name="arrowhead-down">
            <rect width="24" height="24" opacity="0"></rect>
            <path d="M17.37 12.39L12 16.71l-5.36-4.48a1 1 0 1 0-1.28 1.54l6 5a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.14z"></path>
            <path d="M11.36 11.77a1 1 0 0 0 1.27 0l6-4.83a1 1 0 0 0 .15-1.41 1 1 0 0 0-1.41-.15L12 9.71 6.64 5.23a1 1 0 0 0-1.28 1.54z"></path>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default ScrollDown;
