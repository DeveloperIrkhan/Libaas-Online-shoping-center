import React from 'react';
import { NavLink } from 'react-router-dom';

const HomeCard = ({ image, title, classes, description, to }) => {
    return (
        <NavLink
            to={to}
            className={`${classes} relative group  w-full flex flex-col justify-end overflow-hidden`}
        >
            {/* h-96 for same size of iamge cards */}
            <div className="h-full w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="absolute z-10 bottom-5 left-0 right-0">
                <p
                    className="opacity-0 text-center card-title-fonts text-white
                    duration-500 ease-in-out transform group-hover:font-bold group-hover:opacity-100"
                >
                    {title}
                </p>
            </div>

            {/* <div
                className=" w-full duration-500 ease-in-out transform 
                group-hover:opacity-100 absolute z-10 bottom-1/4 px-4 font-bold text-white text-center"
            >
                {description}
            </div> */}
        </NavLink>
    );
};

export default HomeCard;
