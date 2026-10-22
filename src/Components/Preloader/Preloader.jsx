import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import logo from "./logo.gif";
import { gsap } from "gsap";

function Preloader() {
  const [loading, setLoading] = useState(0);

  const count = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

  const wrapperRef = useRef(null);
  const countRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Smooth progress counter from 0 to 100 over ~1.6s
    const interval = setInterval(() => {
      setLoading((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 80);

    const ctx = gsap.context(() => {
      if (countRef.current) {
        gsap.fromTo(
          countRef.current.querySelectorAll("p"),
          { x: -50, opacity: 0 },
          {
            x: 80,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: "power4.out",
          }
        );
      }

      if (logoRef.current && wrapperRef.current) {
        gsap
          .timeline()
          .fromTo(
            logoRef.current,
            { display: "none", opacity: 0 },
            { display: "block", opacity: 1, duration: 0.8, delay: 0.2 }
          )
          .to(wrapperRef.current, {
            top: "-100vh",
            delay: 0.8,
            duration: 0.8,
            ease: "power4.inOut",
          });
      }
    });

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
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
