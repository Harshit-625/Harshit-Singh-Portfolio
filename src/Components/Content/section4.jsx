import React from "react";
import styles from "./content.module.css";
import ProjectCard from "./projectCard";
import study from "../../assets/study.jpg"
import dinge from "../../assets/Dinge.png"
import sync from "../../assets/sync.jpg"


const projects = [
  {
    image: study,
    title: "Higher Education Analysis",
    link: "https://github.com/Harshit-625/Higer-Education-Analysis-using-Python",
    description:
      "Analyzed higher education enrollment and graduation trends using Python, focusing on gender distribution, regional variations, and course popularity over time. Applied data cleaning techniques, exploratory data analysis (EDA), and created insightful visualizations using Matplotlib and Seaborn to uncover patterns and support data-driven policy insights.",
    tech: ["Python", "Matplotlib", "Seaborn" , "Exploratory Data Analysis"],
  },
  {
    image: dinge,
    title: "Dinge : Dog Dating App (Ongoing)",
    link: "https://github.com/harshit/retail-analysis",
    description:
      "Developed a full-stack MERN application for dog lovers to connect, share posts, and discover nearby playdates. Implemented user authentication, post creation, and a dynamic feed using React, Express, and MongoDB. Focused on responsive design, smooth user experience, and efficient API integration to enable real-time social interaction.",
    tech: ["React", "MongoDB", "NodeJS" , "ExpressJS"],
  },
  {
    image: sync,
    title: "SyncPolymer Solutions : Business Portfolio",
    link: "https://syncpolymersolutions.vercel.app/",
    description:
      "Developed a clean and responsive portfolio website for SyncPolymer Solutions to showcase company details, product offerings, and contact information. Utilized HTML, CSS, and EJS to structure content effectively, ensuring mobile responsiveness and improved business visibility online.",
    tech: ["HTML", "CSS","JavaScript","EJS"],
  }
];


function Section4() {
  return (
  <div className={styles.section4}>
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