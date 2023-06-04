import React, { useState } from "react";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faClose } from "@fortawesome/free-solid-svg-icons";
import ChoosePlan from "./Steps/ChoosePlan";
import ChooseType from "./Steps/ChooseType";
import ProjectDetails from "./Steps/ProjectDetails";
import ChooseBudget from "./Steps/ChooseBudget";
import ChooseTimeframe from "./Steps/ChooseTimeframe";
import ClientDetails from "./Steps/ClientDetails";
// import { Email } from "./SMTP/smtp";

function GetStarted({ setGetStarted }) {
  const [page, setPage] = useState(1);
  const title = [
    "Lets start building ? select your website type...",
    "Choose a plan you wanna go with",
    "Great! give a few details about what you need?",
    "What type of budget are you looking to invest in this project?",
    "And what's your timeframe?",
    "Lastly, could you please share a few more details?",
  ];
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

  const sendMail = (e) => {
    e.preventDefault();
    console.log("Sending...");
    window.Email.send({
      SecureToken: "81e3a2bc-8503-4a05-994e-75f5c6bfa553",
      To: "pythont2021@gmail.com",
      From: "notification@beingvin.com",
      Subject: "Recived New Project | Beingvin.com",
      Body: `Name : ${formData.clientDetails.name} <br/> 
      Email Id : ${formData.clientDetails.email}  <br/> 
      Mobile No : ${formData.clientDetails.mobile}  <br/>  
      Additional details : ${formData.clientDetails.adDetails} <br>  
      Project Type : ${formData.type} <br/> 
      Project Plan : ${formData.plan}  <br/>  
      Project Details : ${formData.proDetails}  <br/>  
      Budget : ${formData.budget}  <br/>  
      Timeframe : ${formData.timeframe}  <br/>`,
   
    }).then((message) =>
      alert(
        `Thank You ${formData.clientDetails.name} ! \n I'll contact you soon.`
      )
    );

    e.target.reset();
  };

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

      default:
        return <ChooseType setPage={setPage} />;
    }
  };

  return (
    <div className={style.backGroundDiv}>
      <div className={style.formContainer}>
        <div className={style.header}>
          <div className={style.navBtns}>
            <div className={style.backBtn}>
              {page !== 1 ? (
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  onClick={() => setPage((currentPage) => currentPage - 1)}
                />
              ) : (
                ""
              )}
            </div>

            <div className={style.closeBtn}>
              {" "}
              <FontAwesomeIcon
                icon={faClose}
                onClick={() => setGetStarted(false)}
              />{" "}
            </div>
          </div>
          <div className={style.pageNumbers}>
            <p>
              {" "}
              <span>0{page}</span>/06
            </p>
          </div>
          <div>
            <h1 className={style.title}>{title[page - 1]}</h1>
          </div>
        </div>
        <div className={style.body}>
          <form className={style.form} onSubmit={sendMail}>
            {displayBody(page, setPage)}
          </form>
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
