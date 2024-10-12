import React from 'react'
const NewArrivalsCard = ({ image, title, classes }) => {
    return (
        <div className={`${classes}`}>
            <img src={image} alt={title} className="w-full object-cover" />
            <div className="">
                <p className="text-center mt-4 card-title-fonts text-black">{title}</p>
            </div>

        </div>
    )
}

export default NewArrivalsCard