import React from "react";
import "./index.scss";
import FunkoStore from "../../Assets/FunkoStore.png";
import HawkHack from "../../Assets/HawkHackSC.png";
import FindIt from "../../Assets/FindItSC.png"

const Projects = () => {
  const projectsDict = {
    findIt: {
      name: "Find It - Expo + Firebase Application",
      description: `This application was created to keep track of frequently used 
        household items, and can be shared between family in the same 
        household. I used Firebase to authenticate users and Firestore 
        as the NoSQL Database for fast search queries. I used React 
        Native through Expo to create the front-end because it was similar 
        to previous JavasScript apps that I have worked on. Projected to 
        launch by June of 2025`,
      alt: "Picture of the FindIt expo app",
      link: "",
      tech: "React Native, Expo, Metro Bundler, Firebase, Firestore, GitHub, Git, JavaScript, TypeScript",
      image: FindIt
    },
    funkoStore: {
      name: "Funko Pop E-Commerce Store",
      description: `This application was created for Montclair State University's 
        Database Systems class, with a focus on learning MySQL and database engineering.
        Me and my partner designed the ER Diagrams, Relational Tables, and implemented a 
        front-end hosted on the school's CPanel server. We used the LAMP stack to create a
        simple and fictional full-stack e-commerce store`,
      alt: "Picture of the GOAT Funko Store, a fictional e-commerce store.",
      link: "https://docs.google.com/document/d/10BHAw0cUqTravHD6x0mqFY1pKaPbFUrE9U8BG3ZJK0k/edit?usp=sharing",
      tech: "PHP, MySQL, HTML, CSS, PHPMyAdmin, CPanel",
      image: FunkoStore,
    },
    hawkhack: {
      name: "Hawk Hack 2025 Official Website",
      description: `This application was created to show to potential sponsors and attract 
        people to Montclair's Hackathon - Hawk Hack. This website was deployed on GitHub 
        pages and uses a subdomain for branding purposes.`,
      alt: "Picture of the Hawk Hack Website",
      link: "https://hawkhack.ccmsu.org",
      tech: "React, JavaScript, TypeScript, SCSS, GitHub, GitHub Pages",
      image: HawkHack,
    },
  };

  const renderProjects = ({ name, description, image, alt, link, tech }) => (
    <div className="projectContent">
      <div className="appImageContainer">
        <img src={image} alt={alt} />
      </div>
      <div className="description">
        <h1>{name}</h1>
        <p>{description}</p>
        <p>
          You can find the app{" "}
          <a href={link} target="_blank" rel="noreferrer">
            here
          </a>
        </p>
        <h6>Technologies used: {tech}</h6>
      </div>
    </div>
  );

  return (
    <>
      <section className="projects" id="#projects">
        <h1 className="sectionTitle">Projects</h1>
        <div className="projectsContainer">
          {Object.values(projectsDict).map((project) =>
            renderProjects(project)
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
