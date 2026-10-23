import React, { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";

function LearnMore({ service, onClose }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const scrollLockRef = useRef(null);

  const releaseScrollLock = useCallback(() => {
    const scrollLock = scrollLockRef.current;
    if (!scrollLock) return;

    scrollLock.container.style.overflow = scrollLock.previousOverflow || "";
    scrollLockRef.current = null;
  }, []);

  useEffect(() => {
    const previousActiveElement = document.activeElement;
    const scrollContainer = document.querySelector(".container");
    const previousOverflow = scrollContainer?.style.overflow;

    if (scrollContainer) {
      scrollContainer.style.overflow = "hidden";
      scrollLockRef.current = {
        container: scrollContainer,
        previousOverflow,
      };
    }
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusableElements?.length) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      releaseScrollLock();
      previousActiveElement?.focus?.();
    };
  }, [onClose, releaseScrollLock]);

  return (
    <motion.div
      className={style.modalBackdrop}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.section
        ref={dialogRef}
        className={style.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={`${service.slug}-dialog-title`}
        aria-describedby={`${service.slug}-dialog-description`}
        initial={{ y: 16, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 12, scale: 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <button
          ref={closeButtonRef}
          className={style.closeBtn}
          type="button"
          onClick={onClose}
          aria-label={`Close ${service.title} details`}
        >
          <FontAwesomeIcon icon={faClose} aria-hidden="true" />
        </button>
        <p className={style.modalEyebrow}>Service details</p>
        <h2 className={style.modalTitle} id={`${service.slug}-dialog-title`}>
          {service.title}
        </h2>
        <p
          className={style.modalDescription}
          id={`${service.slug}-dialog-description`}
        >
          {service.details}
        </p>
        <h3 className={style.modalSubheading}>Services include</h3>
        <ul className={style.modalList}>
          {service.deliverables.map((deliverable) => (
            <li key={deliverable}>{deliverable}</li>
          ))}
        </ul>
        <div className={style.modalActions}>
          {service.slug === "website-design-development" && (
            <Link
              className={style.modalCta}
              to="/Services/Pricing"
              onClick={() => {
                releaseScrollLock();
                onClose();
              }}
            >
              View Pricing
            </Link>
          )}
          <Link
            className={style.modalCta}
            to={`/?service=${service.slug}#contact`}
            onClick={() => {
              releaseScrollLock();
              onClose();
            }}
          >
            Enquire about this service
          </Link>
        </div>
      </motion.section>
    </motion.div>
  );
}

export default LearnMore;
