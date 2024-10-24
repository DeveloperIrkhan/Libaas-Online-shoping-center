import React from 'react'
import { useShopContext } from '../Context/Context';

const Footwear = () => {
  const { IsModelOpen, setIsModelOpen } = useShopContext();
  return (

    <>
      {
        IsModelOpen &&
        <div
          className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50 bg-darkColor/70 backdrop-blur-sm"
          onClick={() => setIsModelOpen(false)} // Close modal on background click
        >
          <div
            className="relative bg-white w-4/5 md:w-1/2 h-auto p-5 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <button
              onClick={() => setIsModelOpen(false)}
              className="absolute top-2 right-4 text-xl text-black"
            >
              &times;
            </button>
            <p className="text-center text-lg text-black my-4">Measurement Guide</p>
            <div className="w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('../src/assets/Measurement.png')" }}>
              {/* Add any content here */}
            </div>
          </div>
        </div>
      }</>
  )
}

export default Footwear