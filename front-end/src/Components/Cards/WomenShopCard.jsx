import React, { useState } from 'react';
import { useShopContext } from '../../Context/Context';
import { NavLink } from 'react-router-dom';

const WomenShopCard = ({ image, title, classes, discountPrice, onmouseEnter, onmouseOut, to, originalPrice, saleOnProduct }) => {
    const percentageSaved = Math.round(((originalPrice - discountPrice) / originalPrice) * 100);
    const { currency } = useShopContext()

    const [currentImage, setCurrentImage] = useState(image);
    return (
        <NavLink to={to}>
            <div className={`${classes} rounded-md shadow-md p-2 group w-100 relative`}
                onMouseEnter={() => setCurrentImage(onmouseEnter || onmouseOut)}
                onMouseLeave={() => setCurrentImage(onmouseOut)}>
                {saleOnProduct ? (<div className="bg-[#fddd4c] text-white px-2 py-1 rounded-md uppercase text-small  font-semibold 
            absolute z-10 top-2 left-3">save {percentageSaved} %</div>) : (<></>)}

                <div className="overflow-hidden">
                    <img
                        className="w-full h-[420px] transition-transform duration-500 ease-in-out transform group-hover:rotate-3 group-hover:scale-105"
                        src={currentImage}
                        alt={title}
                    />
                </div>

                <p className="text-center mt-4 font-poppins text-black text-base leading-[20.4px] align-baseline tracking-[2.16px] space-x-0">
                    {title}
                </p>
                <p className="text-center mt-4 card-title-fonts text-gray-800 text-sm">
                    <span className='text-gray-600 font-extrabold mx-2'>{currency} {discountPrice}</span>
                    <span className='line-through text-secondColor'>{originalPrice}</span></p>
            </div>
        </NavLink>
    );
};

export default WomenShopCard;