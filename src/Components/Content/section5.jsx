import React from "react";
import styles from "./content.module.css";
import ExpCard from "./experienceCard";


const experiences = [
  {
    designation: "Business Analyst Intern",
    company: "Nestorbird",
    work: [
      "Analyzed sales, marketing, and operations data using Excel and ERPNext, identifying key trends.",
      "Built Tableau dashboards to monitor revenue, lead conversion, and inventory metrics.",
      "Streamlined weekly reports, reducing manual effort by 30% through automation and templates.",
    ],
  },
  {
    designation: "Frontend Developer Intern",
    company: "Express Rupya Capital Advisors",
    work: [
      "Developed responsive frontend interfaces in React; integrated APIs using Axios.",
      "Collaborated on UI/UX improvements and optimized reusable components.",
      "Connected forms to backend services, enabling dynamic data capture and validation.",
    ],
  },
];


function Section5()
{
  return(
    <div className={styles.section5}>
      <div className={styles.innerSection5}>
        <h1>Professional Experience</h1>
          <div className={styles.expBox}>
            {experiences.map((data) => 
              (
                <ExpCard
                  designation = {data.designation}
                  company = {data.company}
                  works = {data.work}
                />
              ))
            }    
          </div>  
      </div>
    </div>
  )
}

export default Section5