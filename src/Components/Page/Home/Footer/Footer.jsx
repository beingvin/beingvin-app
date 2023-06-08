import React, { useRef, useEffect } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Footer() {
  const currentYear = new Date().getFullYear();

  console.log(currentYear);

  // GSAP Animation
  const wrapperRef = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const element = wrapperRef.current;

  //   gsap.fromTo(
  //     element,
  //     { y: 20, opacity: 0 },
  //     {
  //       duration: 1,
  //       y: 0,
  //       opacity: 1,
  //       ease: Power3.easeInOut,
  //       scrollTrigger: {
  //         trigger: element,
  //         scroller: "body",
  //         // markers: true,
  //         start: "top 80%",
  //         // end: "top top",
  //         // scrub:2
  //       },
  //       // stagger: 0.3,
  //     }
  //   );
  //    ScrollTrigger.refresh();
  // }, []);

  return (
    <section className={style.section} ref={wrapperRef}>
      <footer className={style.footer}>
        {/* <h2>Schedule a call and have us listen to your specific case</h2> */}

        <h3>
          {" "}
          <hr className={style.hr} /> I'm available for short and long-term
          projects
        <hr className={style.hrThin} />

        </h3>

        <div className={style.socialIcons}>
          <ul>
            <motion.li
              whileHover={{
                y: -30,
                transition: { duration: 1, type: "spring", stiffness: 2000 },
              }}
            >
              <FontAwesomeIcon icon={faFacebook} />

              <a
                href="https://www.facebook.com/beingvin"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </motion.li>

            <motion.li
              whileHover={{
                y: -30,
                transition: { duration: 1, type: "spring", stiffness: 2000 },
              }}
            >
              <FontAwesomeIcon icon={faTwitter} />
              <a
                href="https://twitter.com/beingvin"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </motion.li>

            <motion.li
              whileHover={{
                y: -30,
                transition: { duration: 1, type: "spring", stiffness: 2000 },
              }}
            >
              <FontAwesomeIcon icon={faInstagram} />
              <a
                href="https://instagram.com/beingvin"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </motion.li>
            <motion.li
              whileHover={{
                y: -30,
                transition: { duration: 1, type: "spring", stiffness: 2000 },
              }}
            >
              <FontAwesomeIcon icon={faGithub} />
              <a
                href="https://github.com/beingvin"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </motion.li>
          </ul>
        </div>

        <p>&copy; {currentYear} Beingvin. All rights reserved </p>
      </footer>
    </section>
  );
}

export default Footer;
