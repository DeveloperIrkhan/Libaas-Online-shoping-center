import React from 'react'
import { NavLink } from 'react-router-dom'

const NavButton = ({ redirectTo, img, hoverImg, buttonText, isExpanded }) => {
    return (

        <NavLink to={redirectTo} className={({ isActive }) => isActive ? 'bg-gray-200' : '' + "hover:bg-gray-200 duration-300"}>
            {({ isActive }) => (
                <div className={`flex justify-center gap-3 items-center p-2 ${isExpanded && "p-4"} group`}>
                    <img
                        src={img}
                        alt=""
                        className="w-[30px] group-hover:hidden"
                    />
                    <img
                        src={hoverImg}
                        alt=""
                        className="w-[30px] hidden group-hover:block"
                    />
                    <p className={`tracking-widest group-hover:text-black ${isExpanded ? 'flex' : 'hidden'} ${isActive ? 'text-black' : 'text-white'}`}>
                        {buttonText}
                    </p>
                </div>
            )}
        </NavLink>

    )
}

export default NavButton