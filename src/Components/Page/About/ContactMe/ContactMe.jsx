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
          <Link to={"/Services/Pricing"}>Pricing</Link>
        </p>
      </div>

      <div className={style.chat}>
        <div className={style.socialLinks}>
          <p>
            <a
              href="https://www.linkedin.com/in/beingvin"
              target="_blank"
              rel="noreferrer noopener"
            >
              LinkedIn
            </a>{" "}
          </p>
          <p>
            <a href="mailto:contact@beingvin.com">contact@beingvin.com</a>
          </p>
        </div>
        <h1>
          <a
            href="https://wa.me/+919916742022?text=Hi%2C%20I%27m%20interested%20in%20your%20web%20development%20services.%20Can%20we%20discuss%20my%20project%3F"
            target="_blank"
            rel="noreferrer noopener"
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
