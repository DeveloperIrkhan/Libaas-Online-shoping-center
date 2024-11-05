import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./../../Pages/AdminPanel/Navbar/Navbar"
import PageTitle from '../Heading/PageTitle'
import NavButton from '../admin-panel/NavButton'
import { images } from '../../assets/Images'

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
                <div className='flex flex-col md:flex-row gap-4'>
                    <div className="w-full md:w-[20%] flex flex-col gap-y-3">
                        <NavButton redirectTo={"add-item"} img={images.AddProduct} buttonText={"Add Item"} />
                        <NavButton redirectTo={"add-category"} img={images.caregory} buttonText={"Add Category"} />
                        <NavButton redirectTo={"add-sub-category"} img={images.subCategory} buttonText={"Add SubCategory"} />
                        <NavButton redirectTo={"list-products"} img={images.ListProduct} buttonText={"List Items"} />
                        <NavButton redirectTo={"list-orders"} img={images.ListOrder} buttonText={"List Orders"} />
                    </div>
                    <div className="w-full md:w-[80%] rounded-lg bg-white shadow-md px-2 md:p-4">
                        <Outlet />
                    </div>
                </div>
            </div>
            {/* this is footer section */}
            <div className="footer"></div>
        </div>
    )
}

export default AdminLayout