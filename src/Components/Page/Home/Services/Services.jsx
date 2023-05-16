import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Services() {
  const navigate = useNavigate();

  return (
    <section className={style.section}>
      <div className="sectionTitle"><h1> •• SERVICES</h1></div>
      <div className={style.wrapper}>
        <div className={style.card}>
          <h3>SINGLEPAGE SITE</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 2999
          </span>
          <hr className={style.hrThin} />
          <p>Design and development of your own singlepage website. </p>
          <button onClick={() => navigate("/Services/Pricing")}>Learn More</button>
        </div>
        <div className={style.card}>
          <h3>MULTIPAGE SITE</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 5999
          </span>
          <hr className={style.hrThin} />
          <p>Design and development of your own multipage website. </p>
          <button onClick={() => navigate("/Services/Pricing")}>Learn More</button>
        </div>
        <div className={style.card}>
          <h3>LANDING PAGE</h3>
          <span>
            From <FontAwesomeIcon icon={faIndianRupeeSign} /> 4499
          </span>
          <hr className={style.hrThin} />
          <p>Design and development of your own landing page website. </p>
          
          <button onClick={() => navigate("/Services/Pricing")}>Learn More</button>
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
          <button onClick={() => navigate("/Services/Pricing")}>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
