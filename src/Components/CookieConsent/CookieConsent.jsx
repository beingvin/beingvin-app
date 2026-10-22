import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    const legacyAccepted = localStorage.getItem("cookieAccepted") === "true";
    let timer;
    if (savedConsent === "accepted" || savedConsent === "rejected") {
      setConsent(savedConsent);
    } else if (legacyAccepted) {
      setConsent("accepted");
    } else {
      timer = setTimeout(() => {
        setVisible(true);
      }, 400);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (consent !== "accepted") return;

    if (!document.getElementById("google-analytics-script")) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = window.gtag || function gtag() {
        window.dataLayer.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", "G-GC5R25MMMX");

      const googleScript = document.createElement("script");
      googleScript.id = "google-analytics-script";
      googleScript.async = true;
      googleScript.src = "https://www.googletagmanager.com/gtag/js?id=G-GC5R25MMMX";
      document.head.appendChild(googleScript);
    }

    if (!document.getElementById("meta-pixel-script")) {
      window.fbq = function fbq() {
        if (window.fbq.callMethod) {
          window.fbq.callMethod.apply(window.fbq, arguments);
        } else {
          window.fbq.queue.push(arguments);
        }
      };
      window.fbq.push = window.fbq;
      window._fbq = window.fbq;
      window.fbq.queue = [];
      window.fbq.loaded = true;
      window.fbq.version = "2.0";
      window.fbq("init", "1633015183967934");
      window.fbq("track", "PageView");

      const pixelScript = document.createElement("script");
      pixelScript.id = "meta-pixel-script";
      pixelScript.async = true;
      pixelScript.src = "https://connect.facebook.net/en_US/fbevents.js";
      document.head.appendChild(pixelScript);
    }
  }, [consent]);

  const saveConsent = (choice) => {
    setDismissed(true);
    setTimeout(() => {
      localStorage.setItem("cookieConsent", choice);
      setConsent(choice);
      setVisible(false);
    }, 500);
  };

  if (!visible) return null;

  return (
    <div className={`${style.cookieConsent} ${dismissed ? style.fadeOut : ""}`}>
      <p className={style.text}>
        We use cookies to enhance your browsing experience, serve personalized
        content, and analyze traffic.{" "}
        <Link to="/privacy" className={style.link}>
          Learn more
        </Link>
      </p>
      <div className={style.actions}>
        <button
          type="button"
          className={style.button}
          onClick={() => saveConsent("rejected")}
        >
          Reject
        </button>
        <button
          type="button"
          className={style.button}
          onClick={() => saveConsent("accepted")}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
