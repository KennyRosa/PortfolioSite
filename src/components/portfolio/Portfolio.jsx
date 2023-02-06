import React from "react";
import "./portfolio.css";
import landing from "../../assets/landing.png";
import table from "../../assets/table.png";
import netflix from "../../assets/netflix.png";

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={landing} alt="landing" height="175" />
          </div>
          <h3>Landing Page For Migrately</h3>
          <small className="description">
            Created and designed the landing page for Migrately, a site designed
            to ease the process for those seeking a Visa to travel to the United
            States. Sponsored by the White House.
          </small>
          <h5 className="warning">
            As this is a public route, it is easily accessible for anyone to
            view. Click the Live Demo Button &#128513;
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/KennyRosa/Migrately"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://migrately.azurewebsites.net/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={table} alt="table" />
          </div>
          <h3>A Forums Component For Migrately</h3>
          <small className="description">
            Designed a table with data retrieved from an API. Upon clicking on
            an immigration form name, an applicant will be directed to a
            comment's thread section where they can chat with other applicants.
          </small>
          <h5 className="warning">
            Admin Route. Can only be accessed with user/password credentials.
            Click GitHub button &#128526;
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/KennyRosa/Migrately"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://migrately.azurewebsites.net/forums/list"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={netflix} alt="landing" height="175" />
          </div>
          <h3>Imitating Netflix Landing Page</h3>
          <small className="description">
            I am currently working on imitating the Netflix landing page
            show-casing how a user can view movies/TV shows. Upon a user signing
            in, I will utilize an API to render movies by name and image.
          </small>
          <h5 className="warning">
            Repository for code can easily be reached by clicking on the GitHub
            button. See you there! &#127909;
          </h5>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/KennyRosa/Netflix"
              className="btn"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Portfolio;
