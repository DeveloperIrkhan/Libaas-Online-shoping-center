import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../Components/Cards/Spinner/Spinner'
import Cookies from 'js-cookie'
import axios from 'axios'
import { toast } from 'react-toastify'
const Profile = () => {
    const [spinner, setSpinner] = useState(true)
    const [user, setUser] = useState({})
    const getUserInfo = async () => {
        try {
            setSpinner(true);
            const token = Cookies.get('accessToken');

            const response = await axios.get("http://localhost:8080/api/v1/auth/user-info", {
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            });

            const {user} = response.data;
            setUser(user);
            toast.success(response.data.message);
        } catch (error) {
            // Handle error if needed, e.g., toast.error("Failed to fetch user info")
        } finally {
            setSpinner(false);
        }
    };

    useEffect(() => { getUserInfo() }, [])
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-whiteColor to-yellow-200">
            {spinner && <Spinner />}
            <div className="px-4 sm:px-[5vw] md:px-[7vw] gl:px-[9vw] w-full  flex justify-center items-center">
                <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-[40%] text-center relative">
                    <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-48 h-48 rounded-full 
                    overflow-hidden border-4 border-white shadow-lg">
                        <img
                            src={user.avator}
                            alt="Profile"
                            className="w-48 h-48 object-fill"
                        />
                    </div>

                    <h2 className="mt-40 text-xl font-semibold text-gray-800">Your Good Name : {user.firstName + " " + user.lastName}</h2>
                    <p className="text-gray-500">your Email : {user.email}</p>
                    <p className="text-sm text-gray-500 mt-2">
                        <br />
                        <b>Your Role : {user.UserRole === 1 ? "User" : "Admin"}</b>
                    </p>

                    {/* <div className="flex justify-around mt-4 text-gray-700">
                        <div className="text-center">
                            <p className="font-bold">65</p>
                            <p className="text-xs">Friends</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold">43</p>
                            <p className="text-xs">Photos</p>
                        </div>
                        <div className="text-center">
                            <p className="font-bold">21</p>
                            <p className="text-xs">Comments</p>
                        </div>
                    </div> */}
                    <div className="mt-10">

                        <Link to={"/"} className="px-4 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-200">
                            Go Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile