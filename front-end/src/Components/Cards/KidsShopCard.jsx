import React from 'react';
import { NavLink } from 'react-router-dom';

const KidsShopCard = ({ image, title, classes, originalPrice, discountPrice, onmouseEnter, onmouseOut, to }) => {
    return (
        <div className={`${classes} rounded-md shadow-md p-2 group w-72`} onMouseEnter={onmouseEnter} onMouseLeave={onmouseOut}>
            <NavLink to={to}>
                <div className="w-full h-full">
                    <img src={image} alt={title} className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
                </div>
                <p className="text-center mt-4 text-black ">{title}</p>
                <p className="text-center mt-4 text-blackColor card-sm-title">
                    {discountPrice > 0 && <span className='text-secondColor'>Rs/- {discountPrice}  </span>}
                    <span className={`${discountPrice > 0 ? "line-through" : ""}`}>
                        {discountPrice>0 ? "" : "Rs/- "}{originalPrice}
                        </span></p>
            </NavLink>
        </div>
    );
};

export default KidsShopCard;