import React from 'react'
import CustomBtn from '../CustomBtn'
import { images } from '../../assets/Images'
import ExtraCard from '../Cards/ExtraCard'
const ExtraSection = () => {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-4'>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mx-auto">
                    <ExtraCard img={images.SunGlassess} textOnImage={"sun glasses"} onclick={() => { }} />
                    <ExtraCard img={images.Activeware} textOnImage={"Activeware Shirts"} onclick={() => { }} />
                    <ExtraCard img={images.Fragrances} textOnImage={"Fragrances"} onclick={() => { }} />
                    <ExtraCard img={images.CubanShirt} textOnImage={"Caban Shirt"} onclick={() => { }} />
                </div>
            </div>
        </div>
    )
}

export default ExtraSection