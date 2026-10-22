import React from "react";
import style from "../style.module.css";

function ClientDetails({ formData, setFormData, loading, submitError }) {
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
            title="You can enter website link, Format: https://www.example.com"
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
            pattern="[0-9+() -]{7,20}"
            maxLength="20"
            title="Enter a valid phone number (e.g. +91 9916742022 or 9916742022)"
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
          name="additionalDetails"
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
        ></textarea>
        {submitError && (
          <p className={style.submitError} role="alert">
            {submitError}
          </p>
        )}
        <div>
          <button
            type="submit"
            className={style.submitBtn}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>
    </>
  );
}

export default ClientDetails;
