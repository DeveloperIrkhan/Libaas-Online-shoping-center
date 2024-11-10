import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./../../Pages/AdminPanel/Navbar/Navbar"
import PageTitle from '../Heading/PageTitle'
import NavButton from '../admin-panel/NavButton'
import { images } from '../../assets/Images'
import axios from 'axios'
import Spinner from '../Cards/Spinner/Spinner'
import { toast } from 'react-toastify'
import { useShopContext } from '../../Context/Context'
const AdminLayout = () => {
    const { token, setToken } = useShopContext()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const onSubmitFormHandler = async (e) => {
        e.preventDefault();
        // const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/auth/login`, { email, password })
        try {
            setLoading(true)
            const response = await axios.post("http://localhost:8080/api/v1/auth/login", { email, password })
            console.log("response", response)
            if (response.data.success) {
                const { accessToken, loggedIn } = response.data;
                console.log(response)
                if (loggedIn.UserRole === 2) {
                    setToken(accessToken);
                    toast.success("Admin login successfully")
                }
                else if (loggedIn.role === 1) {
                    setToken(accessToken);
                    toast.success("Logged in successfully");
                }
                else {
                    toast.warning("Access restricted");
                }
            }
            else {
                toast.error(response.data.message || "Invalid login");
            }
        } catch (error) {
            toast.error("invalid login")
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className='bg-gray-50'>
            {loading && <Spinner />}
            {(token !== "" && token !== undefined && token.length > 0) ? (
                <div className='bg-gray-50 w-full h-screen'>
                    <div className="header">
                        <Navbar />
                    </div>
                    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] my-5">
                        <div className="mt-10 font-Aclonica my-4">
                            <PageTitle title1="admin" title2={"panel"} />
                        </div>
                        <div className='flex flex-row md:gap-4'>
                            <div className="md:w-[25%] flex flex-col gap-y-3">
                                <NavButton redirectTo={"add-item"} img={images.AddProduct} buttonText={"Add Item"} />
                                <NavButton redirectTo={"add-category"} img={images.caregory} buttonText={"Add Category"} />
                                <NavButton redirectTo={"add-sub-category"} img={images.subCategory} buttonText={"Add SubCategory"} />
                                <NavButton redirectTo={"list-products"} img={images.ListProduct} buttonText={"List Items"} />
                                <NavButton redirectTo={"list-orders"} img={images.ListOrder} buttonText={"List Orders"} />
                            </div>
                            <div className="w-full md:w-[75%] rounded-lg bg-white shadow-md px-2 md:p-4">
                                <Outlet />
                            </div>
                        </div>
                    </div>
                    <div className="footer">

                    </div>
                </div>)
                : (
                    <div className="h-screen flex justify-center items-center">
                        <div className='bg-white shadow-md rounded-lg'>
                            <div className="mt-10 font-Aclonica flex justify-center">
                                <PageTitle title1="admin panel" title2={"login"} />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <form onSubmit={onSubmitFormHandler} className="max-w-lg p-5 md:p-20">
                                    <input
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="bg-white appearance-none border-2 mt-3
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-tighter focus:outline-none
                                focus:bg-white focus:border-blackColor"
                                        type="email"
                                        required
                                        placeholder='example@example.com' />

                                    <input
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-white appearance-none border-2 mt-3
                                        border-gray-200 rounded w-full py-2 px-4 
                                        text-gray-700 leading-tight tracking-tighter focus:outline-none
                                        focus:bg-white focus:border-blackColor"
                                        type="password"
                                        required
                                        placeholder='password please..'
                                    />
                                    <div className="w-full flex justify-between text-gray-600 mt-3">
                                        <p className='text-sm pb-1 cursor-pointer transition-colors duration-200 hover:text-gray-300'>Forgot password?</p>
                                        <p className='text-sm pb-1 cursor-pointer transition-colors duration-200 hover:text-gray-300'>can't have account</p>
                                    </div>
                                    <div className="w-full max-w-md flex justify-end mt-10">
                                        <button className='bg-black text-white w-full p-3 hover:bg-gray-700 duration-300 rounded-lg'>
                                            Login
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                )
            }
        </div>
    )
}
export default AdminLayout