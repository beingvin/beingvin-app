import React from "react";
import style from "../style.module.css";

function projectDetails({ setPage, formData, setFormData }) {
  return (
    <>
      <div className={style.proDetails}>
        <div>
          {" "}
          <textarea
            name="details"
            placeholder="Please share some project details"
            className={style.textarea}
            cols="60"
            rows="5"
            value={formData.proDetails}
            onChange={(e) =>
              setFormData({
                ...formData,
                proDetails: e.target.value,
              })
            }
          ></textarea>
        </div>

        <div>
          {" "}
          <button
            type="button"
            className={style.button}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default projectDetails;
