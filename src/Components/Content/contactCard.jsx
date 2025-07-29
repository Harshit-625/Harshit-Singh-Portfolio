import React from "react";
import styles from "./card.module.css";
import { FiExternalLink } from "react-icons/fi";

function ContactCard(props) {
  return (
    <>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <div className={styles.contactCard}>
          <div
            className={styles.contactIcon}
            style={{ background: props.back}}
          >
          {props.icon}
          </div>

          <div className={styles.contactText}>
            <h2>{props.type}</h2>
            <h3>{props.info}</h3>
          </div>

          <div className={styles.extIcon}>
            <FiExternalLink />
          </div>
        </div>
      </a>
    </>
  );
}

export default ContactCard;
