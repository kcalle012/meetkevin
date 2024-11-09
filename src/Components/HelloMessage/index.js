import { React, useState,useEffect } from 'react'
import './index.scss'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'




const HelloMessage = () => {

    return (
        <motion.div className='HelloMessageContainer'>
            <motion.div className = "home"></motion.div>
            <motion.div className= "bottom">
                <TypeAnimation
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                        'Kevin Calle: Software Engineer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Kevin Calle: Computer Science Student',
                        1000,
                        'Kevin Calle: Lifetime Learner',
                        1000,
                        'Kevin Calle: ',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                />
            </motion.div>
        </motion.div>
    );
}

export default HelloMessage;