import React, { useRef, useEffect } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Contact() {
  // GSAP Animation
  const wrapperRef = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);

  // useEffect(() => {
  //   const element = wrapperRef.current;

  //   gsap.fromTo(
  //     element,
  //     { y: 200, opacity: 0 },
  //     {
  //       duration: 3,
  //       y: 0,
  //       opacity: 1,
  //       ease: Power3.easeInOut,
  //       scrollTrigger: {
  //         trigger: element,
  //         scroller: "body",
  //         markers: true,
  //         start: "top 80%",
  //         // end: "top top",
  //         // scrub:2
  //       },
  //       // stagger: 0.3,
  //     }
  //   );
  //   ScrollTrigger.refresh();
  // }, []);
  return (
    <section className={style.section} id="contact" ref={wrapperRef}>
      <div className="sectionTitle">
        <h1 style={{ color: "#3d3d3d" }}> •• CONTACT</h1>
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
            <legend>GET IN TOUCH</legend>
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
