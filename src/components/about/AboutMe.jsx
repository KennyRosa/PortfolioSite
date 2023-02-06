import React from "react";
import "./about.css";
import nature from "../../assets/nature.jpeg";
import { FaAward } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { ImFolderOpen } from "react-icons/im";

function AboutMe() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={nature} alt="Nature" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Coding</small>
            </article>
            <article className="about__card">
              <SiJavascript className="about__icon" />
              <h5>Languages</h5>
              <small>HTML, CSS, JavaScript, React, Bootstrap</small>
            </article>
            <article className="about__card">
              <ImFolderOpen className="about__icon" />
              <h5>Hobbies</h5>
              <small>Video Games, Basketball, Cooking </small>
            </article>
          </div>
          <p>
            Welcome! My name is Kenny Rosa. In the past, I worked in a variety
            of different fields, mostly in customer service. However, I believe
            I am now where I should be, in the technology space. Since
            technology is changing as we speak, it creates an atmosphere where I
            can continue learning, which in turn can produce creative work. That
            is what I truly love about this field. In that sense, I continue to
            grow each and every day and I am always looking forward to my next
            learning experience or programming language.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
