import React from "react";
import styles from './footer.module.css'

function Footer()
{

  return(
    <div className={styles.footer}>
      <p>© {new Date().getFullYear()} Harshit Singh. All rights reserved.</p>
    </div>
)}

export default Footer