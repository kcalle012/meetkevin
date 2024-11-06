import { React } from 'react'
import './index.scss'

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="logo">Meet Kevin</a>
            
            <nav className="nav-bar">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    )
}

export default Header;