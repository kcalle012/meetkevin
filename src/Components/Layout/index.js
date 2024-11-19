import { React } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/index';
// import { motion, useScroll, useSpring } from "framer-motion";
// import { Footer } from '../Footer/index'

const Layout = () => {


    return (
        <div>
            <Header />
            <Outlet />
            {/* <Footer /> */}
        </div>
    )
} 
export default Layout;