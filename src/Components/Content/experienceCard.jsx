import React from "react";
import styles from "./card.module.css"

function ExpCard(props)
{
  return(
    <div className={styles.expCard}>
      <div className={styles.expHeading}>
        <h2>{props.designation}</h2>
        <h3>{props.company}</h3>
      </div>

      <ul className={styles.explist}>
      {props.works.map((work,index) => (
        <li key={index} className={styles.explistItem}>
          {work}
        </li>

      ))}
      </ul>
    </div>
  )
}

export default ExpCard