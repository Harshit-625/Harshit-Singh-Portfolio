import React from "react";
import styles from "./content.module.css";
import pp from "../../assets/pp.jpg";

function Section1() {
  return (
    <div className={styles.section1}>
      <div className={styles.innerSection1}>
        <div className={styles.deepSection1}>
          <div className={styles.image}>
            <img src={pp} alt='me' />
          </div>
          <div className={styles.content}>
            <h1>
              Hi, I'm <span className={styles.blueGrad}>Harshit &nbsp;
              <br className={styles.mobileHideBr}/>
              Singh</span>
            </h1>
            <p>Data Analyst & Web Developer, Turning 
            <span className={styles.blueGrad}> data into insights </span> 
            and ideas into 
            <span className={styles.blueGrad}> impactful web experiences.</span></p>
            <div className={styles.buttonDiv}>
              <button className={styles.section1Buttons}>Get in Touch</button>
              <button className={styles.section1Buttons}>View Projects</button>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
