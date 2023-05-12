import React, { useEffect } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faIndianRupeeSign,
  faTimesCircle,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function LearnMore() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const transition = { duration: 1.4, ease: [0.6, 0.1, 0.05, 0.9] };
  return (
    <motion.div
      className={style.container}
      initial={{ opacity: 0, x: -400 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: [0.6, 0.1, 0.05, 0.9] },
      }}
      exit={{
        opacity: 0,
        x: window.innerWidth,
        transition: { duration: 0.5, ease: [0.6, 0.1, 0.05, 0.9] },
      }}
    >
      <div className={style.headingTitle}>
        <h1>
          Choose your plan. <br /> Get started
        </h1>
      </div>

      <div className={style.cards}>
        <div className={style.card}>
          <div className={style.cardHeader}>
            <span className={style.package}>Basic</span>
          </div>
          <div className={style.price}>
            <span className={style.starting}>Starting</span>

            <span className={style.priceValue}>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              <span>5999</span>
            </span>
            <span className={style.timeline}>
              Delivery Time 2-3 Days <br /> 1 Revision{" "}
            </span>
          </div>
          <div className={style.features}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Up to{" "}
                <b>5 PAGE</b>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Static</b> Website
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Fully{" "}
                <b>Responsive</b> Website
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>SEO</b> Friendly
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Social Media</b> Integration
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Contact</b> Form
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;{" "}
              </li>
            </ul>
          </div>
          {/* <div className={style.getStarted}> <button>Get started</button> </div> */}
        </div>

        <div className={style.card}>
          <div className={style.cardHeader}>
            <span className={style.package}>Standard</span>
          </div>
          <div className={style.price}>
            <span className={style.starting}>Starting</span>
            <span className={style.priceValue}>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              <span>11999</span>
            </span>
            <span className={style.timeline}>
              Delivery Time 5-8 Days <br /> 2 Revision{" "}
            </span>
          </div>
          <div className={style.features}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Up to{" "}
                <b>10 PAGE</b>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Dynamic</b> Website
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Fully{" "}
                <b>Responsive</b> Website
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>SEO</b> Friendly
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Social Media</b> Integration
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Image</b> Slider
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Contact</b> Form
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Live</b> Chat Integration
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Google</b> Map
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Embed{" "}
                <b>Images & Videos</b>
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;{" "}
              </li>
              <li>
                {" "}
                <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;{" "}
              </li>
            </ul>
          </div>
          {/* <div className={style.getStarted}> <button>Get started</button> </div> */}
        </div>

        <div className={style.card}>
          <div className={style.cardHeader}>
            <span className={style.package}>Premium</span>
          </div>
          <div className={style.price}>
            <span className={style.starting}>Starting</span>
            <span className={style.priceValue}>
              <FontAwesomeIcon icon={faIndianRupeeSign} />
              <span>20999</span>
            </span>
            <span className={style.timeline}>
              Delivery Time 12-15 Days <br /> 3 Revision{" "}
            </span>
          </div>
          <div className={style.features}>
            <ul>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Up to{" "}
                <b>15 PAGE</b>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Dynamic</b> Website (Advance)
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Fully{" "}
                <b>Responsive</b> Website
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>SEO</b> Friendly (Express)
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Social Media</b> Integration
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Image</b> Slider (Express)
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Contact</b> Form
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Live</b> Chat Integration
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                <b>Google</b> Map
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Embed{" "}
                <b>Images & Videos</b>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Build with{" "}
                <b>Bootstrap</b>
              </li>
              <li>
                <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Build with{" "}
                <b>Wordpress</b>
              </li>
            </ul>
          </div>
          {/* <div className={style.getStarted}> <button>Get started</button> </div> */}
        </div>
      </div>

      {/* ------------------------- contact -------------------------- */}

      <div className={style.contact}>

        <hr className={style.hrThin} />

        <div className={style.quickLinks}>
          <h2>Contact &nbsp; &nbsp; &nbsp; | </h2>
          <p>
            <Link to={"/"}>Home</Link>
          </p>

          <p>
            <Link to={"/About"}>About</Link>
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
    </motion.div>
  );
}

export default LearnMore;
