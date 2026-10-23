import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { gsap, Power3 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import style from "./style.module.css";
import services from "./servicesData";
import LearnMore from "./LearnMore";

gsap.registerPlugin(ScrollTrigger);

function Services() {
  const wrapperRef = useRef(null);
  const [activeService, setActiveService] = useState(null);
  const closeLearnMore = useCallback(() => setActiveService(null), []);

  useEffect(() => {
    const element = wrapperRef.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const cards = element.querySelectorAll(`.${style.card}`);
    const context = gsap.context(() => {
      gsap.fromTo(
        cards,
        { y: 20, opacity: 0 },
        {
          duration: 0.45,
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: element,
            scroller: element.closest(".container") || window,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, element);

    return () => context.revert();
  }, []);

  return (
    <section className={style.section} id="services" aria-labelledby="services-heading">
      <div className="sectionTitle">
        <h1 id="services-heading">•• SERVICES</h1>
      </div>
      <ul className={`${style.wrapper} triggerCards`} ref={wrapperRef}>
        {services.map((service) => (
          <li className={style.card} key={service.slug}>
            <h2>{service.title}</h2>
            <hr className={style.hrThin} />
            <p>{service.description}</p>
            <button
              className={style.cardLink}
              type="button"
              onClick={() => setActiveService(service)}
              aria-haspopup="dialog"
            >
              Know More
            </button>
          </li>
        ))}
      </ul>
      <AnimatePresence>
        {activeService && (
          <LearnMore service={activeService} onClose={closeLearnMore} />
        )}
      </AnimatePresence>
    </section>
  );
}

export default Services;
