import React from 'react'
import { useShopContext } from '../../Context/Context'
const MeasurementGuide = () => {
    const { IsModelOpen, setIsModelOpen } = useShopContext();
    return (

        <>
            {
                IsModelOpen &&
                <div
                    className={`w-screen shadow-xl h-screen fixed top-0 left-0 flex justify-center items-center z-50 duration-500 transition-opacity ease-in-out bg-darkColor/70 backdrop-blur-sm ${IsModelOpen ? "opacity-100" : "opacity-0"}`}
                    onClick={() => setIsModelOpen(false)} >
                    <div
                        className="relative bg-white w-4/5 md:w-1/2 h-auto p-5 rounded-lg shadow-lg"
                        onClick={(e) => e.stopPropagation()} >
                        <button
                            onClick={() => setIsModelOpen(false)}
                            className="absolute top-2 right-4 text-xl text-black"
                        >
                            &times;
                        </button>
                        <p className="text-center text-lg text-black mt-4">Measurement Guide</p>
                        <div className="w-full h-96 bg-cover bg-center" style={{ backgroundImage: "url('../src/assets/Measurement.png')" }}>
                        </div>
                    </div>
                </div>
            }</>
    )
}

export default MeasurementGuide