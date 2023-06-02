import React, { useEffect, useRef } from "react";
import style from "./style.module.css";
import logo from "./logo.gif";
import { gsap, Power3 } from "gsap";

function Preloader() {
  const wrapperRef = useRef(null);
  const countRef = useRef(null);
  const logoRef = useRef(null);

  const tl = useRef();

  useEffect(() => {
    const element = countRef.current;
    const element2 = logoRef.current;
    const element3 = wrapperRef.current;

    tl.current = gsap
      .timeline()
      .fromTo(
        element.querySelectorAll("h1"),
        { y: -150 },
        {
          y: 150,
          // delay: 1,
          duration: 1.5,
          opacity: 1,
          stagger: 0.5,
          ease: "Power4.ease",
        }
      )
      .fromTo(
        element2,
        {
          display: "none",
          opacity: 0,
        },
        { display: "block", opacity: 1,  duration: 1 }
      )
      .to(element3, {
        top: "-100vh",
        // opacity:0,
        delay: 1,
        duration: 1.5,
        ease: "Power4.ease",
      });

    // ScrollTrigger.refresh();
    // console.log(gsap.plugins);
  }, []);

  return (
    // <figure className={style.figure}>
    //   <span></span>
    //   <span></span>
    //   <span></span>
    //   <span></span>
    //   <span></span>
    //   <span></span>
    // </figure>
    <div ref={wrapperRef} className={style.wrapper}>
      <div className={style.countDown} ref={countRef}>
        <h1 id="zero">00</h1>
        <h1 id="twentyFive">25</h1>
        <h1 id="fifty">50</h1>
        <h1 id="seventyFive">75</h1>
        <h1 id="hundred">100</h1>
      </div>
      <div className={style.logo} ref={logoRef}>
        <img src={logo} alt="logo" className={style.img} />
      </div>
    </div>
  );
}

export default Preloader;
