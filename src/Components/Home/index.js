import { React } from 'react';
import './index.scss'
import { useState, useEffect } from 'react';
import HelloMessage from '../HelloMessage';
import About from '../About';
import { motion } from "framer-motion"

function renderHello (){
    return <div><HelloMessage /></div>
}
function renderAbout (){
    return <div><About /></div>
}

const Home = () => {
    const sections = [renderHello, renderAbout];


    return (
        <div>
            {sections.map((renderSection, index) => (
                <div key={index}>{renderSection()}</div>
            ))}
        </div>
    )
}
export default Home;