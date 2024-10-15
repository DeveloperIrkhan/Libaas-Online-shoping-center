import React from 'react'

const SmallCard = ({ image, text, className, description}) => {
    return (
        <div className={`small-card ${className}`}>
            <img src={image} alt={text} className="small-card-img" />
            <div className="">
                <p className='text-darkColor text-center card-sm-title'>{text}</p>
                <p className='text-darkColor text-center card-sm-title'>{description}</p>
            </div>
        </div>
    );
}

export default SmallCard