import React from "react";
import resume from "../../assets/resume.pdf";
import "./header.css";

function CallToAction() {
  return (
    <div className="cta">
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
      <a href={resume} download className="btn">
        Resume
      </a>
    </div>
  );
}

export default CallToAction;
