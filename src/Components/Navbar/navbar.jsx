import styles from "./navbar.module.css";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.innerNav}>
        <h1>Harshit Singh</h1>
        <div className={styles.socialList}>
          <div
            style={{
              display: "flex",
              gap: "16px",
              fontSize: "18px",
              color: "#1f2937",
            }}
          >
            <a
              href="https://www.linkedin.com/in/harshit-singh-585a9a320/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin color="#1f2937"/>
            </a>
            <a
              href="https://github.com/Harshit-625"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub color="#1f2937"/>
            </a>
            <a href="mailto:harshit62512@gmail.com">
              <FaEnvelope color="#1f2937"/>
            </a>
            <a href="tel:+918287273160">
              <FaPhone color="#1f2937"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
