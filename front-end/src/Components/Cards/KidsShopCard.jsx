import React from 'react';

const KidsShopCard = ({ image, title, classes, price, onmouseEnter, onmouseOut }) => {
    return (
        <div className={`${classes} group w-72`} onMouseEnter={onmouseEnter} onMouseLeave={onmouseOut}>
            <div className="w-full h-full">
                <img src={image} alt={title} className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            </div>
            <p className="text-center mt-4 text-black card-sm-title">{title}</p>
            <p className="text-center mt-4 text-blackColor card-sm-title"><span className='text-secondColor'>Rs/- {price}</span> <span className='line-through'>{price + 250}</span></p>
        </div>
    );
};

export default KidsShopCard;