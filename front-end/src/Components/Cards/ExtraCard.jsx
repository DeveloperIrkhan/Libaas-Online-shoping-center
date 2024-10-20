import React from 'react'
import CustomBtn from '../CustomBtn'

const ExtraCard = ({ img, callFun, textOnImage, }) => {
    return (
        <div className="h-[60vmin] w-[70vmin] relative">
            <img className='h-[60vmin] w-[70vmin] bg-contain overflow-hidden' src={img} alt="" />
            <p className='text-2xl md:text-2xl absolute  z-10 mb-4 text-white capitalize font-bold bottom-10 left-1/2 transform 
            -translate-x-1/2 flex flex-col'>{textOnImage}</p>
            <div className="button absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex flex-col">
                <CustomBtn className={"btn-light"} onClickFun={callFun} text={"Shop Now"} />
            </div>
        </div>
    )
}

export default ExtraCard