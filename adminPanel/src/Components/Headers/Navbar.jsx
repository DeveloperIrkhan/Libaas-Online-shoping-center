import React, { useState } from 'react'
import "./Navbar.css"
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { images } from '../../assets/Images'
import { RxCross2 } from 'react-icons/rx'
const Navbar = () => {
    const [visable, setVisable] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    const [loggedInUser, setLoggedInUser] = useState(false)
    const [getCartCount, setGetCartCount] = useState(0)
    return (
        <div className="">
            <div className="shadow-md">
                <div className='px-4 sm:px-[5vw] md:px-[7cw] lg:px=[9vw] flex justify-between py-5 font-medium border-2 border-hoverColor'>
                    {/* logo */}
                    <div>
                        <img className='h-[10vmin] w-[12vmin] cursor-pointer hidden md:block'
                            onClick={() => navigate("/")}
                            src={images.Logo} alt="" />
                        <p className='main-heading mt-2  items-center text-small text-blackColor uppercase block md:hidden'>Libaas</p>
                    </div>
                    {/* admin panel text */}
                    <div className="flex main-heading  items-center text-small text-blackColor uppercase">
                        <p>Admin Panel</p>
                    </div>
                    
                    {/* login and logout */}
                    <div className='flex items-center gap-2 text-small text-blackColor uppercase relative'>
                        <div className="relative group flex items-center gap-1">
                            <div className='w-10 h-10 border-2 rounded-full overflow-hidden flex justify-center items-center'>
                                <img className='block' src={images.AccountIcon} style={{ width: "25px" }} alt="Account Icon" />
                                {/* when user is logged in show user name and when user is not logged in show login button */}
                                {/* <img className='w-9 h-9 rounded-full' src={loggedInUser.avator} alt="" /> */}
                            </div>

                            {/* Dropdown menu */}
                            {loggedInUser && <div className="absolute dropwonn z-50 border top-10 right-0 bg-white 
                            rounded-t-none rounded-lg shadow-lg opacity-0 invisible 
                            group-hover:visible group-hover:opacity-100 transform 
                            group-hover:translate-y-2 transition-all duration-500 ease-in-out">
                                <div className="dropdown-menu flex flex-col">
                                    <Link onClick={signoutAsync} className="py-2 px-8 tracking-wider border-b transition-colors duration-150 hover:bg-gray-100">
                                        SignOut
                                    </Link>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Navbar