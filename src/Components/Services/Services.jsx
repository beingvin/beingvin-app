import React from "react";
import style from "./style.module.css";

function Services() {
  return (
    <section className={style.section}>
      <div>
        <h3>SINGLEPAGE SITE</h3>
        <span>From 20$</span>
        <hr className={style.hrThin} />
        <p>Design and development of your own singlepage website. </p>
      </div>
      <div>
        <h3>MULTIPAGE SITE</h3>
        <span>From 50$</span>
        <hr className={style.hrThin} />
        <p>Design and development of your own multipage website. </p>
      </div>
      <div>
        <h3>LANDING PAGE</h3>
        <span>From 40$</span>
        <hr className={style.hrThin} />
        <p>Design and development of your own landing page website. </p>
      </div>
      <div>
        <h3>SITE DESIGN ONLY</h3>
        <span>From 30$</span>
        <hr className={style.hrThin} />
        <p>
          The layout of the site in Figma, and prepared for transfer to the
          developer. I will create a website design that will fully comply with
          your wishes, goals and objectives.
        </p>
      </div>
    </section>
  );
}

export default Services;
