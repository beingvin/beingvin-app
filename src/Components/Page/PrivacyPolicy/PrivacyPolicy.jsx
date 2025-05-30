import React from "react";
import styles from "./style.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Privacy Policy</h1>

      <p className={styles.paragraph}>
        At Beingvin, your privacy is important to us. This Privacy Policy
        outlines how we collect, use, and protect your personal information and
        how cookies are handled on our website.
      </p>

      <h2 className={styles.subheading}>1. What Data We Collect</h2>
      <ul className={styles.list}>
        <li>Basic website usage data (pages visited, browser type, etc.)</li>
        <li>Cookie preferences (essential, optional)</li>
        <li>Optional tracking data if you consent to analytics cookies</li>
      </ul>

      <h2 className={styles.subheading}>2. How We Use Your Data</h2>
      <p className={styles.paragraph}>We use your data to:</p>
      <ul className={styles.list}>
        <li>Improve website performance and user experience</li>
        <li>Analyze traffic via Google Analytics (only after consent)</li>
      </ul>

      <h2 className={styles.subheading}>3. Types of Cookies We Use</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Description</th>
            <th>Consent Required</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Essential Cookies</td>
            <td>Necessary for site functionality and cookie storage</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Analytics Cookies</td>
            <td>Used to track user behavior and improve the website</td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.subheading}>4. Your Consent</h2>
      <p className={styles.paragraph}>
        You can choose to accept or reject optional cookies when you first visit
        our site. Your preference is stored in a cookie for 6 months. You can
        change your choice at any time by clearing cookies in your browser.
      </p>

      <h2 className={styles.subheading}>5. Contact Us</h2>
      <p className={styles.paragraph}>
        For questions regarding this privacy policy, please email:
      </p>
      <p className={styles.email}>support@beingvin.com</p>
    </div>
  );
};

export default PrivacyPolicy;
