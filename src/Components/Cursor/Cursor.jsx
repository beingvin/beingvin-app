import React, { useEffect, useRef } from "react";
import style from "./style.module.css";

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    // Only activate for devices with a fine pointer (mouse/trackpad)
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      if (cursorRef.current) {
        cursorRef.current.style.display = "none";
      }
      return;
    }

    const cursorEl = cursorRef.current;
    if (!cursorEl) return;

    let mouseX = -100;
    let mouseY = -100;
    let rafId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const render = () => {
      cursorEl.style.transform = `translate3d(${mouseX - 6}px, ${mouseY - 6}px, 0)`;
      rafId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={cursorRef} className={style.cursor}></div>;
}

export default Cursor;
