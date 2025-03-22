import React, { useState, useEffect } from "react";
import "./index.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HelloMessage = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      console.log("Window resized: ", window.innerWidth);
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    // Check the initial width
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("isMobile: ", isMobile);

  return (
    <motion.div className="HelloMessageContainer">
      <motion.div className="home"></motion.div>
      <motion.div className="bottom">
        {isMobile ? (
          <TypeAnimation
            key={isMobile ? "mobile" : "desktop"}
            sequence={[
              "Kevin Calle: Software Engineer",
              1000,
              "Kevin Calle: CS Student",
              1000,
              "Kevin Calle: Tech Enthusiast",
              1000,
              "Kevin Calle: ",
              1500,
            ]}
            wrapper="span"
            style={{
              fontSize: "1.5em",
              display: "flex",
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: 200,
              color: "#ffffff",
            }}
            speed={50}
            repeat={Infinity}
          />
        ) : (
          <TypeAnimation
            key={isMobile ? "mobile" : "desktop"}
            sequence={[
              "Kevin Calle: Software Engineer",
              1000, //
              "Kevin Calle: CS Student",
              1000,
              "Kevin Calle: Tech Enthusiast",
              1000,
              "Kevin Calle: ",
              1500,
            ]}
            wrapper="span"
            // style={textStyle}
            style={{
              fontSize: "3em",
              display: "flex",
              textAlign: "center",
              fontFamily: "Poppins",
              fontWeight: 200,
              color: "#ffffff",
            }}
            speed={50}
            repeat={Infinity}
          />
        )}
        <a href="#about">
          <FontAwesomeIcon icon={faChevronCircleDown} size="3x" />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default HelloMessage;
