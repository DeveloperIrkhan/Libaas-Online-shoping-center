import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Nav/Navbar'
import Home from '../../Pages/Home'
import Footer from '../Footer/Footer'

const Layout = () => {
    return (
        <div>
            <Navbar />
           {/* px-4 sm:px-[5vw] md:px-[7cw] lg:px-[9vw] */}
            <div className="">
                <Outlet />
            </div>
            <Footer/>
        </div>
    )
}

export default Layout