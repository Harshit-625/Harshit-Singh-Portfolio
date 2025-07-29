import React from "react";
import styles from "./content.module.css";
import SkillCard from "./skillCard";
import { FaReact} from "react-icons/fa";
import { GoGitBranch } from "react-icons/go";   
import { MdAnalytics } from "react-icons/md";
import { GiBrain } from "react-icons/gi";      
import { FiTool } from "react-icons/fi"; 
import { AiFillHeart } from "react-icons/ai";  

const skillData = [
  {
    icon: <FaReact size={25} color="#DB2777" />,
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "SQL", "EJS"],
  },
  {
    icon: <MdAnalytics color="#2A5241" size={25} />,
    title: "Data Analysis & Visualization",
    skills: ["Python (Pandas, Matplotlib, Seaborn)", "SQL", "Excel", "Tableau", "ERPNext"],
  },
  {
    icon: <GoGitBranch color="#F97316" size={30} />,
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    icon: <GiBrain size={30} color="#A7A546" />,
    title: "Programming Languages",
    skills: ["JavaScript", "Python", "C++"],
  },
  {
    icon: <AiFillHeart size={25} color="#9f2626ff" />,
    title: "Soft Skills",
    skills: ["Adaptability", "Problem Solving", "Team Collaboration"],
  },
  {
    icon: <FiTool color="#F97316" size={30} />,
    title: "Tools & Environment",
    skills: ["VS Code", "Postman", "Git", "GitHub"],
  },
];


function Section3() {
  return (
    <div className={styles.section3}>
      <div className={styles.innerSection3}>
        <h1>Skills & Expertise</h1>
        <div className={styles.cardBox}>
        {skillData.map((data, index) => (
        <SkillCard
          key={index}
          icon={data.icon}
          title={data.title}
          skills={data.skills}
        />
      ))} 
        </div>
      </div>
    </div>
  );
}

export default Section3;
