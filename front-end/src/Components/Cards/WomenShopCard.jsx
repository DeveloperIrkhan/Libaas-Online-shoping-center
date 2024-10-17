import React from 'react';
import { useShopContext } from '../../Context/Context';

const WomenShopCard = ({ image, title, classes, price, onmouseEnter, onmouseOut, originalPrice, saleOnProduct }) => {
    const percentageSaved = Math.round(((originalPrice - price) / originalPrice) * 100);
    const { currency } = useShopContext()
    return (
        <div className={`${classes} group w-100 relative`} onMouseEnter={onmouseEnter} onMouseLeave={onmouseOut}>
            {saleOnProduct ? (<div className="bg-[#fddd4c] text-white px-2 py-1 rounded-md uppercase text-small  font-semibold 
            absolute z-10 top-2 left-3">save {percentageSaved} %</div>) : (<></>)}

            <div className="overflow-hidden">
                <img
                    className="w-full transition-transform duration-500 ease-in-out transform group-hover:rotate-3 group-hover:scale-105"
                    src={image}
                    alt={title}
                />
            </div>
            <p className="text-center mt-4 text-black card-sm-title">
                {title}
            </p>
            <p className="text-center mt-4 card-title-fonts text-gray-800 text-sm">
                <span className='text-gray-600 font-bold mx-2'>{currency} {price}</span>
                <span className='line-through'>{originalPrice}</span></p>
        </div>
    );
};

export default WomenShopCard;