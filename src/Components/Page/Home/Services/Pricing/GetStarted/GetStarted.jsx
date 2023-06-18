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
// import { Email } from "./SMTP/smtp";
import db from "./Firebase/FirebaseConfig";
import { collection, addDoc, serverTimestamp } from "@firebase/firestore";

function GetStarted({ setGetStarted }) {
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

  const collectionRef = collection(db, process.env.REACT_APP_COLLECTION_NAME);

  const sendMail = async (e) => {
    e.preventDefault();
    console.log("Sending... ");
    await window.Email.send({
      SecureToken: "81e3a2bc-8503-4a05-994e-75f5c6bfa553",
      To: "pythont2021@gmail.com",
      From: "notification@beingvin.com",
      Subject: "New Project Order Received | Beingvin.com",
      Body: `Name : ${formData.clientDetails.name} <br/> 
      Email Id : ${formData.clientDetails.email}  <br/> 
      Mobile No : ${formData.clientDetails.mobile}  <br/>
      Webiste : ${formData.clientDetails.website}  <br/>  
      Additional details : ${formData.clientDetails.adDetails} <br>  
      Project Type : ${formData.type} <br/> 
      Project Plan : ${formData.plan}  <br/>  
      Project Details : ${formData.proDetails}  <br/>  
      Budget : ${formData.budget}  <br/>  
      Timeframe : ${formData.timeframe}  <br/>`,
    })
      .then(() => {
        const addToFirabase = async () => {
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
        };
        addToFirabase();
        setPage((currentPage) => currentPage + 1);
      })
      .catch((err) => {
        console.error(err);
        alert("Sorry, Something went wrong !! \n Try again.. ");
      });
    e.target.reset();

    setTimeout(() => setPage(8), 5000);
  };

  const [page, setPage] = useState(1);

  const title = [
    "Lets start building ? Select your website type...",
    "Choose a plan you wanna go with",
    "Great! Give a few details about what you need?",
    "What type of budget are you looking to invest in this project?",
    "And what's your timeframe?",
    "Lastly, Could you please share a few more details?",
    " ",
    // `Awesome! Thank you ${formData.clientDetails.name} for sharing your detailed requirements.  `,
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
          />
        );
      case 7:
        return <h1>Placing your Order wait... </h1>;
      case 8:
        return <ThankYou />;

      default:
        return <ChooseType setPage={setPage} />;
    }
  };

  return (
    <div className={style.backGroundDiv}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        exit={{
          opacity: 0,
          y: -50,
          transition: { duration: 0.8, ease: [0.6, 0.1, 0.05, 0.9] },
        }}
        className={style.formContainer}
      >
        <div className={style.header}>
          <div className={style.navBtns}>
            <div className={style.backBtn}>
              {page !== 1 && page !== 7 && page !== 8 ? (
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1.5 }}
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
              initial={{ opacity: 0, x: 30 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className={style.closeBtn}
            >
              {" "}
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => setGetStarted(false)}
              />{" "}
            </motion.div>
          </div>
          <div className={style.pageNumbers}>
            {page !== 7 ? (
              <motion.p
                key={page}
                initial={{ opacity: 0, y: -10 }}
                animate={{ y: -0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                {" "}
                <span>0{page}</span> / 06{" "}
              </motion.p>
            ) : (
              ""
            )}
          </div>
          <div>
            <motion.h1
              key={page}
              initial={{ opacity: 0, y: -10 }}
              animate={{ y: -0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className={style.title}
            >
              {title[page - 1]}
            </motion.h1>
          </div>
        </div>
        <motion.div
          key={page}
          initial={{ opacity: 0, y: -10 }}
          animate={{ y: -0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className={style.body}
        >
          <form className={style.form} onSubmit={sendMail} autoComplete="off">
            {displayBody(page, setPage)}
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default GetStarted;
