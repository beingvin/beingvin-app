import React from "react";
import style from "./style.module.css";

function choosePlan({ setPage, formData, setFormData }) {
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
          value="Basic"
          style={formData.plan === "Basic" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              plan: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          Basic
        </button>
        <button
          className={style.button}
          value="Standard"
          style={formData.plan === "Standard" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              plan: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          Standard
        </button>
        <button
          className={style.button}
          value="Premium"
          style={formData.plan === "Premium" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              plan: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          Premium
        </button>
      </div>
    </>
  );
}

export default choosePlan;
