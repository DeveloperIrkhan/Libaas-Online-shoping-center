import React, { useState } from 'react'
import { IoChevronDown } from "react-icons/io5";
import { TbPoint } from "react-icons/tb";
const AccordionBullets = ({ Icon, Name, className, content }) => {
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

                <span className={`absolute right-0 transform duration-1000 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <IoChevronDown />
                </span>
            </div>
            <div
                className={`text-sm text-blackColor overflow-hidden transition-all duration-1000  w-full ${isOpen ? "max-h-[1200px]" : "max-h-0"}`}>
                <ul className=''>
                    {content.map((item, index) => (
                        <li key={index} className='flex items-start mb-2'>
                            <span className='ml-3'>
                                <strong>{item.boldText}</strong> {item.regularText}
                            </span>
                        </li>
                    ))}
                </ul>
            </div >
        </>
    );
};

export default AccordionBullets
