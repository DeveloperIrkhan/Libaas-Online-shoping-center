import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Nav/Navbar'
import Home from '../../Pages/Home'

const Layout = () => {
    return (
        <div>
            <Navbar />
           {/* px-4 sm:px-[5vw] md:px-[7cw] gl:px=[9vw] */}
            <div className="">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout