import React from "react";
import resume from "../../assets/resume.pdf";
import "./header.css";

function CallToAction() {
  return (
    <div className="cta">
      <a href={resume} download className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact
      </a>
    </div>
  );
}

export default CallToAction;
