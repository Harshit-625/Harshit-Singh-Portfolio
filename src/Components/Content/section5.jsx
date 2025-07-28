import React from "react";
import styles from "./content.module.css";
import ExpCard from "./experienceCard";


const experiences = [
  {
    designation: "Business Analyst Intern",
    company: "Nestorbird",
    work: [
      "Analyzed sales, marketing, and operations data using Excel and ERPNext.",
      "Created interactive Tableau dashboards to visualize key business metrics.",
      "Streamlined reporting workflows and improved data accuracy for teams.",
    ],
  },
  {
    designation: "Frontend Developer Intern",
    company: "Express Rupya Capital Advisors",
    work: [
      "Built responsive web interfaces using React and Axios for seamless API integration.",
      "Collaborated on UI/UX design improvements and component-based architecture.",
      "Connected frontend forms to backend endpoints and displayed dynamic data.",
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