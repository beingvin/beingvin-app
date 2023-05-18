import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";

function Projects(props) {
  const data = props.data;
  const dataLength = Object.keys(data).length;
  

  return (
    <div className={style.cards}>
      {dataLength > 0 ? (
        data.map((data) => {
          return (
            <div key={data.id} className={style.card}>
              <div className={style.image}>
                <img src={data.link} alt="Project" />
              </div>
              <div className={style.cardTitle}>
                <h2>{data.name}</h2>
              </div>
              <div className={style.searchItem}>
                {data.category.map((item) => {
                  return <button key={item.id}>{item.type}</button>;
                })}

                <a
                  href="http://www.beingvin.com"
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
