import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./header.css";

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/kennyrosa/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/KennyRosa" target="_blank">
        <FaGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
