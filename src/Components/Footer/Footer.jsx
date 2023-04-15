import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className={style.section}>
      <footer className={style.footer}>
        {/* <h2>Schedule a call and have us listen to your specific case</h2> */}
        <h2>I'm available for small and short-term projects</h2>

        <hr className={style.hrThin} />

        <div className={style.socialIcons}>
          <ul>
            <li>
              <FontAwesomeIcon icon={faFacebook} />
            </li>

            <li>
              <FontAwesomeIcon icon={faTwitter} />
            </li>

            <li>
              <FontAwesomeIcon icon={faInstagram} />
            </li>
            <li>
              <FontAwesomeIcon icon={faGithub} />
            </li>
          </ul>
        </div>

        <p>&copy;2023 Beingvin. All rights reserved </p>

        <hr className={style.hr} />
      </footer>
    </section>
  );
}

export default Footer;
