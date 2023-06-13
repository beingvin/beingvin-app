import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import logo from "./logo.gif";
import { gsap, Power3 } from "gsap";

function Preloader() {
  // loading progress bar and countdown
  const [loading, setLoading] = useState(0);

  var count = [],
    i = 0,
    len = 100;
  while ((i = i + 10) <= len) count.push(i);

  // gsap
  const wrapperRef = useRef(null);
  const countRef = useRef(null);
  const logoRef = useRef(null);
  const tl = useRef();

  useEffect(() => {
    // loading progress bar
    if (loading <= 100) {
      setLoading((prev) => (prev += 2));
    }

    // gsap
    const element = countRef.current;
    const element2 = logoRef.current;
    const element3 = wrapperRef.current;

    gsap.fromTo(
      // countdown
      element.querySelectorAll("p"),
      { x: -50, opacity: 0 },
      {
        opacity: 1,
        x: 80,
        duration: 1.2,
        opacity: 1,
        stagger: 0.3,
        ease: "Power4.out",
      }
    );

    tl.current = gsap
      .timeline()
      .fromTo(
        element2,
        {
          display: "none",
          opacity: 0,
        },
        { display: "block", opacity: 1, duration: 1, delay: 0.2 }
      )
      .to(element3, {
        top: "-100vh",
        // opacity:0,
        delay: 2,
        duration: 1.5,
        ease: "Power4.ease",
      });

    // ScrollTrigger.refresh();
    // console.log(gsap.plugins);
  }, [loading]);

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
      <div style={{ width: `${loading}%` }} className={style.progressBar}></div>
      <div className={style.countDown} ref={countRef}>
        {count.map((i) => (
          <div key={i}>
            <p>{i}%</p>
          </div>
        ))}
      </div>
      <div className={style.logo} ref={logoRef}>
        <img src={logo} alt="logo" className={style.img} />
      </div>
    </div>
  );
}

export default Preloader;
