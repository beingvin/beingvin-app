import React from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkSquare,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

function Work() {
  return (
    <section className={style.section}>
      <div className={style.title}>
        <h1> •• WORKS</h1>
      </div>
      <div className={style.wrapper}>
        <div className={style.searchBox}>
          Select your interest
          <button>Static</button>
          <button>Dynamic</button>
          <button>Premium</button>
          <button>Web design</button>
          <button>Landing page</button>
          <button>App</button>
          <form action="#">
            <div className={style.inputField}>
              <FontAwesomeIcon className={style.inputIcon} icon={faSearch} />
              <input type="search" name="search" placeholder="search" />
            </div>
          </form>
        </div>
        <div className={style.cards}>
          <div className={style.card}>
            <div className={style.image}>
              <img
                src="https://source.unsplash.com/random/600×400/?code"
                alt="image"
              />
            </div>
            <div className={style.cardTitle}>
              <h2>Project name</h2>
            </div>
            <div className={style.searchItem}>
              <button>Static</button>
              <button>Dynamic</button>
              <button>App</button>

              <a
                href="http://www.beingvin.com"
                target="_blank"
                className={style.externalLinkIcon}
              >
                <FontAwesomeIcon icon={faExternalLinkSquare} />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <img
                src="https://source.unsplash.com/random/600×400/?code"
                alt="image"
              />
            </div>
            <div className={style.cardTitle}>
              <h2>Project name</h2>
            </div>
            <div className={style.searchItem}>
              <button>Static</button>
              <button>Dynamic</button>
              <button>App</button>

              <a
                href="http://www.beingvin.com"
                target="_blank"
                className={style.externalLinkIcon}
              >
                <FontAwesomeIcon icon={faExternalLinkSquare} />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <img
                src="https://source.unsplash.com/random/600×400/?code"
                alt="image"
              />
            </div>
            <div className={style.cardTitle}>
              <h2>Project name</h2>
            </div>
            <div className={style.searchItem}>
              <button>Static</button>
              <button>Dynamic</button>
              <button>App</button>

              <a
                href="http://www.beingvin.com"
                target="_blank"
                className={style.externalLinkIcon}
              >
                <FontAwesomeIcon icon={faExternalLinkSquare} />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <img
                src="https://source.unsplash.com/random/600×400/?code"
                alt="image"
              />
            </div>
            <div className={style.cardTitle}>
              <h2>Project name</h2>
            </div>
            <div className={style.searchItem}>
              <button>Static</button>
              <button>Dynamic</button>
              <button>App</button>

              <a
                href="http://www.beingvin.com"
                target="_blank"
                className={style.externalLinkIcon}
              >
                <FontAwesomeIcon icon={faExternalLinkSquare} />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <img
                src="https://source.unsplash.com/random/600×400/?code"
                alt="image"
              />
            </div>
            <div className={style.cardTitle}>
              <h2>Project name</h2>
            </div>
            <div className={style.searchItem}>
              <button>Static</button>
              <button>Dynamic</button>
              <button>App</button>

              <a
                href="http://www.beingvin.com"
                target="_blank"
                className={style.externalLinkIcon}
              >
                <FontAwesomeIcon icon={faExternalLinkSquare} />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <img
                src="https://source.unsplash.com/random/600×400/?code"
                alt="image"
              />
            </div>
            <div className={style.cardTitle}>
              <h2>Project name</h2>
            </div>
            <div className={style.searchItem}>
              <button>Static</button>
              <button>Dynamic</button>
              <button>App</button>

              <a
                href="http://www.beingvin.com"
                target="_blank"
                className={style.externalLinkIcon}
              >
                <FontAwesomeIcon icon={faExternalLinkSquare} />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <img
                src="https://source.unsplash.com/random/600×400/?code"
                alt="image"
              />
            </div>
            <div className={style.cardTitle}>
              <h2>Project name</h2>
            </div>
            <div className={style.searchItem}>
              <button>Static</button>
              <button>Dynamic</button>
              <button>App</button>

              <a
                href="http://www.beingvin.com"
                target="_blank"
                className={style.externalLinkIcon}
              >
                <FontAwesomeIcon icon={faExternalLinkSquare} />
              </a>
            </div>
          </div>
          <div className={style.card}>
            <div className={style.image}>
              <img
                src="https://source.unsplash.com/random/600×400/?code"
                alt="image"
              />
            </div>
            <div className={style.cardTitle}>
              <h2>Project name</h2>
            </div>
            <div className={style.searchItem}>
              <button>Static</button>
              <button>Dynamic</button>
              <button>App</button>

              <a
                href="http://www.beingvin.com"
                target="_blank"
                className={style.externalLinkIcon}
              >
                <FontAwesomeIcon icon={faExternalLinkSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
