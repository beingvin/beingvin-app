import React from "react";
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
  return (
    <motion.div className={style.wrapper}>
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className={style.projectTitle}>
        <h1>
          {projectName.replace(/-/gi, " ")} &nbsp; <span>|</span>
        </h1>{" "}
        <a href={projectData.link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faExternalLinkSquare}
            className={style.externalLinkIcon}
          />
        </a>
      </div>
      <br />
      <iframe src={projectData.link} className={style.iframe}>
        {" "}
      </iframe>{" "}
      <br />
    </motion.div>
  );
}

export default Projects;
