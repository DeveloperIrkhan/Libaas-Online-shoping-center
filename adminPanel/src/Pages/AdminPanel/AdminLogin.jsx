import React, { useEffect, useState } from 'react'
import PageTitle from '../../../Components/Heading/PageTitle'
import axios from 'axios'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'
import { useShopContext } from '../../../Context/Context'
import { useNavigate } from 'react-router-dom'
import Spinner from '../../../Components/Cards/Spinner/Spinner'

const AdminLogin = () => {
    const { setToken, setRole, setWithExpiry, setloggedInUser } = useShopContext()
    const Navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     console.log("AdminLogin ", Token, Role,)
    // }, [Token, Role])



    const onSubmitFormHandler = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await axios.post("http://localhost:8080/api/v1/auth/login",
                { email, password },
                { withCredentials: true }
            )
            if (response.data.success) {
                const { accessToken, refreshToken, loggedIn } = response.data;
                const accessTokenExpiry = new Date(new Date().getTime() + 3 * 60 * 60 * 1000);
                Cookies.set('accessToken', accessToken, { expires: accessTokenExpiry, path: '/' });
                Cookies.set('refreshToken', refreshToken, { expires: 7, path: '/' });
                setToken(accessToken);
                setWithExpiry("loggedIn", JSON.stringify(loggedIn), 7)
                setloggedInUser(loggedIn)
                if (loggedIn.UserRole === 2) {
                    setRole("Admin")
                    setWithExpiry("role", "Admin", 7)
                    toast.success("Admin login successfully")
                }
                else if (loggedIn.UserRole === 1) {
                    setRole("User")
                    setWithExpiry("role", "User", 7)
                    toast.success("Logged in successfully");
                    Navigate("/my-orders")
                }
                else {
                    toast.warning("Access restricted");
                }
            }
            else {
                toast.error(response.data.message || "Invalid login");
            }
        } catch (error) {
            console.error("Login error:", error.response || error);
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div>
            {loading && <Spinner />}
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
        </div>
    )
}

export default AdminLogin