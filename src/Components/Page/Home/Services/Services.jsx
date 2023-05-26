import React, { useRef, useEffect } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function Services() {
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

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
        stagger: 0.8,
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
    console.log(gsap.plugins);
  }, []);

  return (
    <section className={style.section}>
      <div className="sectionTitle">
        <h1> •• SERVICES</h1>
      </div>
      <div className={`${style.wrapper} triggerCards`} ref={wrapperRef}>
        <div className={style.card}>
          <h3>SINGLEPAGE SITE</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 2999
          </span>
          <hr className={style.hrThin} />
          <p>Design and development of your own singlepage website. </p>
          <button onClick={() => navigate("/Services/Pricing")}>
            Learn More
          </button>
        </div>
        <div className={style.card}>
          <h3>MULTIPAGE SITE</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 5999
          </span>
          <hr className={style.hrThin} />
          <p>Design and development of your own multipage website. </p>
          <button onClick={() => navigate("/Services/Pricing")}>
            Learn More
          </button>
        </div>
        <div className={style.card}>
          <h3>LANDING PAGE</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 4499
          </span>
          <hr className={style.hrThin} />
          <p>Design and development of your own landing page website. </p>

          <button onClick={() => navigate("/Services/Pricing")}>
            Learn More
          </button>
        </div>
        <div className={style.card}>
          <h3>SITE DESIGN ONLY</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 3999
          </span>
          <hr className={style.hrThin} />
          <p>
            The layout of the site in Figma, and prepared for transfer to the
            developer. I will create a website design that will fully comply
            with your wishes, goals and objectives.
          </p>
          <button onClick={() => navigate("/Services/Pricing")}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Services;
