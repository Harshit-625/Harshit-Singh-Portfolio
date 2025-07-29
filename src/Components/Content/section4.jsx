import React from "react";
import styles from "./content.module.css";
import ProjectCard from "./projectCard";
import study from "../../assets/education.png"
import dinge from "../../assets/Dinge.png"
import sync from "../../assets/sync.jpg"
import sales from "../../assets/Sales.png"


const projects = [
  {
    image: study,
    title: "Higher Education Trends Dashboard",
    link: "https://github.com/Harshit-625/Higer-Education-Analysis-using-Python",
    description:
      "Analyzed trends in enrollment, dropout, and graduation rates using Python. Built data visualizations with Seaborn and Matplotlib to extract insights and support decision-making.",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
  },
  {
    image: sales,
    title: "Sales Analysis",
    link: "https://github.com/Harshit-625/Higer-Education-Analysis-using-Python",
    description:
      "Performed retail sales analysis using Excel. Leveraged pivot tables, VLOOKUP, and custom charts to identify top-selling products, seasonal trends, and sales performance gaps.",
    tech: ["Excel", "Pivot Tables", "VLOOKUP", "Charts"],
  },
  {
    image: dinge,
    title: "Dinge – Dog Dating App (Frontend)",
    link: "https://dinge-the-dog-dating-experience.vercel.app/",
    description:
      "Built a responsive React frontend for a dog dating app with Tinder-style profile cards, smooth UI animations, and reusable components for dynamic user interaction.",
    tech: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    image: sync,
    title: "SyncPolymer Business Portfolio",
    link: "https://syncpolymersolutions.vercel.app/",
    description:
      "Developed a clean and responsive company portfolio using HTML, CSS, and EJS. Designed structured sections for services, products, and contact to reflect a professional B2B brand image.",
    tech: ["HTML", "CSS", "JavaScript", "EJS"],
  }
];



function Section4() {
  return (
  <div className={styles.section4} id="projects">
    <div className={styles.innerSection4}>
      <h1>Featured Projects </h1>
      <div className={styles.cardBox}>
        {projects.map((data, index) => (
        <ProjectCard
          key={index}
          link = {data.link}
          image={data.image}
          description = {data.description}
          title={data.title}
          techs={data.tech}
        />
      ))} 
      </div>
    </div>
  </div> 
)}

export default Section4