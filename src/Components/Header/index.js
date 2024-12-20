    import { React, useEffect, useState } from 'react'
    import './index.scss'
    import {motion, AnimatePresence} from 'framer-motion'
    import { Link } from 'react-router-dom'

    const Header = () => {
        const [menuOpen,setMenuOpen] = useState(false);
        const toggleMenu = () => {
            setMenuOpen(!menuOpen);
        };  

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
                <header className="header">
                    <Link to="/"><p className='logo'>Meet Kevin</p></Link>
                    <div className="menu" onClick={toggleMenu}>
                        &#9776;
                    </div>
                </header>
                <AnimatePresence>
                {
                    menuOpen && (

                        // Menu container
                        
                        <motion.div 
                        variants={item}
                        initial={{height:0,opacity:0}}
                        animate={{height:"100vh",opacity:1}}
                        transition={{delay:.5}}
                        exit="exit"
                        className="menu-container">
                        <div className="btn-close" onClick={toggleMenu}>&times;</div>
                            <div className="a-link" onClick={()=>setMenuOpen(false)}>
                                <Link to="/">
                                    <motion.p
                                        initial={{y:80,opacity:0}}
                                        animate={{y:0,opacity:1}}
                                        transition={{delay:.6}}
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
                                        initial={{y:80,opacity:0}}
                                        animate={{y:0,opacity:1}}
                                        transition={{delay:.5}}
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
                                            initial={{y:80,opacity:0}}
                                            animate={{y:0,opacity:1}}
                                            transition={{delay:.4}}
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
        )
    }

    export default Header;