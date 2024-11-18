import { React, useEffect, useState } from 'react'
import './index.scss'
import {motion, AnimatePresence} from 'framer-motion'
import { Link } from 'react-router-dom'

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const [scrollPosition, setScrollPosition] =useState(0);
    // prevents people from scrolling past menu without closing it
    useEffect(()=>{
        if(menuOpen){
            setScrollPosition(window.scrollY);
            document.body.style.position = 'fixed';
            document.body.style.overflow = 'hidden';
            document.body.style.top = `-${window.scrollY}px`;
        } else {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.overflow = ''
            window.scrollTo(0, scrollPosition);
        }
    },[menuOpen])

    const item = {
        exit:{
            opacity: 0,
            height: 0,
            transition:{
                ease:"easeInOut",
                duration:0.3,
                delay:1.2
            }
        }
    }

    return (
        <div>
            <header className={menuOpen? "hidden": "header"}>
                <Link to="/"><p>Meet Kevin</p></Link>
                <div className="menu" onClick={toggleMenu}>
                    &#9776;
                </div>
            </header>
            <AnimatePresence>
            {
                menuOpen && (
                    <motion.div 
                    variants={item}
                    initial={{height:0,opacity:0}}
                    animate={{height:"100vh",opacity:1}}
                    transition={{delay:.3}}
                    exit="exit"
                    className="menu-container">
                    <div className="btn-close" onClick={toggleMenu}>&times;</div>
                        <div className="a-link" onClick={()=>setMenuOpen(false)}>
                            <Link to="/">
                                <motion.p
                                    initial={{y:90,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{duration:.4}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.6}
                                    }}>
                                Home</motion.p>
                            </Link>
                            </div>
                            <div className="a-link" onClick={()=>setMenuOpen(false)}>
                                <Link to="/about">
                                    <motion.p
                                    initial={{y:90,opacity:0}}
                                    animate={{y:0,opacity:1}}
                                    transition={{delay:.4}}
                                    exit={{
                                        opacity:0,
                                        y:90,
                                        transition:{
                                        ease:"easeInOut",
                                        delay:.4
                                        }
                                    }}>
                                    About</motion.p>
                                </Link>
                            </div>
                            <div className="a-link" onClick={()=>setMenuOpen(false)}>
                                <Link to="/contact">
                                    <motion.p
                                        initial={{y:90,opacity:0}}
                                        animate={{y:0,opacity:1}}
                                        transition={{duration:.4}}
                                        exit={{
                                            opacity:0,
                                            y:90,
                                            transition:{
                                            ease:"easeInOut",
                                            delay:.2}
                                        }}>
                                        Contact</motion.p>
                                </Link>
                            </div>
                    </motion.div>
                )
            }
            </AnimatePresence>
        </div>


        // <header className="header">
        //     {/* <a href="/" className="logo">Meet Kevin</a>
        //     <div className={`hamburger ${menuOpen ? 'open': ''}`} onClick={toggleMenu}>
        //         &#9776;
        //     </div>
        //     <nav className={`nav-bar ${menuOpen ? 'open': ''}`}>
        //         <div className="close-button" onClick={toggleMenu}>
        //             &times;
        //         </div>
        //         <a href="/">Home</a>
        //         <a href="/about">About</a>
        //         <a href="/contact">Contact</a>
        //     </nav> */}
        // </header>
    )
}

export default Header;