import { React, useState, useEffect } from "react";
import "./index.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Resume from "../../Assets/kevin_calle_resume.pdf";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [openModal, setOpenModal] = useState(false);
  const [resize, setResize] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setResize(window.innerWidth < 900); // Update state based on window size
    };

    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up listener on unmount
    };
  }, []);

  const item = {
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        ease: "easeInOut",
        duration: 0.3,
        delay: 1.2,
      },
    },
  };

  return (
    <div>
      <header className="header">
        <Link to="/">
          <p className="logo">Meet Kevin</p>
        </Link>
        <div className="menu" onClick={toggleMenu}>
          &#9776;
        </div>
      </header>
      <AnimatePresence>
        {menuOpen && (
          // Menu container

          <motion.div
            variants={item}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            transition={{ delay: 0.5 }}
            exit="exit"
            className="menu-container"
          >
            <div className="btn-close" onClick={toggleMenu}>
              &times;
            </div>
            <div className="a-link" onClick={() => setMenuOpen(false)}>
              <div onClick={() => setOpenModal(true)}>
                <motion.p
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.8,
                    },
                  }}
                >
                  Resume
                </motion.p>
              </div>
            </div>
            <div className="a-link" onClick={() => setMenuOpen(false)}>
              <a href="/">
                <motion.p
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.6,
                    },
                  }}
                >
                  Home
                </motion.p>
              </a>
            </div>
            <div className="a-link" onClick={() => setMenuOpen(false)}>
              <a href="#about">
                <motion.p
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.4,
                    },
                  }}
                >
                  About
                </motion.p>
              </a>
            </div>
            <div className="a-link" onClick={() => setMenuOpen(false)}>
              <a href="#contact">
                <motion.p
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  exit={{
                    opacity: 0,
                    y: 90,
                    transition: {
                      ease: "easeInOut",
                      delay: 0.2,
                    },
                  }}
                >
                  Contact
                </motion.p>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <img
            src={Resume}
            alt="Resume for Kevin Calle"
            style={{
              maxWidth: resize ? "100vw" : "100%",
              maxHeight: "100%",
            }}
          />
        </Box>
      </Modal>
    </div>
  );
};

export default Header;
