import React, { useEffect, useState } from 'react'
import { images } from '../../assets/Images'
import './nav.css'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { RxCross2 } from 'react-icons/rx'
import { useShopContext } from '../../Context/Context'
import axios from 'axios'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import Spinner from '../Cards/Spinner/Spinner'

const Navbar = () => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false)
    const { openSearchBox, setOpenSearchBox, search, setSearch, getCartCount,
        token, role, loggedInUser, setloggedInUser, setToken } = useShopContext();
    const [visable, setVisable] = useState(false)
    const navigate = useNavigate()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    useEffect(() => {
    }, [token, role, loggedInUser]);


    const signoutAsync = async () => {
        try {
            const token = Cookies.get('accessToken');
            setloggedInUser(null);
            localStorage.removeItem("loggedIn");
            localStorage.removeItem("role");
            localStorage.removeItem("cartItems");
            Cookies.remove("accessToken");
            Cookies.remove("refreshToken");

            const response = await axios.post("http://localhost:8080/api/v1/auth/logout", {}, {
                headers: {
                    authorization: `Bearer ${token}`, // Correct header formatting
                },
            });

            if (response.data.success) {
                const { message } = response.data;
                toast.success(message);
                navigate("/");
            }
            setToken("");

        } catch (error) {
            console.log("error", error);
        } finally {
            setIsLoading(false);
        }
    };

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
            {isLoading && <Spinner />}
            <div className="relative px-4 sm:px-[5vw] md:px-[7cw] lg:px=[9vw]
            flex items-center flex-start py-1 bg-blackColor gap-3 text-white">
                <div className="hidden md:flex gap-2">
                    <FontAwesomeIcon icon={faFacebook} className='hover:text-blue-600 transition-colors duration-400' />
                    <FontAwesomeIcon icon={faInstagram} className='hover:text-pink-600 transition-colors duration-400' />
                    <FontAwesomeIcon icon={faTiktok} className='hover:text-black transition-colors duration-400' />
                    <FontAwesomeIcon icon={faYoutube} className='hover:text-red-600 transition-colors duration-400' />
                </div>

                <div className=" m-auto">
                    <p className='text-center text-white text-small md:text-sm '>
                        <span className="">Summer Clearance Sale Is Live | UPTO 50% OFF | </span>
                        <span onClick={() => navigate("/Collections")} className="cursor-pointer hover:underline hover:text-secondColor
                         transition-all duration-300">SHOP NOW</span></p>
                </div>
            </div>

            {visable && <div className={`absolute w-full py-4 bg-white h-auto shadow-xl z-50 transition-transform 
            transform duration-500 ease-in-out
                ${openSearchBox ? "top-0 left-0 translate-y-0" : "-translate-y-40"}`}>
                <div className="flex justify-center items-center gap-4 p-3 md:p-6">
                    <div className="w-3/4 md:w-1/2">
                        <input
                            name='search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search..."
                            className="bg-white appearance-none border-2 border-gray-300 rounded-lg w-full py-2 px-4
                             text-gray-700 leading-tight focus:outline-none focus:border-blackColor transition-colors duration-300"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <RxCross2 className='absolute right-4 text-2xl cursor-pointer hover:text-secondColor 
                        transition-colors duration-300'
                            onClick={() => setOpenSearchBox(!openSearchBox)} />
                    </div>
                </div>
            </div>
            }

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
                                <NavLink to={"/perfumes"} className={({ isActive }) => `p-1 ${isActive ? "text-secondColor  font-bold" : ""}`} onClick={toggleMenu}>
                                    <p>Perfumes</p>
                                </NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className={`md:hidden z-40 mx-4 ${isMenuOpen ? 'menu-open' : ''}`} onClick={toggleMenu}>
                        <span>
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                        </span>
                    </div>
                    <div className="searchbox text-small flex items-center gap-2 hover:cursor-pointer" onClick={() => setOpenSearchBox(true)}>
                        <FontAwesomeIcon className='md:text-sm text-lg' icon={faSearch} />
                        <p className='hidden md:block'>Search</p>
                    </div>
                    <div className="  h-[10vmin] w-[12vmin] m-auto" style={{ cursor: "pointer" }} onClick={() => navigate("/")}>
                        <img className='hidden md:block' src={images.Logo} alt="" />
                        <p className='main-heading block md:hidden'>Libaas</p>
                    </div>
                    <ul className='flex items-center gap-2 text-small text-blackColor uppercase relative'>
                        <div className="relative group flex items-center gap-1">
                            {loggedInUser ?
                                <>
                                    <div className='w-10 h-10 border-2 rounded-full overflow-hidden flex justify-center items-center'>
                                        <img className='w-9 h-9 rounded-full' src={loggedInUser.avator} alt="" /></div>
                                </> :
                                <NavLink to="/auth" className='flex items-center'>
                                    <p className='hidden md:block'>Account</p>
                                </NavLink>
                            }
                            <img className='block md:hidden' src={images.AccountIcon} style={{ width: "25px" }} alt="Account Icon" />

                            {/* Dropdown menu */}
                            {loggedInUser && <div className="absolute dropwonn z-50 border top-10 right-0 bg-white 
                            rounded-t-none rounded-lg shadow-lg opacity-0 invisible 
                            group-hover:visible group-hover:opacity-100 transform 
                            group-hover:translate-y-2 transition-all duration-500 ease-in-out">
                                <div className="dropdown-menu flex flex-col">
                                    <Link to={"/profile"} className="py-2 px-8 tracking-wider border-b transition-colors duration-150 hover:bg-gray-100">
                                        Profile
                                    </Link>
                                    <Link to="/my-orders" className="py-2 px-8 tracking-wider border-b transition-colors duration-150 hover:bg-gray-100">
                                        Orders
                                    </Link>
                                    <Link onClick={signoutAsync} className="py-2 px-8 tracking-wider border-b transition-colors duration-150 hover:bg-gray-100">
                                        SignOut
                                    </Link>
                                </div>
                            </div>}
                        </div>

                        <NavLink to={"/cart"} className='flex items-center gap-0.5 ' >
                            <p className='hidden md:flex'>cart</p>
                            <img src={images.Cart} style={{ width: "25px" }} alt="" />
                            <span className='absolute z-10 -right-[7px] top-3 w-5 h-5 flex justify-center items-center 
                             p-1 bg-blackColor text-white rounded-full'>
                                {getCartCount()}
                            </span>
                        </NavLink>
                    </ul>
                </div>

            </div>
            <div className="">
                <div className="flex flex-col">
                    <ul className='hidden md:flex sm:px-[5vw] md:px-[7cw] lg:px=[9vw] justify-center
                     md:gap-7 py-5 text-darkColor text-middum-extended uppercase'>
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
                        <NavLink to={"/perfumes"} className='flex flex-col items-center gap-1' >
                            <p>Perfumes</p>
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