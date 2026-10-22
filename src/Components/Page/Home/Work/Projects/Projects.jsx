import React, { useRef } from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

function Projects(props) {
  const data = props.data;
  const dataLength = Array.isArray(data) ? data.length : Object.keys(data).length;
  const wrapperRef = useRef(null);

  return (
    <div className={style.cards} ref={wrapperRef}>
      {dataLength > 0 ? (
        data.map((data) => {
          const projectName = data.name.replace(/\s+/g, "-");
          return (
            <div key={data.id} className={style.card}>
              <Link to={"/Projects/" + data.id + "/" + projectName}>
                <div className={style.image}>
                  <img src={data.src} alt="Project" />
                </div>
              </Link>
              <div className={style.cardTitle}>
                <h2>{data.name}</h2>
              </div>
              <div className={style.searchItem}>
                {data.category.map((item) => {
                  return <button key={item.id}>{item.type}</button>;
                })}
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
