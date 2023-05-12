import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section className={style.section} id="contact">
      <div className={style.title}>
        <h1> •• CONTACT</h1>
      </div>
      <div className={style.wrapper}>
        <div className={style.talkToMe}>
          <div className={style.tagLines}>
            <p>Let's Build Something Greate ! </p>
            <p>And take your online presence to the next level.</p>
          </div>
          <div className={style.talk}>
            <h1>
              <a href="tel:+9011732439">
                Let's Talk{" "}
                <span>
        
                  <FontAwesomeIcon className={style.upRightArrow1} icon={faArrowRight} />
                  <FontAwesomeIcon className={style.upRightArrow2} icon={faArrowRight} />


                </span>
              </a>
            </h1>
          </div>
          <div className={style.chat}>
            <a
              href="https://wa.me/+919011732439?text=Hi there ! i need a website"
              target="_blank"
            >
              Say Hi &nbsp; <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
        </div>
        <div className={style.writeMe}>
          <form action="#" method="post">
            <input type="text" name="Name" placeholder="Your Name " />
            <input type="text" name="Email" placeholder="Your Email" />
            <input type="text" name="Pname" placeholder="Your Website" />
            <textarea
              name="Message"
              rows="4"
              cols="30"
              placeholder="Give a few details about what you need"
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
