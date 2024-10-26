import React from 'react'

const NewsLetterBox = () => {
    return (
        <div className="p-20 w-full flex flex-col justify-between items-center text-center gap-4">
            <p className='font-extrabold  text-gray-700  text-xl'>Subscribe now & get 20% off</p>
            <p className='font-light text-gray-500 w-full md:w-2/4 text-sm'>Join our exclusive community and enjoy a 20% discount on your first purchase. Stay ahead with the latest trends, special offers, and much more—delivered straight to your inbox!.</p>
            <div className="w-full">
                <div className="flex items-center justify-center">
                    <input
                        className="bg-white appearance-none border 
                    border-gray-200 w-[60vmin]  p-2 md:p-4 rounded-l-lg 
                    text-gray-700 leading-tight tracking-tighter focus:outline-none
                    focus:bg-white focus:border-gray-300"
                        type="text"
                        required
                        placeholder='Last Name' />
                    <button className='text-white bg-blackColor rounded-r-lg w-[25vmin] p-2 md:p-4'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default NewsLetterBox