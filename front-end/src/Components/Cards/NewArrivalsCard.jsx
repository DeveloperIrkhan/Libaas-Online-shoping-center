import React from 'react'
const NewArrivalsCard = ({ image, title, classes }) => {
    return (
        <div className={`${classes} grounp w-50`}>
            <div className="overflow-hidden relative">
                <img src={image} alt={title} className="w-full object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-110" />
            </div>
            <div className="">
                <p className="text-center mt-4 text-black card-sm-title">{title}</p>
            </div>

        </div>
    )
}

export default NewArrivalsCard