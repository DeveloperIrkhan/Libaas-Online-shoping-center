import React from 'react'

const PageTitle = ({ title1, title2 }) => {
    return (
        <div className='flex flex-column items-center capitalize text-sm md:text-xl'>
            <p className="text-gray-500 relative inline-block font-semibold 
             tracking-wider 
            after:content-['']">
                {title1}
            </p>
            <p className="ml-2 relative inline-block font-semibold  tracking-wider
             text-gray-700
            after:content-[''] after:absolute after:-right-5 md:after:-right-8 after:w-[3vmin] after:h-[2px] after:bg-black 
            after:top-1/2 after:translate-y-[-50%]">
                {title2}
            </p>
        </div>
    )
}

export default PageTitle