import React from 'react'
import { NavLink } from 'react-router-dom'

const NavButton = ({ redirectTo, img, buttonText }) => {
    return (
        <NavLink to={redirectTo}>
            <div className="bg-white mx-3 rounded-lg shadow-md hover:shadow-xl
                             hover:bg-gray-100 transition-colors duration-200">
                <div className="flex justify-center gap-3 items-center p-2 md:p-4">
                    <img src={img} alt="" className='w-[30px]' />
                    <p className="text-blackColor tracking-widest hidden md:block">{buttonText}</p>
                </div>
            </div>
        </NavLink>
    )
}

export default NavButton