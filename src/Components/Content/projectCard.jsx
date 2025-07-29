import React from "react";
import { FiExternalLink } from "react-icons/fi";
import styles from "./card.module.css";

function ProjectCard(props) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.imageContainer}>
        <img src={props.image} alt="college"  />
      </div>

      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.projectHeading}
      >
        <h3 className={styles.projectTitle}>{props.title}</h3>
        <a href={props.link} className={styles.projectLink} target="_blank"  rel="noreferrer" >
          <FiExternalLink />
        </a>
      </a>

      <p className={styles.description}>{props.description}</p>

      <ul className={styles.projectList}>
        {props.techs.map((tech, index) => (
          <li key={index} className={styles.projectItem}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectCard;
