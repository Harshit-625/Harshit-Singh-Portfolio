import React from "react";
import styles from "./content.module.css";
import ContactCard from "./contactCard";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdPhone, MdEmail } from 'react-icons/md';



const Contacts = [
  {
    type : "Email",
    icon: <MdEmail size={24} color="#e08181ff" />,
    back :"radial-gradient(circle,rgba(224, 233, 254, 1) 0%, rgba(232, 233, 255, 1) 50%, rgba(239, 233, 255, 1) 100%)",
    info:"harshit62512@gmail.com" ,
    link: "mailto:harshit62512@gmail.com" 
  },  
  {
    type : "Phone",
    icon: <MdPhone size={24} color="#16A34A" />,
    back :"#DBF5EF",
    info:"+91 8287273160" ,
    link: "tel:+918287273160" 
  },  
  {
    type : "LinkedIn",
    icon: <FaLinkedin size={24} color="#2563EB" />,
    back :"radial-gradient(circle,rgba(224, 233, 254, 1) 0%, rgba(232, 233, 255, 1) 50%, rgba(239, 233, 255, 1) 100%)",
    info:"Connect with me" ,
    link: "https://www.linkedin.com/in/harshit-singh-585a9a320/" 
  },  
  {
    type : "GitHub",
    icon: <FaGithub size={24} color="#15191F" />,
    back :"radial-gradient(circle,rgba(224, 233, 254, 1) 0%, rgba(232, 233, 255, 1) 50%, rgba(239, 233, 255, 1) 100%)",
    info:"View my Projects" ,
    link: "https://github.com/Harshit-625" 
  },
]
function Section7() {
  return (
  <div className={styles.section7}>
    <div className={styles.innerSection7}>
      <h1>Get in Touch</h1>
      <div className={styles.contactGrid}>
      {
  Contacts.map((data, index) => (
    <ContactCard 
      key={index}
      info={data.info}
      type={data.type}
      icon={data.icon}
      link={data.link}
      back={data.back}
    />
  ))
}

      </div>
    </div>
  </div>)
}

export default Section7