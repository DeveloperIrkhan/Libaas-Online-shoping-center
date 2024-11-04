import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./../../Pages/AdminPanel/Navbar/Navbar"
import PageTitle from '../Heading/PageTitle'

const AdminLayout = () => {
    return (
        <div className='bg-gray-50 w-full h-screen'>
            {/* this is header section */}
            <div className="header">
                <Navbar />
            </div>
            {/* this content section */}
            <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] my-5">
                <div className="mt-10 font-Aclonica fa-1x md:text-xl my-4">
                    <PageTitle title1="admin" title2={"panel"} />
                </div>
                <Outlet />
            </div>
            {/* this is footer section */}
            <div className="footer"></div>
        </div>
    )
}

export default AdminLayout