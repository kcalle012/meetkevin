import { React } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/index';
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