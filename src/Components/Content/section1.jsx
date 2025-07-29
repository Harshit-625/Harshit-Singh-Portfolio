import React from "react";
import styles from "./content.module.css";
import pp from "../../assets/pp.jpg";

function Section1() {
  return (
    <div className={styles.section1}>
      <div className={styles.innerSection1}>
        <div className={styles.deepSection1}>
          <div className={styles.image}>
            <img src={pp} alt="me" />
          </div>
          <div className={styles.content}>
            <h1>
              Hi, I'm{" "}
              <span className={styles.blueGrad}>
                Harshit &nbsp;
                <br className={styles.mobileHideBr} />
                Singh
              </span>
            </h1>
            <p>
              A <span className={styles.blueGrad}>Data Analyst</span> &{" "}
              <span className={styles.blueGrad}>Full-Stack Web Developer</span>{" "}
              <br />blending
              <span className={styles.blueGrad}>
                {" "}
                insights and interfaces.{" "}
              </span>
              <br/>From dashboards to dynamic web apps, I turn{" "}
              <span className={styles.blueGrad}>raw data</span> and{" "}
              <span className={styles.blueGrad}>real-world</span> needs into{" "}
              <span className={styles.blueGrad}>
                functional, scalable solutions.
              </span>
            </p>
            <div className={styles.buttonDiv}>
              <a href = "#contact"><button className={styles.section1Buttons}>Get in Touch</button></a>
              <a href = "#projects"><button className={styles.projectButton}>View Projects</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
