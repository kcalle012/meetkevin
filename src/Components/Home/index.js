import { React, useRef } from "react";
import "./index.scss";
import HelloMessage from "../HelloMessage";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";

const Home = () => {

  return (
    <>
      <HelloMessage/>
      <About/>
      <Projects/>
      <Contact />
    </>
  );
};
export default Home;
