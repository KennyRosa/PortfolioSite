import React from "react";
import Header from "./components/header/Header";
import AboutMe from "./components/about/AboutMe";
import Navigate from "./components/navigate/Navigate";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Navigate />
      <AboutMe />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
