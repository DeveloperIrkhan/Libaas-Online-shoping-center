import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
const Footer = () => {
    const h_style = "fa-[18px] font-bold leading-[23px]  align-baseline text-blackColor tracking-extra-spacing not-italic uppercase indent-0 py-5"
    const p_style = "leading-[20px] py-1 font-normal capitalize tracking-[1.5px] align-baseline text-[#7b7878]"
    return (
        <div className='mt-16 bg-[#f7f7f8]'>
            <div className="flex flex-col md:grid grid-cols-2 md:grid-cols-4 gap-4 p-20 ">
                <div className="">
                    <p className={`${h_style}`}> INFORMATION</p>
                    <p className={`${p_style}`}> Become Our Distributor</p>
                    <p className={`${p_style}`}> Terms & Conditions</p>
                    <p className={`${p_style}`}> Shipping Policy</p>
                    <p className={`${p_style}`}> Privacy Policy</p>
                    <p className={`${p_style}`}> Return Policy</p>
                    <p className={`${p_style}`}> Blogs</p>
                </div>
                <div className="">
                    <p className={`${h_style}`}>CUSTOMER CARE</p>
                    <p className={`${p_style}`}>Query/Complaints</p>
                    <p className={`${p_style}`}>Contact Us</p>
                    <p className={`${p_style}`}>FAQs</p>
                    <p className={`${p_style}`}>📞 +92 340 0380003</p>
                    <p className={`${p_style}`}>✉️ info@mendeez.com</p>
                </div>
                <div className="">
                    <p className={`${h_style}`}>JOIN NEWSLETTER FOR BEST OFFERS</p>
                    <p className={`${p_style}`}>Sign Up for 10% OFF on your first order.
                        Get updates on the upcoming sales, discounts & amazing offers! CARE</p>

                    <div className='my-4 group'>
                        <div className="group-hover:border-yellow-500 duration-200 flex items-center border-b border-gray-500 py-2">
                            <input className="appearance-none bg-transparent border-none w-full
                             text-gray-700 mr-3 py-1 px-2 leading-tight 
                             focus:outline-none" 
                             type="text" 
                             placeholder="example@gmail.com" />
                        </div>
                    </div>
                </div>
                <div className="gap-y-3">
                    <p className={`${h_style}`}>VISIT YOUR NEAREST STORE</p>
                    <p className={`${p_style}`}>Monday - Thursday, 11 am - 10 pm</p>
                    <p className={`${p_style}`}>Friday, 3 pm - 10 pm</p>
                    <p className={`${p_style}`}>Saturday - Sunday, 11 am - 10 pm</p>
                    <p className={`${p_style}`}>Store Locator</p>
                    <div className="group flex flex-row gap-3 text-2xl mt-3">
                        <FaFacebook className='hover:text-blue-600 duration-300' />
                        <FaYoutube className='hover:text-red-600 duration-300' />
                        <FaInstagram className='hover:text-pink-500 duration-300' />
                        <FaTiktok className='hover:text-blackColor duration-300' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer