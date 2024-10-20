import logo from "../assets/projects/logo.webp";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
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
          href="https://www.instagram.com/nova_raj_15/profilecard/?igsh=bWRkamg2a2lzOGE0" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/RajShuk37533138" // Replace with your Twitter URL
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaSquareXTwitter />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
