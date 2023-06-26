import React from "react";
import style from "../style.module.css";

function clientDetailsjsx({ formData, setFormData }) {
  return (
    <>
      <div className={style.clientDetails}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            className={style.input}
            value={formData.clientDetails.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientDetails: {
                  ...formData.clientDetails,
                  name: e.target.value,
                },
              })
            }
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className={style.input}
            value={formData.clientDetails.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientDetails: {
                  ...formData.clientDetails,
                  email: e.target.value,
                },
              })
            }
            required
          />
        </div>
        <div>
          <input
            type="url"
            placeholder="Your Website link"
            title="You can only enter website link, Format: https://www.example.com"

            className={style.input}
            value={formData.clientDetails.website}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientDetails: {
                  ...formData.clientDetails,
                  website: e.target.value,
                },
              })
            }
          />
          <input
            type="tel"
            pattern="[+]{1}[0-9]{2} [0-9]{3}-[0-9]{3}-[0-9]{4}"
            maxLength="16" 
            title="You can only enter numbers, Format: +91 123-456-7890"
            placeholder="Your Phone"
            className={style.input}
            value={formData.clientDetails.mobile}
            onChange={(e) =>
              setFormData({
                ...formData,
                clientDetails: {
                  ...formData.clientDetails,
                  mobile: e.target.value,
                },
              })
            }
            required
          />
        </div>
        <textarea
          name=""
          className={style.textarea}
          cols="10"
          rows="4"
          placeholder="Any Additional Details"
          value={formData.clientDetails.adDetails}
          onChange={(e) =>
            setFormData({
              ...formData,
              clientDetails: {
                ...formData.clientDetails,
                adDetails: e.target.value,
              },
            })
          }
          required
        ></textarea>
        <div>
          <button
            type="submit"
            className={style.submitBtn}
            // onClick={(e) => {
            //   e.preventDefault();
            //   console.log(formData);
            // }}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default clientDetailsjsx;
