import React from "react";
import style from "../style.module.css";

function chooseTimeframe({ setPage, formData, setFormData }) {
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
          value="Standard"
          style={formData.timeframe === "Standard" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              timeframe: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          Standard
        </button>
        <button
          className={style.button}
          value="WITHIN 1 MONTH"
          style={formData.timeframe === "WITHIN 1 MONTH" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              timeframe: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          WITHIN 1 MONTH
        </button>
        <button
          className={style.button}
          value="WITHIN 2 MONTH"
          style={formData.timeframe === "WITHIN 2 MONTH" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              timeframe: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          WITHIN 2 MONTH
        </button>
        <button
          className={style.button}
          value="WITHIN 4 MONTH"
          style={formData.timeframe === "WITHIN 4 MONTH" ? btnStyle : {}}
          onClick={(e) => {
            setFormData({
              ...formData,
              timeframe: e.target.value,
            });
            setPage((currentPage) => currentPage + 1);
          }}
        >
          WITHIN 4 MONTH
        </button>
      </div>
    </>
  );
}

export default chooseTimeframe;
