import { React, useRef } from "react";
import "./index.scss";
import HelloMessage from "../HelloMessage";
import About from "../About";
import Projects from "../Projects";

const Home = () => {

  return (
    <>
      <HelloMessage/>
      <About/>
      <Projects/>
    </>
  );
};
export default Home;
