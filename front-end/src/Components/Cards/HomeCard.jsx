import React from 'react'
const HomeCard = ({ image, title, classes }) => {
    return (
        <div className={classes}>
            <img src={image} alt={title} className="w-full object-cover" />
            <div className="absolute z-10 bottom-5 left-0 right-0">
                <p className="text-center card-title-fonts text-white">{title}</p>
            </div>
        </div>
    )
}

export default HomeCard