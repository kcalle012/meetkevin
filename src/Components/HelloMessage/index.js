import  React, {useState,useEffect } from 'react'
import './index.scss'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'





const HelloMessage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => { 
        const handleResize = () => { 
            console.log('Window resized: ', window.innerWidth);
            setIsMobile(window.innerWidth <= 768); 
        }; 
        handleResize();
        window.addEventListener('resize', handleResize); 
         // Check the initial width 
        return () => { 
            window.removeEventListener('resize', handleResize); 
        }; 
    },[]);
    // const textStyle = {
    //     fontSize: isMobile ? '1.5em': '3em',
    //     display:'flex',
    //     textAlign:'center',
    //     fontFamily:'Poppins',
    //     fontWeight:200
    // };

    return (
        <motion.div className='HelloMessageContainer'>
            <motion.div className = "home"></motion.div>
            <motion.div className= "bottom">
                <TypeAnimation
                    className='intro'
                    sequence={[
                    // Same substring at the start will only be typed out once, initially
                        'Kevin Calle: Software Engineer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Kevin Calle: CS Student',
                        1000,
                        'Kevin Calle: Tech Enthusiast',
                        1000,
                        'Kevin Calle: ',
                        1000
                    ]}
                    wrapper="span"
                    // style={textStyle}
                    style={{
                        fontSize: isMobile ? '1.5em': '3em',
                        display:'flex',
                        textAlign:'center',
                        fontFamily:'Poppins',
                        fontWeight:200
                    }}
                    speed={50}
                    repeat={Infinity}
                />
            </motion.div>
        </motion.div>
    );
}

export default HelloMessage;