import React from "react";
import "./header.css";
import CallToAction from "./CallToAction";
import monkey from "../../assets/monkey.jpeg";
import HeaderSocials from "./HeaderSocials";

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello! My name is</h5>
        <h1 className="name-header">Kenny Rosa</h1>
        <h5 className="text-light">Frontend Engineer/Web Developer</h5>
        <CallToAction />
        <HeaderSocials />

        <div className="me">
          <img src={monkey} alt="me" height="490px" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}

export default Header;
