import React, { useState } from "react";
import "./navigate.css";
import { AiOutlineHome } from "react-icons/ai";
import { ImUser } from "react-icons/im";
import { FaFileCode } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

function Navigate() {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <ImUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <FaFileCode />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <MdContactMail />
      </a>
    </nav>
  );
}

export default Navigate;
