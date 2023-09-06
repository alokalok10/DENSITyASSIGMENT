import React from "react";
// import { motion } from "framer-motion";
// import Lottie from "lottie-react";
import SelfAwarenessTest from "./pages/SelfAwarenessTest";
import "./App.css";

import logo from "./assets/ahead9.png";

import Hero from "./pages/Hero";
import Carousel from "./pages/Carousel";
import MeetAhead from "./pages/MeetAhead";
import WorkWithUs from "./pages/WorkWithUs";
import Footer from "./pages/Footer";
import FifthSection from "./pages/FifthSection";
import FourthSection from "./pages/FourthSection";
import SixthSection from "./pages/SixthSection";

const App = () => {
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className="navbar-list">
          <li>
            <a href="#hero" onClick={(event) => scrollToSection("hero", event)}>
              Emotions
            </a>
          </li>
          <li>
            <a
              href="#manifesto"
              onClick={(event) => scrollToSection("manifesto", event)}
            >
              Manifesto
            </a>
          </li>
          <li>
            <a href="#test" onClick={(event) => scrollToSection("test", event)}>
              Self-awareness test
            </a>
          </li>
          <li>
            <a
              href="#workwithus"
              onClick={(event) => scrollToSection("workwithus", event)}
            >
              Work With Us
            </a>
          </li>
        </ul>
        <div className="navbar-right">
          <button className="download-button">
            <span className="button-text">Download app</span>
          </button>
        </div>
      </nav>

      <div className="sections-container">
        <section id="hero" className="section">
          <Hero />
        </section>
        <section id="carousel" className="section">
          <Carousel />
        </section>
        <section id="manifesto" className="section">
          <MeetAhead />
        </section>

        <section id="fourthsection" className="section">
          <FourthSection />
        </section>
        <section id="fifthsection" className="section">
          <FifthSection />
        </section>
        <section id="sixthsection" className="section">
          <SixthSection />
        </section>
        <section id="test" className="section">
          <SelfAwarenessTest />
        </section>
        <section id="workwithus" className="section">
          <WorkWithUs />
        </section>

        <section id="footer" className="section">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default App;
