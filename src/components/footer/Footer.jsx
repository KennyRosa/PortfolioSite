import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Kenny Rosa
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/KennyRosa" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kennyrosa/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Kenny Rosa. All Rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
