import { React, useState } from 'react'
import './index.scss'

const Header = () => {
    const [menuOpen,setMenuOpen] = useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <a href="/" className="logo">Meet Kevin</a>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
            <nav className={`nav-bar ${menuOpen ? 'open': ''}`}>
                <div className="close-button" onClick={toggleMenu}>
                    &times;
                </div>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;