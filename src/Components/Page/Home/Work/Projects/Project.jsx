import React, { useEffect } from "react";
import Logo from "../../Logo/Logo";
import { useParams } from "react-router-dom";
import data from "../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Projects() {
  const projectName = useParams().projectName;
  const projectId = useParams().id;

  const projectData = data.filter((project) => project.id == projectId)[0];
  console.log(projectData);

  useEffect(() => {
    const iframe = document.getElementById("iframe");
    // Adjusting the iframe height onload event

    // iframe.style.height = iframe.contentWindow.document.body.scrollHeight + "px";
    // console.log(iframe.contentWindow.document.body.scrollHeight);
    iframe.style.height = "100vh";
  });

  return (
    <motion.div className={style.wrapper}>
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className={style.projectTitle}>
        <h1>{projectName.replace(/-/gi, " ")}</h1>{" "}
        <a href={projectData.link} target="_blank" rel="noreferrer">
          Open live website
          <FontAwesomeIcon
            icon={faExternalLinkSquare}
            className={style.externalLinkIcon}
          />
        </a>
      </div>
      <hr className={style.hrThin} />
      <iframe
        src={projectData.link}
        className={style.iframe}
        id="iframe"
        scrolling="no"
      >
        {" "}
      </iframe>{" "}
      <br />
    </motion.div>
  );
}

export default Projects;
