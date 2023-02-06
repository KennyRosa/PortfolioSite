import React from "react";
import resume from "../../assets/resume.pdf";
import "./header.css";

function CallToAction() {
  return (
    <div className="cta">
      <a href={resume} download className="btn header-button">
        Resume
      </a>
      <a href="#contact" className="header-button btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
}

export default CallToAction;
