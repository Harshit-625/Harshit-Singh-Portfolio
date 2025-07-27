import React from "react";
import styles from "./content.module.css"
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";

function Content()
{
  return(
    <div className={styles.main}>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  )
}

export default Content;