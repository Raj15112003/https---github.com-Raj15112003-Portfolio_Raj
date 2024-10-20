import { CONTACT } from "../constants";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa"; // Changed from FaSquareXTwitter to FaTwitter
import { FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in touch
      </motion.h1>

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className="text-center tracking-tighter"
      >
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
      </motion.div>

      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 1 }}
      className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/raj-shukla-0509b0254/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Raj15112003" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/nova_raj_15/" // Corrected Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com/RajShuk37533138" // Corrected Twitter URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter />
        </a>
      </motion.div>
    </div>
  );
}

export default Contacts;
