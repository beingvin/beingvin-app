import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Filter({ handleChange, handleClick , active}) {

  const buttons = [
    "Static",
    "Dynamic",
    "Premium",
    "React",
    "App",
    "Web Design",
    "Landing Page",
  ];

  return (
    <div className={style.searchBox}>
      <p> Select your interest</p>
      {buttons.map((btn, index) => (
        <button
          key={index}
          value={btn}
          onClick={handleClick}
          className={active === btn ? style.active : ""}
        >
          {btn}
        </button>
      ))}

      <form action="#">
        <div className={style.inputField}>
          <FontAwesomeIcon className={style.inputIcon} icon={faSearch} />
          <input
            type="search"
            name="search"
            placeholder="search"
            onChange={handleChange}
          />
        </div>
      </form>
    </div>
  );
}

export default Filter;
