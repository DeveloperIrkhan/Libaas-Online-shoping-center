import React, { useState } from 'react'
import { images } from '../../assets/Images'
import './nav.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
const navigate = useNavigate()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="">
            <div className="px-4 sm:px-[5vw] md:px-[7cw] lg:px=[9vw]
            flex items-center flex-start py-1 bg-secondColor gap-3">
                <div className="hidden md:flex gap-2 ">
                    <FontAwesomeIcon icon={faFacebook} className='hover:text-whiteColor duration-400' />
                    <FontAwesomeIcon icon={faInstagram} className='hover:text-whiteColor duration-400' />
                    <FontAwesomeIcon icon={faTwitter} className='hover:text-whiteColor duration-400' />
                </div>
                <div className=" m-auto ">
                    <p className='text-center text-blackColor text-small md:text-sm '>Summer Clearance Sale Is Live | UPTO 50% OFF | SHOP NOW</p>
                </div>
            </div>
            <div className="banner">
                <div className='px-4 sm:px-[5vw] md:px-[7cw] lg:px=[9vw] flex items-center justify-between py-5 font-medium border-2 border-hoverColor'>

                    <div
                        className={`fixed top-0 left-0 w-screen h-full bg-white z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'menu-open' : 'menu-close'}`}>
                        <div className="flex flex-col px-16 mt-20">
                            <ul className='flex flex-col gap-6'>
                                <NavLink to={"/summer-sale"} className={({ isActive }) => `p-1 ${isActive ? "text-secondColor  font-bold" : ""}`} onClick={toggleMenu}>
                                    <p>summer clearance sale</p>
                                </NavLink>
                                <NavLink to={"/new-arrivals"} className={({ isActive }) => `p-1 ${isActive ? "text-secondColor  font-bold" : ""}`} onClick={toggleMenu}>
                                    <p>new arrivals</p>
                                </NavLink>
                                <NavLink to={"/collections"} className={({ isActive }) => `p-1 ${isActive ? "text-secondColor  font-bold" : ""}`} onClick={toggleMenu}>
                                    <p>Collections</p>
                                </NavLink>
                                <NavLink to={"/Clothing"} className={({ isActive }) => `p-1 ${isActive ? "text-secondColor  font-bold" : ""}`} onClick={toggleMenu}>
                                    <p>clothing</p>
                                </NavLink>
                                <NavLink to={"/Accessories"} className={({ isActive }) => `p-1 ${isActive ? "text-secondColor  font-bold" : ""}`} onClick={toggleMenu}>
                                    <p>accessories</p>
                                </NavLink>
                                <NavLink to={"/Footwear"} className={({ isActive }) => `p-1 ${isActive ? "text-secondColor  font-bold" : ""}`} onClick={toggleMenu}>
                                    <p>footwear</p>
                                </NavLink>
                                <NavLink to={"/activewear"} className={({ isActive }) => `p-1 ${isActive ? "text-secondColor  font-bold" : ""}`} onClick={toggleMenu}>
                                    <p>activewear</p>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className={`md:hidden z-50 mx-4 ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                        <span>
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                        </span>
                    </div>
                    <div className="searchbox text-small flex items-center gap-2">
                        <FontAwesomeIcon className='md:text-sm text-lg' icon={faSearch} />
                        <p className='hidden md:block'>Search</p>
                    </div>
                    <div className="logo m-auto" style={{cursor:"pointer"}} onClick={()=> navigate("/")}>
                        <img className='hidden md:block' src={images.Logo} alt="" />
                        <p className='main-heading block md:hidden'>Libaas</p>
                    </div>
                    <ul className='flex items-center gap-2 text-small text-blackColor uppercase'>
                        <NavLink to={"/login"} className='flex items-center gap-1' >
                            <p className='hidden md:block'>Account</p>
                            <img className='block md:hidden' src={images.AccountIcon} style={{ width: "25px" }} alt="" />
                        </NavLink>
                        <NavLink to={"/cart"} className='flex items-center gap-0.5' >
                            <p className='hidden md:flex'>cart</p>
                            <img src={images.Cart} style={{ width: "25px" }} alt="" />
                        </NavLink>
                    </ul>
                </div>

            </div>
            <div className="">
                <div className="flex flex-col">
                    <ul className='hidden md:flex sm:px-[5vw] md:px-[7cw] lg:px=[9vw] justify-center md:gap-7 py-5 text-darkColor text-middum-extended uppercase'>
                        <NavLink to={"/summer-sale"} className='flex flex-col items-center gap-1' >
                            <p>summer clearance sale</p>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>
                        <NavLink to={"/new-arrivals"} className='flex flex-col items-center gap-1' >
                            <p>new arrivals</p>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>

                        <NavLink to={"/collections"} className='flex flex-col items-center gap-1' >
                            <p>Collections</p>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>
                        <NavLink to={"/Clothing"} className='flex flex-col items-center gap-1' >
                            <p>clothing</p>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>
                        <NavLink to={"/Accessories"} className='flex flex-col items-center gap-1' >
                            <p>accessories</p>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>
                        <NavLink to={"/Footwear"} className='flex flex-col items-center gap-1' >
                            <p>footwear</p>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>
                        <NavLink to={"/activewear"} className='flex flex-col items-center gap-1' >
                            <p>activewear</p>
                            <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
                        </NavLink>

                    </ul>
                </div>
            </div>

            <div className="bg-hoverColor text-small flex justify-around py-2 text-darkColor">
                <div className="hidden md:flex">Free Shipping On Order Above Rs/-5000</div>
                <div className="">Free Returns Within 7 Days</div>
                <div className="hidden md:flex">Exclusive Online Discount - Only at Libaas</div>
            </div>
        </div>
    )
}

export default Navbar