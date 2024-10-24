import React, { useState } from 'react'
import PageTitle from '../Components/Heading/PageTitle'
import CustomBtn from '../Components/CustomBtn'
import TotalAmountCard from '../Components/Cards/TotalAmountCard'
import { useNavigate } from 'react-router-dom'
const PlaceOrder = () => {

  const [paymentMethod, setPaymentMethod] = useState("CashOnDelivery")
  const navigate = useNavigate();
  return (
    <div className="h-full w-full px-3 md:px-6 mt-4">
      <div className="px-4 sm:px-[5vw] md:px-[7cw] gl:px=[9vw]">
        <div className='fa-1x md:text-2xl  mt-10 font-Aclonica flex justify-start'>
          <PageTitle title1={"Place"} title2={"order"} />
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 my-4 md:my-3">
          <div className="w-full max-w-2/4 sm:p-[3vw] md:px-[4vw]">
            <div className='fa-1x md:text-1xl my-4 font-Aclonica flex justify-start'>
              <PageTitle title1={"Delivary"} title2={"Information"} />
            </div>
            <form className="">
              <div className="flex flex-col md:flex-row  gap-3 my-2">
                <input required
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-blackColor"
                  type="text"
                  placeholder='First Name (irfan)' />
                <input required
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-blackColor"
                  type="text"
                  placeholder='last Name (khan)' />
              </div>
              <div className="flex gap-3 my-2">
                <input required
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-blackColor"
                  type="email"
                  placeholder='Email (example@example.com)' />
              </div>
              <div className="flex gap-3 my-2">
                <input required
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-blackColor"
                  type="email"
                  placeholder='Street No ( Street No 131 Sector I-10 / 2)' />
              </div>
              <div className="flex gap-3 my-2">
                <input required
                  className="bg-white appearance-none border fa-1x md:text-sm
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-blackColor"
                  type="text"
                  placeholder='City Name (Islambad)' />
                <input required
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-blackColor"
                  type="text"
                  placeholder='State (KPK)' />
              </div>
              <div className="flex gap-3 my-2">
                <input required
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-blackColor"
                  type="number"
                  placeholder='Contact No (03338988377)' />
              </div>
            </form>
          </div>
          <div className="w-full">
            <TotalAmountCard />
            <div className="m-5">
              <div className='fa-1x md:text-1xl my-4 font-Aclonica flex justify-start'>
                <PageTitle title1={"Paymnet"} title2={"Method"} />
              </div>
              <div className="flex flex-col md:flex-row md:justify-around gap-3">
                <div onClick={() => setPaymentMethod("Stripe")}
                  className=' min-w-44 flex justify-center items-center gap-3 border p-3 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === "Stripe" ? "bg-green-500" : ""}`}></p>
                  <img src="../src/assets/Stripe.png" className='h-10 mx-2' alt="" />
                </div>
                <div onClick={() => setPaymentMethod("RazorPay")}
                  className=' min-w-44 flex justify-center items-center gap-3 border p-3 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === "RazorPay" ? "bg-green-500" : ""}`}></p>
                  <img src="../src/assets/Razorpay_logo.png" className='h-10 mx-2' alt="" />
                </div>
                <div onClick={() => setPaymentMethod("CashOnDelivery")}
                  className=' min-w-44 flex justify-center items-center gap-2 border p-1 px-3 cursor-pointer'>
                  <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod === "CashOnDelivery" ? "bg-green-500" : ""}`}></p>

                  <img src="../src/assets/COD.png" className='h-10 mx-2' alt="" />
                  {/* <p  className='text-gray-600 text-sm font-medium mx-1 border' alt="">Cash On Delivery</p> */}
                </div>
              </div>
            </div>
            <div className="m-5">
              <button onClick={()=>navigate("/my-orders")} className={`btn-dark`}>Submit</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default PlaceOrder