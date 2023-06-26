import React, { useEffect, useState, useRef } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faIndianRupeeSign,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../Logo/Logo";
import ContactMe from "./ContactMe/ContactMe";
import "react-multi-carousel/lib/styles.css";
import { useIntersection } from "react-use";
import { gsap, Power3 } from "gsap";
import GetStarted from "./GetStarted/GetStarted";
import PageTransition from "../../../PageTransition/PageTransition";

function LearnMore() {
  const [priceTerms, setPriceTerms] = useState(false);
  const [getStarted, setGetStarted] = useState(false);
  const transition = { duration: 2, ease: [0.6, 0.1, 0.05, 0.9] };
  // const navigate = useNavigate();

  const sectionRef = useRef(null);
  const cardWrapper = useRef(null);

  // const interSection = useIntersection(sectionRef, {
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 0.5,
  // });

  // const FadeIn = (elements) => {
  //   console.log("in");
  //   gsap.to(elements, {
  //     duration: 1,
  //     opacity: 1,
  //     y: -0,
  //     ease: "power4.out",
  //     yoyo: true,
  //     each: 0.1,
  //   });
  // };

  // const FadeOut = (elements) => {
  //   console.log("out");

  //   gsap.to(elements, {
  //     duration: 1,
  //     opacity: 0,
  //     y: -60,
  //     ease: "power4.out",
  //     yoyo: true,
  //     each: 0.1,
  //   });
  // };

  // interSection && interSection.intersectionRatio < 0.5
  //   ? FadeOut(cardWrapper)
  //   : FadeIn(cardWrapper);

  // interSection && interSection.intersectionRatio < 0.5
  //   ? console.log("In")
  //   : console.log("Out");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageTransition />
      <motion.div
        className={style.wrapper}
        initial={{ opacity: 0, x: -400 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { delay: 1.5, duration: 1, ease: [0.6, 0.1, 0.05, 0.9] },
        }}
        exit={{
          opacity: 0,
          x: -window.innerWidth,
          transition: { duration: 0.5, ease: [0.6, 0.1, 0.05, 0.9] },
        }}
        ref={sectionRef}
      >
        <Link to={"/"}>
          <Logo />
        </Link>
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
                  <b>Contact</b> Section
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
              <button
                className={style.getStartedBtn}
                onClick={() => {
                  setGetStarted(true);
                }}
              >
                Get started
              </button>
            </div>
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
                  <b>Chat Button</b> Integration
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
                  <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Built{" "}
                  <b>Custom / Wordpress</b>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faTimesCircle} /> &nbsp;{" "}
                </li>
              </ul>
              <button
                className={style.getStartedBtn}
                onClick={() => setGetStarted(true)}
              >
                Get started
              </button>
            </div>
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
                  <b>Live Chat</b> Integration
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
                  <FontAwesomeIcon icon={faCheckCircle} /> &nbsp; Fully{" "}
                  <b>Custom Built</b>
                </li>
                <li>
                  <FontAwesomeIcon icon={faCheckCircle} /> &nbsp;
                  <b>Admin</b> Panal
                </li>
              </ul>
              <button
                className={style.getStartedBtn}
                onClick={() => setGetStarted(true)}
              >
                Get started
              </button>
            </div>
          </div>
          <AnimatePresence>
            {getStarted ? <GetStarted setGetStarted={setGetStarted} /> : ""}
          </AnimatePresence>
        </div>
        {/* <GetStarted /> */}
        <div>
          <p
            className={style.priceTermsBtn}
            onClick={() => setPriceTerms(!priceTerms)}
          >
            <span className={`${priceTerms ? style.rotate : " "}`}>
              {priceTerms ? "-" : "+"}
            </span>
            What is included in the price?
          </p>
          <div
            className={` ${style.priceTerms} ${priceTerms ? style.show : " "}`}
          >
            <div>
              {" "}
              <ul>
                <li>Analysis of competitors and target audience</li>
                <li>Working out the structure of the site</li>
                <li>Reference Analysis</li>
                <li>Text prototype</li>
                <li>Design layout of the whole site</li>
                <li>adaptation for basic resolutions</li>
                <li>Modern and appropriate animation</li>
                <li>Basic SEO optimization, favicon</li>
                <li>
                  {" "}
                  Technical settings: domain connection, SSL-certificate,
                  feedback forms, etc.
                </li>
                <li>
                  Technical pages (success page, 404 error, privacy policy)
                </li>
                <li>One language version of the site</li>
                <li>
                  Providing training for independent use of the site (screen
                  recording with instructions)
                </li>
              </ul>
              <ul>
                <h5>The price does not include:</h5>
                <li>
                  Development of corporate identity, logo, text translation,
                  photo processing, calculator development, widgets and any
                  other non-standard functional elements of the site
                </li>
                <li>Domain cost</li>
                <li>Hosting cost</li>
              </ul>
            </div>
          </div>
        </div>
        ;{/* ------------------------- contact -------------------------- */}
        <ContactMe />
      </motion.div>
    </>
  );
}

export default LearnMore;
