import React, { useEffect, useState } from 'react'
import { images } from './../../../assets/Images'
import './nav.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
    const [visable, setVisable] = useState(false)
    const navigate = useNavigate()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    useEffect(() => {
        if (location.pathname.includes('collections')) {
            setVisable(true)
        }
        else {
            setVisable(false)
        }
    }, [location])
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className="">
            <div className="banner">
                <div className='px-4 sm:px-[5vw] md:px-[7cw] lg:px=[9vw] flex items-center justify-between py-5 font-medium border-2 border-hoverColor'>
                    <div className="  h-[10vmin] w-[12vmin] m-auto" style={{ cursor: "pointer" }}
                        onClick={() => navigate("/admin-panel")}>
                        <img className='hidden md:block' src={images.Logo} alt="" />
                        <p className='main-heading block md:hidden'>Libaas</p>
                    </div>
                    <ul className='flex items-center gap-2 text-small text-blackColor uppercase relative'>
                        <div className="relative group flex items-center gap-1">
                            <NavLink to="/auth" className='flex items-center'>
                                <p className='hidden md:block'>Account</p>
                                <img className='block md:hidden' src={images.AccountIcon} style={{ width: "25px" }} 
                                alt="Account Icon" />
                            </NavLink>

                            {/* Dropdown menu */}
                            <div className="absolute dropwonn z-50 border top-5 right-0 bg-white 
                            rounded-t-none rounded-lg shadow-lg opacity-0 invisible 
                            group-hover:visible group-hover:opacity-100 transform 
                            group-hover:translate-y-2 transition-all duration-500 ease-in-out">
                                <div className="dropdown-menu flex flex-col">
                                    <Link className="py-2 px-8 tracking-wider border-b transition-colors duration-150 hover:bg-gray-100">
                                        Profile
                                    </Link>
                                    <Link to="/my-orders" className="py-2 px-8 tracking-wider border-b transition-colors duration-150 hover:bg-gray-100">
                                        Orders
                                    </Link>
                                    <Link className="py-2 px-8 tracking-wider border-b transition-colors duration-150 hover:bg-gray-100">
                                        SignOut
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar