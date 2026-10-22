import React, { useState } from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import ChoosePlan from "./Steps/ChoosePlan";
import ChooseType from "./Steps/ChooseType";
import ProjectDetails from "./Steps/ProjectDetails";
import ChooseBudget from "./Steps/ChooseBudget";
import ChooseTimeframe from "./Steps/ChooseTimeframe";
import ClientDetails from "./Steps/ClientDetails";
import ThankYou from "./Steps/ThankYou";
import db from "../../../../../config/Firebase/FirebaseConfig";
import Email from "../../../../../config/SMTP/smtp";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";

function GetStarted({ setGetStarted }) {
  const collectionRef = collection(db, process.env.REACT_APP_COLLECTION_NAME);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    type: "",
    plan: "",
    proDetails: "",
    budget: "",
    timeframe: "",
    clientDetails: {
      name: "",
      email: "",
      website: "",
      mobile: "",
      adDetails: "",
    },
  });
  const [page, setPage] = useState(1);
  const title = [
    "Lets start building ? Select your website type...",
    "Choose a plan you wanna go with",
    "Great! Give a few details about what you need?",
    "What type of budget are you looking to invest in this project?",
    "And what's your timeframe?",
    "Lastly, Could you please share a few more details?",
    `Awesome! Thank you ${formData.clientDetails.name} ,`,
  ];
  const displayBody = (page, setPage) => {
    switch (page) {
      case 1:
        return (
          <ChooseType
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
          />
        );
      case 2:
        return (
          <ChoosePlan
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
          />
        );
      case 3:
        return (
          <ProjectDetails
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
          />
        );
      case 4:
        return (
          <ChooseBudget
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
          />
        );
      case 5:
        return (
          <ChooseTimeframe
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
          />
        );
      case 6:
        return (
          <ClientDetails
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
            loading={loading}
            submitError={submitError}
          />
        );
      case 7:
        return <ThankYou />;

      default:
        return <ChooseType setPage={setPage} />;
    }
  };

  // Add order to database
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setSubmitError("");

    // 1. ALWAYS save order to Firestore first so leads are never lost
    try {
      await addDoc(collectionRef, {
        Name: formData.clientDetails.name,
        Email: formData.clientDetails.email,
        Website: formData.clientDetails.website,
        Phone: formData.clientDetails.mobile,
        ProjectType: formData.type,
        ProjectPlan: formData.plan,
        ProjectBudget: formData.budget,
        ProjectDetails: formData.proDetails,
        ProjectTimeframe: formData.timeframe,
        AdditionalDetails: formData.clientDetails.adDetails,
        Remark: "To be started",
        Time: serverTimestamp(),
      });
    } catch (err) {
      console.error("Error saving order to database:", err);
      setSubmitError(
        "We couldn't confirm your inquiry was submitted. Please try again, or contact us directly."
      );
      setLoading(false);
      return;
    }

    // 2. Safely attempt to send email alert
    try {
      const mailClient = (typeof window !== "undefined" && window.Email) || Email;
      if (mailClient && mailClient.send && process.env.REACT_APP_SMTP_SECURE_TOKEN) {
        mailClient
          .send({
            SecureToken: process.env.REACT_APP_SMTP_SECURE_TOKEN,
            To: process.env.REACT_APP_NOTIFICATION_TO_EMAIL || "pythont2021@gmail.com",
            From: process.env.REACT_APP_NOTIFICATION_FROM_EMAIL || "notification@beingvin.com",
            Subject: "New Project Order Received | Beingvin.com",
            Body: `Name : ${formData.clientDetails.name} <br/> 
            Email Id : ${formData.clientDetails.email}  <br/> 
            Mobile No : ${formData.clientDetails.mobile}  <br/>
            Website : ${formData.clientDetails.website}  <br/>  
            Additional details : ${formData.clientDetails.adDetails} <br>  
            Project Type : ${formData.type} <br/> 
            Project Plan : ${formData.plan}  <br/>  
            Project Details : ${formData.proDetails}  <br/>  
            Budget : ${formData.budget}  <br/>  
            Timeframe : ${formData.timeframe}  <br/>`,
          })
          .then((response) => {
            console.log("SMTP email response:", response);
          })
          .catch((mailErr) => {
            console.warn("SMTP email notification failed or blocked:", mailErr);
          });
      }
    } catch (mailEx) {
      console.warn("Email service unavailable:", mailEx);
    }

    setLoading(false);
    setPage((currentPage) => currentPage + 1);
    e.target.reset();
  };

  return (
    <div className={style.backGroundDiv}>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2, ease: [0.6, 0.1, 0.05, 0.9] }}
        exit={{
          opacity: 0,
          scale: 0.8,
          transition: { duration: 0.2, ease: [0.6, 0.1, 0.05, 0.9] },
        }}
        className={style.formContainer}
      >
        <div>
          <div className={style.navBtns}>
            <div className={style.backBtn}>
              {page !== 1 && page !== 7 && loading !== true ? (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 250,
                    ease: [0.6, 0.1, 0.05, 0.9],
                  }}
                >
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    onClick={() => setPage((currentPage) => currentPage - 1)}
                  />
                </motion.div>
              ) : (
                ""
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.2,
                duration: 0.5,
                type: "spring",
                stiffness: 100,
                ease: [0.6, 0.1, 0.05, 0.9],
              }}
              className={style.closeBtn}
            >
              {" "}
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => setGetStarted(false)}
              />{" "}
            </motion.div>
          </div>

          {loading ? (
            <>
              <br />
              <p>Please wait...</p> <br />
              <div className={style.loading}></div>
            </>
          ) : (
            <>
              <div className={style.header}>
                <div className={style.pageNumbers}>
                  {page !== 7 && page !== 8 ? (
                    <motion.p
                      key={page}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ y: -0, opacity: 1 }}
                      exit={{
                        opacity: 0,
                        y: 10,
                        transition: { duration: 0.5 },
                      }}
                      transition={{
                        delay: 0.2,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 250,
                        ease: [0.6, 0.1, 0.05, 0.9],
                      }}
                    >
                      {" "}
                      <span>0{page}</span> / 06{" "}
                    </motion.p>
                  ) : (
                    ""
                  )}
                </div>
                <div className={style.title}>
                  <motion.h1
                    key={page}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ y: -0, opacity: 1 }}
                    exit={{
                      opacity: 0,
                      y: 10,
                      transition: { duration: 0.5 },
                    }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 250,
                      ease: [0.6, 0.1, 0.05, 0.9],
                    }}
                    className={style.title}
                  >
                    {title[page - 1]}
                  </motion.h1>
                </div>
              </div>
              <motion.div
                key={page}
                initial={{ opacity: 0, y: -20 }}
                animate={{ y: -0, opacity: 1 }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: { duration: 0.5 },
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                  type: "spring",
                  stiffness: 250,
                  ease: [0.6, 0.1, 0.05, 0.9],
                }}
                className={style.body}
              >
                <form
                  className={style.form}
                  onSubmit={handleSubmit}
                  autoComplete="off"
                >
                  {displayBody(page, setPage)}
                </form>
              </motion.div>
            </>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default GetStarted;
