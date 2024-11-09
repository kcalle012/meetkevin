import { React } from 'react';
import './index.scss'
import { useState, useEffect } from 'react';
import HelloMessage from '../HelloMessage';
import { motion } from "framer-motion"

function renderHello (){
    return <div><HelloMessage /></div>
}

const Home = () => {
    const sections = [renderHello];


    return (
        <div>
            {sections.map((renderSection, index) => (
                <div key={index}>{renderSection()}</div>
            ))}
        </div>
    )
}
export default Home;