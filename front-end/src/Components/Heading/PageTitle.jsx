import React from 'react'

const PageTitle = ({ title }) => {
    return (
        <div className='flex flex-column justify-center items-center my-3'>
            <p className="page-header-title relative inline-block font-semibold text-[4vmin] uppercase tracking-wider after:content-[''] after:absolute after:-right-10 after:w-[4vmin] after:h-[2px] after:bg-black after:top-1/2 after:translate-y-[-50%]">
                {title}
            </p>
        </div>
    )
}

export default PageTitle