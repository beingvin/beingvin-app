import React, { useRef, useEffect, useState } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import LearnMore from "./LearnMore";

function Services() {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);
  const [popUp, setPopUp] = useState("");

  // GSAP Animation
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const element = wrapperRef.current;
    gsap.fromTo(
      element.querySelectorAll("." + style.card),
      { y: -40, opacity: 0 },
      {
        duration: 0.5,
        y: 0,
        opacity: 1,
        stagger: 0.3,
        ease: Power3.easeInOut,
        scrollTrigger: {
          trigger: element.querySelector("." + style.card),
          scroller: "body",
          start: 400,
          // end: 600,
          // markers: true,
        },
      }
    );
    // ScrollTrigger.refresh();
    // console.log(gsap.plugins);
  }, []);

  return (
    <section className={style.section} id="services">
      <div className="sectionTitle">
        <h1> •• SERVICES</h1>
      </div>
      <div className={`${style.wrapper} triggerCards`} ref={wrapperRef}>
        <div className={style.card}>
          <h3>SINGLEPAGE SITE</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 10999
          </span>
          <hr className={style.hrThin} />
          <p>
            A sleek and modern website that presents your brand and delivers
            essential information in a seamless scrolling experience.
          </p>
          <button onClick={() => navigate("/Services/Pricing")}>
            Learn More
          </button>
        </div>
        <div className={style.card}>
          <h3>MULTIPAGE SITE</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 14999
          </span>
          <hr className={style.hrThin} />
          <p>
            A comprehensive website with multiple pages to showcase your
            products, services, and company information in a structured manner.
          </p>
          <button onClick={() => navigate("/Services/Pricing")}>
            Learn More
          </button>
        </div>
        <div className={style.card}>
          <h3>LANDING PAGE</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 8499
          </span>
          <hr className={style.hrThin} />
          <p>
            {" "}
            An attention-grabbing page designed to captivate visitors and drive
            conversions for your marketing or advertising campaigns, ultimately
            capturing leads.
          </p>

          <button onClick={() => setPopUp("landingPage")}>Learn More</button>
        </div>
        <div className={style.card}>
          <h3>SITE DESIGN ONLY</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 6499
          </span>
          <hr className={style.hrThin} />
          <p>
            Already have content but need an eye-catching design to elevate your
            website's aesthetics, with a visually stunning and engaging design.
          </p>
          <button onClick={() => setPopUp("design")}>Learn More</button>
        </div>
        <div className={style.card}>
          <h3>WEBSITE REVAMP</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 7999
          </span>
          <hr className={style.hrThin} />
          <p>
            Current website outdated or not performing as expected and want to
            give it a fresh and modern makeover to attract more visitors and
            improve user experience.
          </p>
          <button onClick={() => setPopUp("revamp")}>Learn More</button>
        </div>
        <div className={style.card}>
          <h3>WEBSITE HOSTING</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 999
          </span>
          <hr className={style.hrThin} />
          <p>
            To ensure your website is always accessible and performs optimally,
            I offer reliable and secure hosting solutions for your online
            presence.
          </p>
          <button onClick={() => setPopUp("hosting")}>Learn More</button>
        </div>
      </div>
      {popUp === "landingPage" ||
      popUp === "design" ||
      popUp === "hosting" ||
      popUp === "revamp" ? (
        <LearnMore popUp={popUp} setPopUp={setPopUp} />
      ) : (
        ""
      )}
    </section>
  );
}

export default Services;
