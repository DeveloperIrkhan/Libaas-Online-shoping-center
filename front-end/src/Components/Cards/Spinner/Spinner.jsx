import React from 'react'

const Spinner = () => {
    return (
        <div className='w-screen h-screen fixed top-0 left-0 flex justify-center 
        items-center z-50 bg-darkColor/70 backdrop-blur-sm'>
            <img src="src/assets/Spinner.svg" alt="Loading Spinner" className="w-36 h-3w-36" />
        </div>
    )
}

export default Spinner