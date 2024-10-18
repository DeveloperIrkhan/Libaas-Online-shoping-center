import React, { useState } from 'react'
import { IoChevronDown } from "react-icons/io5";
const Accordion = ({ Icon, Name, className, content }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div onClick={toggleAccordion}
                className={`relative border-b-2 py-1 flex items-center cursor-pointer ${className}`}>
                {Icon && <Icon />}
                <p className='ml-3 text-sm font-semibold'>{Name}</p>

                <span className={`absolute right-0 transform duration-500 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <IoChevronDown />
                </span>
            </div>
            <div
                className={`text-sm text-blackColor ml-5 overflow-hidden transition-all duration-500  w-full ${isOpen ? "h-auto" : "max-h-0"}`}>
                {content}
            </div >
        </>
    );
};

export default Accordion