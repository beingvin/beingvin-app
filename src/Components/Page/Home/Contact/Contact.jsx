import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <section className={style.section}>
      <div className={style.wrapper}>
        <h1>
          <a href="tel:+9011732439">Let's Talk</a>
        </h1>

        <p>Let's Build Something Greate. </p>
        <p>And take your online presence to the next level,</p>

        <div className={style.whatsApp}>
          <a href="https://wa.me/919011732439?text=Hi There! " target="_blank">
            {" "}
            Say Hi &nbsp; <FontAwesomeIcon icon={faWhatsapp} />{" "}
          </a>{" "}
        </div>

        <form action="#" method="post">
          <div>
            <label htmlFor="Name">Name</label>
            <input type="text" name="Name" placeholder="Your Name " />
          </div>
          <div>
            <label htmlFor="Email">Email</label>
            <input type="text" name="Email" placeholder="Your Email" />
          </div>
          <div>
            <label htmlFor="Pname">Website</label>
            <input type="text" name="Pname" placeholder="Your Website" />
          </div>
          <div>
            <label htmlFor="Message">Details</label>

            <textarea
              name="Message"
              rows="4"
              cols="50"
              placeholder="Give a few details about what you need"
            ></textarea>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
