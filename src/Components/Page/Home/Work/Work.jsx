import React, { useState } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Projects from "./Projects/Projects";
import data from "./data.json";

function Work() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);

  const filterBtn = [
    "Static",
    "Dynamic",
    "Premium",
    "React",
    "App",
    "Web Design",
    "Landing Page",
  ];

  const filteredData = data.filter((item) => {
    return query === ""
      ? item
      : item.category.some((cat) =>
          cat.type.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        );
  });

  const handleClick = (e) => {
    const btnValue = e.target.value;
    setActive(active === btnValue ? null : btnValue);
    setQuery(active === btnValue ? "" : btnValue);
  };

  const handleChange = (e) => {
    return setQuery(e.target.value);
  };

  return (
    <section className={style.section}>
      <div className={style.title}>
        <h1> •• WORKS</h1>
      </div>
      <div className={style.wrapper}>
        <div className={style.searchBox}>
          Select your interest
          {filterBtn.map((btn, index) => (
            <button
              key={index}
              value={btn}
              onClick={handleClick}
              className={active === btn ? style.active : ""}
            >
              {btn}
            </button>
          ))}
          {/* <button value="Static" onClick={handleClick}  > 
            Static
          </button>
          <button value="Dynamic" onClick={handleClick}>
            Dynamic
          </button>
          <button value="Premium" onClick={handleClick}>
            Premium
          </button>
          <button value="Web design" onClick={handleClick}>
            Web design
          </button>
          <button value="Landing page" onClick={handleClick}>
            Landing page
          </button>
          <button value="App" onClick={handleClick}>
            App
          </button> */}
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
        <Projects data={filteredData} />
      </div>
    </section>
  );
}

export default Work;
