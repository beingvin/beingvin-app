import React from "react";
import style from "./style.module.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

function LearnMore({ popUp, setPopUp }) {
  const displayBody = (text) => {
    switch (text) {
      case "landingPage":
        return (
          <div>
            <p>1. basic landing page of a website @ Rs8499</p>
            <br />
            <p>2. standard landing page of a website @ Rs12499</p>
            <br />
            <p>3. premium landing page of a website @ Rs18499</p> <br />
            <br />
            <p className={style.reachMe}>
              If you require any further information, please feel free to reach
              out to me.
            </p>
          </div>
        );
      case "design":
        return (
          <div>
            <p>1. basic redesign website of up to 4 sections/ pages @ Rs6499</p>
            <br />
            <p>
              2. standard redesign website of up to 8 sections/ pages @ Rs9499
            </p>
            <br />
            <p>
              3. premium redesign website of up to 15 sections/ pages @ Rs14499
            </p>{" "}
            <br />
            <br />
            <p className={style.reachMe}>
              If you require any further information, please feel free to reach
              out to me.
            </p>
          </div>
        );
      case "revamp":
        return (
          <div>
            <p>
              1. All bug fixing and basic redesign website and development of up
              to 4 sections/ pages @ Rs7999
            </p>
            <br />
            <p>
              2. All bug fixing and standard redesign website and development of
              up to 8 sections/ pages @ Rs12999
            </p>
            <br />
            <p>
              3. All bug fixing and premium redesign website and development of
              up to 15 sections/ pages @ Rs22999
            </p>{" "}
            <br />
            <br />
            <p className={style.reachMe}>
              If you require any further information, please feel free to reach
              out to me.
            </p>
          </div>
        );
      case "hosting":
        return (
          <div>
            <p>
              1. Single Website transfer to new host or domain + SSL setup @
              Rs999{" "}
            </p>
            <br />
            <p>
              2. Single Website transfer + SSL setup + Domain transfer to new
              registrar @ Rs1599{" "}
            </p>
            <br />
            <p>
              3. Single Website transfer + SSL Setup + Domain transfer + Email
              migration to new hosting/company @ Rs2599{" "}
            </p>{" "}
            <br />
            <br />
            <p className={style.reachMe}>
              If you require any further information, please feel free to reach
              out to me.
            </p>
          </div>
        );

      default:
        return "";
    }
  };

  return (
    <div className={style.hostingBoxOuter} onClick={() => setPopUp("")}>
      <motion.div
        initial={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(0.9)",
          opacity: 0,
        }}
        animate={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1)",
          opacity: 1,
        }}
        exit={{ opacity: 0, transform: "translate(-50%, -50%) scale(0.9)" }}
        transition={{
          duration: 0.3,
          ease: [0.6, 0.1, 0.05, 0.9],
        }}
        className={style.hostingBoxInner}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={style.closeBtn}
          onClick={() => setPopUp("")}
          role="button"
          tabIndex={0}
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faClose} />
        </div>
        <h1>Choose your plan</h1>
        <hr className={style.hrThin} />
        {displayBody(popUp)}
      </motion.div>
    </div>
  );
}

export default LearnMore;
