import React from "react";
import style from "./style.module.css";

function chooseBudget({ setPage, formData, setFormData }) {
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
          value="> 5K"
          style={formData.budget === "> 5K" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              budget: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          {"> 5K"}
        </button>
        <button
          className={style.button}
          value="5K - 10K"
          style={formData.budget === "5K - 10K" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              budget: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          {" "}
          5K - 10K
        </button>
        <button
          className={style.button}
          value="10K - 15K"
          style={formData.budget === "10K - 15K" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              budget: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          10K - 15K
        </button>
        <button
          className={style.button}
          value="+ 20K"
          style={formData.budget === "+ 20K" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              budget: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          + 20K
        </button>
      </div>
    </>
  );
}

export default chooseBudget;
