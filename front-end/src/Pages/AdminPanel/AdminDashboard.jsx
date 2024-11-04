import React from 'react'
import { NavLink } from 'react-router-dom'
import { images } from '../../assets/Images'

const AdminDashboard = () => {
    return (
        <div className='flex flex-col md:flex-row gap-4'>
            <div className="w-full md:w-[20%] border-2 border-red-500 flex flex-col gap-3">
                <NavLink to={""}>
                    <div className=" bg-white  mx-3 rounded-lg">
                        <div className="flex justify-center items-center md:p-4">
                            <img src={images.AccountIcon} alt="" />
                            <p className="text-blackColor tracking-widest">Add Items</p>
                        </div>
                    </div>
                </NavLink>
                
            </div>
            <div className="w-full md:w-[80%] border-2 border-emerald-600"></div>
        </div>
    )
}

export default AdminDashboard