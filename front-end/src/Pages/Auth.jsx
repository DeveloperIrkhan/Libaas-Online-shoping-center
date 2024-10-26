import React, { useState } from 'react'
import CustomBtn from '../Components/CustomBtn'
import PageTitle from '../Components/Heading/PageTitle'
import { images } from '../assets/Images'

const Auth = () => {
    const [currentState, setCurrentState] = useState("Signup")
    const [uploadedImage, setUploadedImage] = useState(null)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const onSubmitFormHandler = (event) => {
        event.preventDefault()

    }
    return (
        <div className="h-full w-full px-3 md:px-6 mt-4">
            <div className="text-lg md:text-2xl font-Aclonica font-bold text-gray-600 flex justify-center items-center">
                <p className='tracking-widest'>{currentState}</p>
                <hr className='border-none h-[2.5px] w-8 bg-gray-600 ml-3' />
            </div>
            <div className="flex flex-col items-center justify-center my-4 md:my-10">
                <form onSubmit={onSubmitFormHandler} className="w-full max-w-md">
                    <div className="md:inline-flex md:items-center mb-6">
                        <div className="md:w-full">
                            {currentState === "Signup" &&
                                <div className="flex flex-col justify-center items-center relative">
                                    <div className='min-w-49 w-20 h-20 rounded-full shadow-lg flex items-center justify-center border'>
                                        <img src={`${uploadedImage ? uploadedImage : images.profile}`} className='rounded-full' alt="" />
                                        <img src={images.camera} className={`absolute w-7 ${uploadedImage ? "hidden" : "opacity-80 block"}`} alt="" />
                                    </div>
                                    <input type="text" />
                                    <p className='mt-0 p-0 text-gray-600 font-bold absolute top-20'>Upload Avator</p>
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