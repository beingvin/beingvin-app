import React, { useRef } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();
  const wrapperRef = useRef(null);

  return (
    <section className={style.section} ref={wrapperRef}>
      <footer className={style.footer}>
        <h3>
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
              <a
                href="https://www.facebook.com/beingvin"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
                <span className={style.hoverIcon}>
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
              </a>
            </motion.li>

            <motion.li
              whileHover={{
                y: -30,
                transition: { duration: 1, type: "spring", stiffness: 2000 },
              }}
            >
              <a
                href="https://twitter.com/beingvin"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
                <span className={style.hoverIcon}>
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
            </motion.li>

            <motion.li
              whileHover={{
                y: -30,
                transition: { duration: 1, type: "spring", stiffness: 2000 },
              }}
            >
              <a
                href="https://instagram.com/beingvin"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
                <span className={style.hoverIcon}>
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
              </a>
            </motion.li>

            <motion.li
              whileHover={{
                y: -30,
                transition: { duration: 1, type: "spring", stiffness: 2000 },
              }}
            >
              <a
                href="https://github.com/beingvin"
                target="_blank"
                rel="noreferrer noopener"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} />
                <span className={style.hoverIcon}>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
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
