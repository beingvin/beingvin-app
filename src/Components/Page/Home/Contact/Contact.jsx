import React, { useRef, useEffect } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Email } from "./SMTP/smtp";

function Contact() {
  // GSAP Animation
  const wrapperRef = useRef(null);

  // gsap.registerPlugin(ScrollTrigger);

  const sendMail = (e) => {
    e.preventDefault();

    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const mobile = e.target.Mobile.value;
    const website = e.target.Website.value;
    const message = e.target.Message.value;

    console.log(e.target.Name.value);

    window.Email.send({
      SecureToken: "81e3a2bc-8503-4a05-994e-75f5c6bfa553",
      To: "pythont2021@gmail.com",
      From: "notification@beingvin.com",
      Subject: "Recieved New Client Details | Beingvin.com",
      Body: `Name : ${name} <br/>
      Email Id : ${email}  <br/>
      Mobile No : ${mobile}  <br/>
      Website link : ${website}  <br/>
      Message : ${message} <br>`,
    }).then((message) =>
      alert(`Thank You ${name} ! \n I'll Get In Touch With You Soon.`)
    );
    e.target.reset();
  };

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
      <div className="sectionTitle" style={{ margin: "5% 2% 2%" }}>
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
              rel="noreferrer"
            >
              Say Hi &nbsp;{" "}
              <span>
                <FontAwesomeIcon icon={faWhatsapp} />
              </span>
            </a>
          </div>
        </div>
        <div className={style.writeMe}>
          <form
            className={style.form}  
            action="#"
            method="post"
            onSubmit={sendMail}
            id="getInTouch"
          >
            <legend>GET IN TOUCH</legend>
            <input
              className={style.input}
              type="text"
              name="Name"
              placeholder="Your Name "
              required
            />
            <div>
              <input
                className={style.input}
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <input
                className={style.input}
                type="tel"
                maxLength="12"
                name="Mobile"
                title="You can only enter numbers, Format: +91 123-456-7890"
                placeholder="Your Mobile"
                required
              />
            </div>
            <input
              className={style.input}
              type="url"
              name="Website"
              placeholder="Your Website"
            />
            <textarea
              className={style.textarea}
              name="Message"
              rows="4"
              cols="30"
              placeholder="Give a few details about what you need"
              required
            ></textarea>
            <button className={style.submitBtn} type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
