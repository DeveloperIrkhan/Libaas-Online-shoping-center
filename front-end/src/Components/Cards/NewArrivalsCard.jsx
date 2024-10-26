import React from 'react'
import { NavLink } from 'react-router-dom'
const NewArrivalsCard = ({ image, title, classes, description, to }) => {
    return (
        <div className={`${classes} grounp w-50 relative`}>
            <NavLink to={to}>
                <div className="overflow-hidden relative">
                    <img src={image} alt={title} className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
                </div>
                <div className="">
                    <p className="text-center mt-4 text-black card-sm-title">{title}</p>
                </div>
                <div className="absolute opacity-0 bottom-24 left-0 right-0 text-center text-darkColor group-hover:opacity-100 duration-500 transition-opacity">
                    {description}
                </div>
            </NavLink>
        </div>
    )
}

export default NewArrivalsCard