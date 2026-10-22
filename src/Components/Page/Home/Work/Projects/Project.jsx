import React, { useEffect } from "react";
import Logo from "../../Logo/Logo";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons";
import style from "./style.module.css";
import { motion } from "framer-motion";

function Project() {
  const { id: projectId, projectName } = useParams();

  const projectData = data.find((project) => String(project.id) === String(projectId));

  useEffect(() => {
    const iframe = document.getElementById("iframe");
    if (iframe) {
      iframe.style.height = "100vh";
    }
  }, []);

  if (!projectData) {
    return (
      <div className={style.wrapper} style={{ textAlign: "center", padding: "10% 2%", color: "#fff" }}>
        <Link to="/">
          <Logo />
        </Link>
        <h1 style={{ marginTop: "2rem" }}>Project Not Found</h1>
        <p style={{ marginTop: "1.5rem" }}>
          <Link to="/" style={{ color: "var(--brand-color-dark-first)", fontSize: "1.1rem" }}>
            ← Back to Home
          </Link>
        </p>
      </div>
    );
  }

  const displayName = projectName ? projectName.replace(/-/gi, " ") : projectData.name;

  return (
    <motion.div className={style.wrapper}>
      <Link to="/">
        <Logo />
      </Link>
      <div className={style.projectTitle}>
        <h1>{displayName}</h1>{" "}
        <a href={projectData.link} target="_blank" rel="noreferrer noopener">
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
        title={projectData.name}
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

export default Project;
