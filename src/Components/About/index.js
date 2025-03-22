import React from "react";
import "./index.scss";
import headshot from "../../Assets/headshot.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <h1 className="sectionTitle">About Me</h1>
      <div className="container">
        <div className="img-container">
          <img className="headshot" src={headshot} alt="Kevin Calle headshot" />
        </div>
        <div className="text-container">
          <h1>
            Hello! My name is <span>Kevin Calle</span>.<br /> I am an engineer
            interested in full-stack development. My strengths are React and
            React Native for front-end development, and Firebase or Flask +
            MySQL for backend development. I am also Montclair State University class of 
            2025 B.S in Computer Science.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default About;
