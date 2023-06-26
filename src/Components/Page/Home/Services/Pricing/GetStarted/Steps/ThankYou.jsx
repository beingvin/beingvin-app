import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import style from "../style.module.css";

function ThankYou() {
  return (
    <>
      <div className={style.thankYou}>
        <p className={style.thankYouMsg}>
          I appreciate the time and effort you put into providing me with the
          necessary information. Your input is invaluable in helping me create a
          website that perfectly aligns with your vision. I look forward to
          working closely with you to bring your ideas to life. <br />
          <span>I will contact you soon</span>
        </p>
        <br />
        <FontAwesomeIcon icon={faThumbsUp} className={style.icon} />
      </div>
    </>
  );
}

export default ThankYou;
