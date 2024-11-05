import React from 'react'
import { NavLink } from 'react-router-dom'

const NavButton = ({ redirectTo, img, buttonText }) => {
    return (
        <NavLink to={redirectTo}>
            <div className=" bg-white  mx-3 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-100 transition-colors duration-200">
                <div className="flex justify-start items-center md:p-4">
                    <img src={img} alt="" className='w-[20px] mx-3' />
                    <p className="text-blackColor tracking-widest">{buttonText}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default NavButton