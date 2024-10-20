import React from 'react'
import { CiDeliveryTruck, CiHeadphones, CiRedo } from "react-icons/ci";
import { RiCustomerService2Fill } from "react-icons/ri";
const AboutApplication = () => {
    return (
        <div className='px-16 sm:px-[5vw] md:px-[17vw] gl:px-[9vw] my-5 md:my-10'>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                <div className="relative group p-3 border-2 border-blackColor rounded-lg overflow-hidden hover:border-blackColor duration-300">
                    <div className="h-[35vmin] w-[35vmin] flex flex-col justify-center text-center items-center relative z-10 group-hover:text-white transition-all duration-300">
                        <CiDeliveryTruck className='my-5 group-hover:-rotate-[360deg] duration-300' size={70} />
                        <p className='scroll-auto fa-[18px] font-bold leading-[23px]  align-baseline
                                     tracking-extra-spacing not-italic uppercase text-center
                                     indent-0 mb-6'>Free shipping</p>
                        <p>Free nationwide shipping on orders above 3999 PKR</p>
                    </div>
                    <div className="absolute top-0 left-0 h-full w-full bg-blackColor z-0 transform translate-y-full  group-hover:translate-y-0 transition-all duration-300"></div>
                </div>

                <div className="relative group p-3 border-2 border-blackColor rounded-lg overflow-hidden hover:border-blackColor duration-300">
                    <div className="h-[35vmin] w-[35vmin] flex flex-col justify-center text-center items-center relative z-10 group-hover:text-white transition-all duration-300">
                        <CiHeadphones className='my-5 group-hover:-rotate-[360deg] duration-300' size={70} />
                        <p className='scroll-auto fa-[18px] font-bold leading-[23px]  align-baseline
                                     tracking-extra-spacing not-italic uppercase text-center
                                     indent-0 mb-6'>Customer service</p>
                        <p>We are available from Monday to Friday to answer your questions.</p>
                    </div>
                    <div className="absolute top-0 left-0 h-full w-full bg-blackColor z-0 transform translate-y-full  group-hover:translate-y-0 transition-all duration-300"></div>
                </div>

                <div className="relative group p-3 border-2 border-blackColor rounded-lg overflow-hidden hover:border-blackColor duration-300">
                    <div className="h-[35vmin] w-[35vmin] flex flex-col justify-center text-center items-center relative z-10 group-hover:text-white transition-all duration-300">
                        <CiRedo className='my-5 group-hover:-rotate-[360deg] duration-300' size={70} />
                        <p className='scroll-auto fa-[18px] font-bold leading-[23px]  align-baseline
                                     tracking-extra-spacing not-italic uppercase text-center
                                     indent-0 mb-6'>Free Returns</p>
                        <p>We provide hassle-free Returns & Exchanges</p>
                    </div>
                    <div className="absolute top-0 left-0 h-full w-full bg-blackColor z-0 transform translate-y-full  group-hover:translate-y-0 transition-all duration-300"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutApplication