import React from 'react'
import { images } from '../../assets/Images'
import ExtraCard from '../Cards/ExtraCard'
import { useNavigate } from 'react-router-dom'
const ExtraSection = () => {
    const navigate = useNavigate()
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] py-4'>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 m-3 justify-center mx-auto">
                    <ExtraCard img={images.SunGlassess} textOnImage={"sun glasses"} callFun={() => { }} />
                    <ExtraCard img={images.Activeware} textOnImage={"Activeware Shirts"} callFun={() => { }} />
                    <ExtraCard img={images.Perfume_Allure} textOnImage={"Fragrances"} callFun={() => { navigate("/perfumes") }} />
                    <ExtraCard img={images.CubanShirt} textOnImage={"Caban Shirt"} callFun={() => { }} />
                </div>
            </div>
        </div>
    )
}

export default ExtraSection