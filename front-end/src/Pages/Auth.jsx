import React, { useEffect, useState } from 'react'
import CustomBtn from '../Components/CustomBtn'
import Spinner from '../Components/Cards/Spinner/Spinner'
import { images } from '../assets/Images'
import axios from 'axios'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'
import { useShopContext } from '../Context/Context'
import { API_URL } from '../App'
const Auth = () => {
    const [currentState, setCurrentState] = useState("Login")
    const [loading, setLoading] = useState(false)
    const [avator, setAvator] = useState()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const { token, setToken, role, setRole, setWithExpiry, setloggedInUser } = useShopContext()
    const navigate = useNavigate()
    useEffect(() => {
        if (token) {
            navigate("/")
        }
    }, [token])

    const onSubmitFormHandler = async (event) => {
        event.preventDefault()
        setLoading(true)
        if (currentState === "Signup") {
            try {
                const formdata = new FormData()
                formdata.append('firstName', firstName)
                formdata.append('lastName', lastName)
                formdata.append("email", email)
                formdata.append("avator", avator)
                formdata.append("password", password)

                const response = await axios.post(`${API_URL}/auth/register`, formdata, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });

                console.log(response);
                if (response.data.success) {
                    const { message } = response.data;
                    toast.success(message);
                }
            } catch (error) {
                console.error("Registration error:", error.response || error);
                toast.error("Registration failed");
            }
            finally {
                setLoading(false);
                setCurrentState("Login")
            }
        }
        else {
            try {
                // const response = await axios.post("http://localhost:8080/api/v1/auth/login", { email, password })
                const response = await axios.post(`${API_URL}/auth/login`,
                    { email, password },
                    { withCredentials: true })
                if (response.data.success) {
                    const { accessToken, refreshToken, loggedIn } = response.data;
                    const accessTokenExpiry = new Date(new Date().getTime() + 3 * 60 * 60 * 1000);
                    Cookies.set('accessToken', accessToken, { expires: accessTokenExpiry, path: '/' });
                    Cookies.set('refreshToken', refreshToken, { expires: 7, path: '/' });
                    setToken(accessToken);
                    setloggedInUser(loggedIn)
                    setWithExpiry("loggedIn", JSON.stringify(loggedIn), 7)

                    if (loggedIn.UserRole === 2) {
                        setRole("Admin")
                        // localStorage.setItem("role", "Admin");
                        setWithExpiry("role", "Admin", 7)

                        toast.success("Admin login successfully")
                        navigate("/my-orders")
                    }
                    else {
                        setRole("User")
                        setWithExpiry("role", "User", 7)
                        toast.success("Logged in successfully");
                        navigate("/my-orders")
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

    };

    return (
        <div className="w-full px-3 md:px-6 mt-4">
            {loading && <Spinner />}
            <div className="text-lg md:text-2xl font-Aclonica font-bold text-gray-600 flex justify-center items-center">
                <p className='tracking-widest'>{currentState}</p>
                <hr className='border-none h-[2.5px] w-8 bg-gray-600 ml-3' />
            </div>
            <div className="flex flex-col items-center justify-center my-4 md:my-10">
                <form onSubmit={onSubmitFormHandler} className="w-full max-w-md">
                    <div className="md:inline-flex md:items-center mb-6">
                        <div className="md:w-full">
                            {currentState === "Signup" &&
                                <div className="flex flex-col justify-center items-center relative my-6">
                                    <label className='cursor-pointer' htmlFor="avator">
                                        <div className='min-w-49 w-20 h-20 rounded-full shadow-lg flex items-center justify-center border overflow-hidden'>
                                            <img src={`${avator ? URL.createObjectURL(avator) : images.profile}`} className='rounded-full w-20 h-20' alt="" />
                                            <img src={images.camera} className={`absolute w-7 ${avator ? "hidden" : "opacity-80 block"}`} alt="" />
                                        </div>
                                    </label>
                                    <input onChange={(e) => setAvator(e.target.files[0])}
                                        type="file"
                                        name="avator"
                                        id="avator"
                                        hidden required />
                                    <p htmlFor="avator" className='mt-0 p-0 text-gray-600 font-bold absolute top-20'>Upload Avator</p>
                                </div>
                            }
                            {currentState === "Signup" &&
                                <div className='flex gap-x-3 flex-row md:flex-col'>
                                    <input
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        className="bg-white appearance-none border-2 mt-3
                            border-gray-200 rounded w-full py-2 px-4 
                            text-gray-700 leading-tight tracking-tighter focus:outline-none
                            focus:bg-white focus:border-blackColor"
                                        type="text"
                                        required
                                        placeholder='Fist Name' />
                                    <input
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        className="bg-white appearance-none border-2 mt-3
                            border-gray-200 rounded w-full py-2 px-4 
                            text-gray-700 leading-tight tracking-tighter focus:outline-none
                            focus:bg-white focus:border-blackColor"
                                        type="text"
                                        required
                                        placeholder='Last Name' />
                                </div>
                            }
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
                            {currentState === "Signup" && <input
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="bg-white appearance-none border-2 mt-3
                                        border-gray-200 rounded w-full py-2 px-4 
                                        text-gray-700 leading-tight tracking-tighter focus:outline-none
                                        focus:bg-white focus:border-blackColor"
                                type="password"
                                required
                                placeholder='agaain password please..'
                            />}


                            <div className="w-full flex justify-between text-gray-600 mt-3">
                                {currentState === "Login" && <p className='text-sm pb-1 cursor-pointer transition-colors duration-200 hover:text-gray-300'>Forgot password?</p>}
                                {currentState === "Login" ?
                                    <p onClick={() => setCurrentState("Signup")} className='text-sm pb-1 cursor-pointer transition-colors duration-200 hover:text-gray-300'>can't have account</p>
                                    :
                                    <p onClick={() => setCurrentState("Login")} className='text-sm pb-1 cursor-pointer transition-colors duration-200 hover:text-gray-300'>I have account</p>}
                            </div>
                        </div>
                    </div>
                    <div className="w-full max-w-md flex justify-end ">
                        <CustomBtn className={"btn-dark"} onClickFun={() => console.log("")} text={currentState} />
                    </div>
                </form>
            </div>

        </div>

    )
}

export default Auth