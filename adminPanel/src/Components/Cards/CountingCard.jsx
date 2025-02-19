import React from 'react'
import CountUp from "react-countup";
const CountingCard = ({ title, count, className }) => {
    return (
        <div className={`cursor-pointer ${className}`}>
            <p className='text-[10px] md:text-[15px]'>{title}</p>
            <p className='font-bold text-[10px] md:text-[35px]'>
                <CountUp start={1} end={count} duration={5} />
                </p>
        </div>
    )
}

export default CountingCard