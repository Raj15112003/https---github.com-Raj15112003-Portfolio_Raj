import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/siem.webp";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `I am a full-stack developer with expertise in crafting scalable web applications using the MERN stack. My project, Boosha, an e-commerce website, highlights my skills in front-end technologies like React and back-end technologies such as Node.js and MongoDB. I strive to create innovative solutions that enhance user experiences and drive business growth.`;

export const HERO_CONTENT_CS = 'As a cybersecurity analyst, I focus on Identity and Access Management (IAM) solutions to enhance user lifecycle management and access control. With experience in network security and ethical hacking, I utilize tools like Wireshark and Metasploit. I’ve also established a cybersecurity lab for SIEM tools to strengthen security measures and promote awareness.'

export const ABOUT_TEXT = `I am Raj, a fresher with a passion for both full-stack web development and cybersecurity. I recently graduated with a BCA degree, achieving a CGPA of 7.68. As a web developer, I enjoy creating efficient, user-friendly applications using technologies like React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. In cybersecurity, I specialize in Identity and Access Management (IAM) solutions, focusing on enhancing user lifecycle management and access control. I’ve also set up a cybersecurity lab for SIEM tools. Outside of coding, I love staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "Software Engineering",
    company: "Goldman Sachs",
    description: `Completed a job simulation as a Goldman Sachs governance analyst responsible for assessing IT security and suggesting improvements. Identified that the company was using an outdated password hashing algorithm by cracking passwords using Hashcat. Wrote a memo for my supervisor summarizing a range of proposed uplifts to increase the company’s level of password protection including extending minimum password length and using a dedicated hashing algorithm.`,
    skills: ["Cryptography", "Password Best-Practice", "Password Cracking", "Hashcat"],
  },
  {
    year: "2024",
    role: "Security Analyst",
    company: "EC-Council",
    description: `I have completed a SQL Injection certification from EC-Council, where I gained in-depth knowledge of SQL injection techniques, prevention methods, and best practices for securing databases. This certification has equipped me with the skills to identify vulnerabilities, conduct ethical hacking assessments, and implement robust security measures to protect applications against SQL injection attacks.`,
    skills: ["SQLmap", "jSQL", "Kali"],
  },
  {
    year: "2024",
    role: "Student",
    company: "IBM",
    description: `I have completed a certification in IBM Cybersecurity Foundation Course, where I acquired essential skills in identifying, assessing, and mitigating cybersecurity risks. This program covered various aspects of cybersecurity, including threat intelligence, security architecture, and incident response strategies. The certification has enhanced my ability to implement effective security measures and safeguard digital assets against evolving cyber threats.`,
    skills: ["Cybersecurity", "Malware", "Forensics","Cyber Attacks"],
  },
  {
    year: "2024",
    role: "Cybersecurity Analyst",
    company: "TCS",
    description: `Completed a job simulation involving identity and access management (IAM) for Tata Consultancy Services, collaborating with a Cybersecurity Consulting team. Acquired expertise in IAM principles, cybersecurity best practices, and strategic alignment with business objectives. Delivered comprehensive documentation and presentations, showcasing the ability to communicate complex technical concepts effectively.`,
    skills: ["IAM Designs", "IAM Evaluation", "IAM Fundamentals"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1, // Replace with the actual image import for Boosha
    description:
      "A fully functional e-commerce website built with the MERN stack (MongoDB, Express, React, Node.js), featuring product listings, a shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "SIEM Lab",
    image: project2, // Replace with the actual image import for your SIEM Lab
    description:
      "A cybersecurity lab designed for Security Information and Event Management (SIEM) tools, enabling the analysis and monitoring of security incidents.",
    technologies: ["Linux", "VirtualBox", "Metasploit", "Nmap"],
  },
  {
    title: "Portfolio Website",
    image: project3, // Replace with the actual image import for your portfolio
    description:
      "A personal portfolio website built with the MERN stack (MongoDB, Express, React, Node.js), showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
];


export const CONTACT = {
  email: "novaraj0102@gmail.com",
};
