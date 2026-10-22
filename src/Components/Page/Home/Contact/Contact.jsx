import React, { useRef, useState } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import db from "../../../config/Firebase/FirebaseConfig";
import Email from "../../../config/SMTP/smtp";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";

function Contact() {
  const collectionRef = collection(db, process.env.REACT_APP_COLLECTION_NAME_2);
  const [submit, setSubmit] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [loading, setLoading] = useState(false);

  const wrapperRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent double submission

    setLoading(true);
    setSubmit(false);
    setSubmitError("");

    const name = e.target.Name.value;
    const email = e.target.Email.value;
    const phone = e.target.Phone.value;
    const website = e.target.Website.value;
    const message = e.target.Message.value;

    // 1. ALWAYS save to Firestore first so inquiries are never lost
    try {
      await addDoc(collectionRef, {
        Name: name,
        Email: email,
        Website: website,
        Phone: phone,
        Message: message,
        Remark: "inquiry",
        Time: serverTimestamp(),
      });
      setSubmit(true);
      e.target.reset();
    } catch (err) {
      console.error("Error saving inquiry:", err);
      setSubmitError(
        "We couldn't confirm your inquiry was submitted. Please try again, or contact us directly."
      );
      setLoading(false);
      return;
    }

    // 2. Safely attempt to send email notification
    try {
      const mailClient = (typeof window !== "undefined" && window.Email) || Email;
      if (mailClient && mailClient.send && process.env.REACT_APP_SMTP_SECURE_TOKEN) {
        mailClient
          .send({
            SecureToken: process.env.REACT_APP_SMTP_SECURE_TOKEN,
            To: process.env.REACT_APP_NOTIFICATION_TO_EMAIL || "pythont2021@gmail.com",
            From: process.env.REACT_APP_NOTIFICATION_FROM_EMAIL || "notification@beingvin.com",
            Subject: "Received New Client Details | Beingvin.com",
            Body: `Name : ${name} <br/>
            Email Id : ${email}  <br/>
            Mobile No : ${phone}  <br/>
            Website link : ${website}  <br/>
            Message : ${message} <br>`,
          })
          .then((response) => {
            console.log("SMTP email response:", response);
          })
          .catch((mailErr) => {
            console.warn("SMTP email notification failed or blocked:", mailErr);
          });
      }
    } catch (mailEx) {
      console.warn("Email service unavailable:", mailEx);
    } finally {
      setLoading(false);
    }

    setTimeout(() => setSubmit(false), 8000);
  };

  return (
    <section className={style.section} id="contact" ref={wrapperRef}>
      <div
        className={"sectionTitle " + style.sectionTitle}
        style={{ margin: "5% 2% 2%" }}
      >
        <h1 style={{ color: "#3d3d3d" }}> •• CONTACT</h1>
      </div>
      <div className={style.wrapper}>
        <div className={style.talkToMe}>
          <div className={style.tagLines}>
            <p>Let's Build Something Great ! </p>
            <p>And take your online presence to the next level.</p>
          </div>
          <div className={style.talk}>
            <h1>
              <a href="tel:+919916742022" rel="noreferrer">
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
              href="https://wa.me/+919916742022?text=Hi,%20I'm%20interested%20in%20your%20web%20development%20services.%20Can%20we%20discuss%20my%20project?"
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
            onSubmit={handleSubmit}
            id="getInTouch"
          >
            {submit ? (
              <p className={style.thankYouMsg}>Sent , Thank you !</p>
            ) : (
              ""
            )}
            {submitError && (
              <p className={style.submitError} role="alert">
                {submitError}
              </p>
            )}

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
                name="Phone"
                type="tel"
                pattern="[0-9+() -]{7,20}"
                maxLength="20"
                title="Enter a valid phone number (e.g. +91 9916742022 or 9916742022)"
                placeholder="Your Phone"
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
            <button
              className={style.submitBtn}
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
