import React from "react";
import styles from "./card.module.css"; 

function SkillCard({ icon, title, skills }){
  return (
    <div className={styles.skillCard}>
      <div className={styles.cardHeading}>
        <div className={styles.icon}>{icon}</div>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <ul className={styles.list}>
        {skills.map((skill, index) => (
          <li key={index} className={styles.listItem}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
