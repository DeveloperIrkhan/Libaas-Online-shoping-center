import React from 'react'
import { NavLink } from 'react-router-dom'
const HomeCard = ({ image, title, classes, description, to }) => {
    return (
        <NavLink to={to} className={`${classes} relative group`}>
            <img src={image} alt={title} className="w-full object-cover" />
            <div className="absolute z-10 bottom-5 left-0 right-0">
                <p className="text-center card-title-fonts text-white
                duration-500 ease-in-out transform group-hover:font-bold
                ">{title}</p>
            </div>
            <div className="opacity-0 w-full object-cover duration-500 ease-in-out transform 
            group-hover:opacity-100 absolute z-10 bottom-1/4 px-4 font-bold text-white text-center">
                {description}
            </div>
        </NavLink>
    )
}

export default HomeCard