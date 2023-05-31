import React from "react";
import style from "../style.module.css";
import { color } from "framer-motion";

function chooseType({ setPage, formData, setFormData }) {
  const btnStyle = {
    backgroundColor: "#fe005d",
    border: "2px solid #fe005d",
    color: "#fff",
  };
  return (
    <>
      <div className={style.buttons}>
        <button
          className={style.button}
          value="Single"
          style={formData.type === "Single" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              type: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          Single
        </button>
        <button
          className={style.button}
          value="Multipage"
          style={formData.type === "Multipage" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              type: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          Multipage
        </button>
        <button
          className={style.button}
          value="Landing Page"
          style={formData.type === "Landing Page" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              type: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          Landing Page
        </button>
        <button
          className={style.button}
          value="Website Design"
          style={formData.type === "Website Design" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              type: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          Website Design
        </button>
      </div>
    </>
  );
}

export default chooseType;
