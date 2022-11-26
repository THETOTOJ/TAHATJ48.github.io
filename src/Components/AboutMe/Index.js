import React from "react";
import "./aboutme.css";
import About from "./about/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Work from "./work/index";
import School from "./school";
function AboutMe() {
  return (
  <div className="body">
    <section id="about">
      <About />
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="school">
      <School />
    </section>
    <section id="work">
      <Work />
    </section>
  </div>
  );
}

export default AboutMe;