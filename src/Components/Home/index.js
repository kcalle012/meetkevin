import { React, useRef } from 'react';
import './index.scss'
import HelloMessage from '../HelloMessage';
import About from '../About';
import { 
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion"

function useParallax (value, distance){
    return useTransform(value, [0,1], [-distance, distance]);
}

function renderHello (){
    return <div><HelloMessage /></div>
}
function renderAbout (){
    return <div><About /></div>
}

const sections = [renderHello, renderAbout];
const names = ["", "About Me"]

function Sect({content, index}){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);
    return (
        <section >
            <div ref={ref}>
                <motion.div >
                    {content()}
                </motion.div>
            </div>
        </section>
    )
}

const Home = () => {
    const sections = [renderHello, renderAbout];
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll(
        {container:containerRef}
    );
    const scaleX = useSpring(scrollYProgress, {
        stiffness:100,
        damping:30,
        restDelta:0.001
    });


    return (
        <div>
            {sections.map((renderSection,index) => (
                <motion.section key={index}>
                    <Sect content={renderSection} index={index}/>
                </motion.section>
            ))}
            <motion.div className='progress' style={{scaleX}}/>
        </div>
    )
}
export default Home;