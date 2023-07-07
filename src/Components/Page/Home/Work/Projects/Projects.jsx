import React, { useEffect, useRef } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Projects(props) {
  const data = props.data;
  const dataLength = Object.keys(data).length;
  const wrapperRef = useRef(null);

  // // GSAP Animation
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const element = wrapperRef.current.querySelectorAll(`.${style.card}`);
  //   console.log("projects");

  //   gsap.fromTo(
  //     element,
  //     { y: -40, opacity: 0, scale: 0 },
  //     {
  //       duration: 1,
  //       y: 0,
  //       opacity: 1,
  //       scale: 1,
  //       ease: Power3.easeInOut,
  //       scrollTrigger: {
  //         trigger: element,
  //         scroller: "body",
  //         markers: true,
  //         start: 1400,
  //         end: 1800,
  //         // scrub:2
  //       },
  //       stagger: 0.3,
  //     }
  //   );

  //   ScrollTrigger.refresh();
  // }, []);

  return (
    <div className={style.cards} ref={wrapperRef}>
      {dataLength > 0 ? (
        data.map((data) => {
          return (
            <div key={data.id} className={style.card}>
              <div className={style.image}>
                <img src={data.src} alt="Project" />
              </div>
              <div className={style.cardTitle}>
                <h2>{data.name}</h2>
              </div>
              <div className={style.searchItem}>
                {data.category.map((item) => {
                  return <button key={item.id}>{item.type}</button>;
                })}

                <a
                  href={data.link}
                  target="_blank"
                  rel="noreferrer"
                  className={style.externalLinkIcon}
                >
                  <FontAwesomeIcon icon={faExternalLinkSquare} />
                </a>
              </div>
            </div>
          );
        })
      ) : (
        <div style={{ color: "#fff", margin: "10% auto" }}>No Result</div>
      )}
    </div>
  );
}

export default Projects;
