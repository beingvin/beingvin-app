import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function ContactMe() {

  
  return (
    <div className={style.contact}>
      <hr className={style.hrThin} />

      {/* <div className={style.tagLines}>
    <p>Let's Build Something Greate ! </p>
    <p>And take your online presence to the next level.</p>
  </div> */}

      {/* <p><Link to={"./"}>Home</Link></p> */}
      <div className={style.quickLinks}>
        <h2>Contact &nbsp; &nbsp; &nbsp; | </h2>
        <p>
          <Link to={"/"}>Home</Link>
        </p>

        <p>
          <Link to={"/services/pricing"}>Pricing</Link>
        </p>
      </div>

      <div className={style.chat}>
        <div className={style.socialLinks}>
          <p>
            <a href="../#work" target="_blank">
              LinkedIn
            </a>{" "}
          </p>
          <p>support@beingvin.com</p>
        </div>
        <h1>
          <a
            href="https://wa.me/+919011732439?text=Hi there ! i need a website"
            target="_blank"
            rel="noreferrer"
          >
            Let's Chat
            <span>
              <FontAwesomeIcon
                className={style.upRightArrow1}
                icon={faArrowRight}
              />
              <FontAwesomeIcon
                className={style.upRightArrow2}
                icon={faArrowRight}
              />
            </span>
          </a>
        </h1>
      </div>
    </div>
  );
}

export default ContactMe;
