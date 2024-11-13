import React, { useEffect, useState } from 'react'
import { images } from '../../../assets/Images'
import './nav.css'
import { Link, useNavigate } from 'react-router-dom'
import { useShopContext } from '../../../Context/Context'
import Cookies from 'js-cookie'
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from '../../../Components/Cards/Spinner/Spinner'

const AdminNavbar = () => {
    const navigate = useNavigate()
    const { loggedInUser, setloggedInUser, token, setToken } = useShopContext();
    const [loading, setIsLoading] = useState(false)

    useEffect(() => {
        console.log("useEffect", token)
    }, [token]);
    const signoutAsync = async () => {
        try {
            const token = Cookies.get('accessToken');
            console.log("signout", token)
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
                navigate("/admin-panel");
            }
            setToken("");

        } catch (error) {
            console.log("error", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="">
            {loading && <Spinner />}

            <div className="banner">
                <div className='px-4 sm:px-[5vw] md:px-[7cw] lg:px=[9vw] flex items-center justify-between py-5 font-medium border-2 border-hoverColor'>
                    <div className="  h-[10vmin] w-[12vmin] m-auto" style={{ cursor: "pointer" }}
                        onClick={() => navigate("/admin-panel")}>
                        <img className='hidden md:block' src={images.Logo} alt="" />
                        <p className='main-heading block md:hidden'>Libaas</p>
                    </div>
                    <ul className='flex items-center gap-2 text-small text-blackColor uppercase relative'>
                        <div className="relative group flex items-center gap-1">
                            <div className='flex items-center'>
                                {loggedInUser ? <>
                                    <div className='w-10 h-10 border-2 rounded-full overflow-hidden flex justify-center items-center'>
                                        <img className='w-9 h-9 rounded-full' src={loggedInUser.avator} alt="" /></div>
                                </> : <p className='hidden md:block'>Account</p>}
                                <img className='block md:hidden' src={images.AccountIcon} style={{ width: "25px" }} alt="Account Icon" />
                            </div>

                            {/* Dropdown menu */}
                            {loggedInUser && <div className="absolute dropwonn z-50 border top-10 right-0 bg-white 
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
                                    <Link onClick={signoutAsync} className="py-2 px-8 tracking-wider border-b transition-colors duration-150 hover:bg-gray-100">
                                        SignOut
                                    </Link>
                                </div>
                            </div>
                            }
                        </div>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default AdminNavbar