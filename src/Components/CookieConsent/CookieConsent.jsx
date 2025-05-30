import React, { useEffect, useState } from "react";
import style from "./style.module.css";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookieAccepted");
    if (!accepted) {
      setTimeout(() => {
        setVisible(true); // delay for staggered entrance
      }, 400); // 400ms delay
    }
  }, []);

  const acceptCookies = () => {
    setDismissed(true); // trigger fadeOut animation
    setTimeout(() => {
      localStorage.setItem("cookieAccepted", "true");
      setVisible(false); // actually remove after animation
    }, 500); // match with CSS fadeOut duration
  };

  if (!visible) return null;

  return (
    <div className={`${style.cookieConsent} ${dismissed ? style.fadeOut : ""}`}>
      <p className={style.text}>
        We use cookies to enhance your browsing experience, serve personalized
        content, and analyze traffic.{" "}
        <a href="/privacy" className={style.link}>
          Learn more
        </a>
      </p>
      <button className={style.button} onClick={acceptCookies}>
        Accept
      </button>
    </div>
  );
};

export default CookieConsent;
