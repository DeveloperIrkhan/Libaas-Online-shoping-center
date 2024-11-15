import React, { useEffect } from 'react';
import { useShopContext } from '../../Context/Context';
import { NavLink } from 'react-router-dom';

const Card = ({ image, title, classes, discountPrice, saleOnProduct, originalPrice, onmouseEnter, onmouseOut, to }) => {
    const percentageSaved = Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
    const { currency } = useShopContext()

    return (
        <NavLink className={"p-0 m-0"} to={to}>
            <div
                className={`${classes} relative min-w-[5vmin] group mt-0 h-full bg-white rounded-lg shadow-md hover:bg-slate-50 duration-300`}
                onMouseEnter={onmouseEnter}
                onMouseLeave={onmouseOut}
            >
                {saleOnProduct && discountPrice > 0 ? (
                    <div className="bg-[#fddd4c] text-white px-2 py-1 rounded-md uppercase text-small font-semibold absolute z-10 top-2 left-3">
                        save {percentageSaved} %
                    </div>
                ) : (
                    <></>
                )}
                <div className="w-full h-[60vmin] overflow-hidden">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-center transition-transform duration-500 ease-in-out transform group-hover:rotate-2 group-hover:scale-105"
                    />
                </div>
                <div className="py-3">
                    <p className="text-center text-black">{title}</p>
                    <p className="text-center card-title-fonts text-gray-800 text-sm">
                        <span className="text-gray-600 font-bold mx-2">
                            {currency} {discountPrice > 0 ? discountPrice : ""}
                        </span>
                        <span className={`${discountPrice ? "line-through text-yellow-400" : "text-gray-700 font-bold"}`}>{originalPrice}</span>
                    </p>
                </div>
            </div>
        </NavLink>

    );
};

export default Card;