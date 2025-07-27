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
    icon: <FaReact size={25} color="#DB2777"/>,
    title: "Web Development",
    skills: ["HTML", "CSS", "JS", "MERN Stack", "SQL"],
  },
  {
    icon: <MdAnalytics color="#2A5241" size={25}/>,
    title: "Data Analysis And Visualization",
    skills: ["Python" , "SQL" , "Excel" , "Tableau"],
  },
  {
    icon: <GoGitBranch color="#F97316" size={30}/>,
    title: "Version Control",
    skills: ["Git", "GitHub"],
  },
  {
    icon: <GiBrain size={30} color="#A7A546"/>,
    title: "Languages",
    skills: ["Python(Matplotlib ,Pandas,Seaborn)", "C++", "Javascript"],
  },
  {
    icon: <AiFillHeart size ={25} color="#9f2626ff"/>,
    title: "Soft Skills",
    skills: ['Adaptability', 'Problem Solving', 'Team Collaboration'],
  },
  {
    icon: <FiTool color="#F97316" size={30}/>,
    title: "Tools ",
    skills: ['VS Code',  'Git',  'GitHub',  'Postman','ERPNext']}
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
