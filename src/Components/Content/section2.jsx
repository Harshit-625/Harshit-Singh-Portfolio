import React from "react";
import styles from "./content.module.css";

function Section2() {
  return (
    <div className={styles.section2}>
      <div className={styles.innerSection2}>
        <h1>About Me</h1>
        <p>
          I’m Harshit Singh — a Data Analyst and Full-Stack Web Developer with a
          strong foundation in CSE and hands-on experience in transforming both
          code and data into business-ready solutions.
          <br />
          <br />
          <br />
          Whether it's building dashboards with Python and Tableau, or deploying
          scalable web apps with the MERN stack, I focus on solving real-world
          problems through clean architecture, data-driven insights, and
          responsive design.
        </p>
      </div>
    </div>
  );
}

export default Section2;
