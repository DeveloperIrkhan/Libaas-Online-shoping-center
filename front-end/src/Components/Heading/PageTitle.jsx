import React from 'react'

const PageTitle = ({ title1, title2, fontSize }) => {
    return (
        <div className='flex flex-column justify-center items-center'>
            <p className="text-gray-500 relative inline-block font-semibold  tracking-wider 
            after:content-['']">
                {title1}
            </p>
            <p className="ml-2 relative inline-block font-semibold  tracking-wider text-gray-700
            after:content-[''] after:absolute after:-right-5 md:after:-right-10 after:w-[4vmin] after:h-[2px] after:bg-black 
            after:top-1/2 after:translate-y-[-50%]">
                {title2}
            </p>
        </div>
    )
}

export default PageTitle