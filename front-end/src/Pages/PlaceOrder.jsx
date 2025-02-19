import React, { useEffect, useState } from 'react'
import PageTitle from '../Components/Heading/PageTitle'
import TotalAmountCard from '../Components/Cards/TotalAmountCard'
import { useNavigate } from 'react-router-dom'
import { useShopContext } from '../Context/Context'
import { saveCartOrderCOD, saveCartOrderRazorpay, saveCartOrderstripe } from '../Utils/APIUtils'
import Spinner from '../Components/Cards/Spinner/Spinner'
import { toast } from 'react-toastify'
const PlaceOrder = () => {
  const { cartItems, getCartAmount, delivery_Fee } = useShopContext()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const [items, setItems] = useState(cartItems ? cartItems : {})
  const [charges, setCharges] = useState(Number(getCartAmount() + delivery_Fee))
  const [paymentMethod, setPaymentMethod] = useState("CashOnDelivery")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(getCartAmount());
  }, [cartItems])

  useEffect(() => {
    setCharges(Number(getCartAmount() + delivery_Fee))
    console.log("charges", charges)
  }, [charges])

  useEffect(() => {
    setItems(cartItems)
    console.log("Items", cartItems)
  }, [cartItems])

  const handlePaymentMethod = async (event) => {
    event.preventDefault()
    try {
      setIsLoading(true)

      const cartData = { // Create a plain JavaScript object
        firstName,
        lastName,
        email,
        address,
        city,
        state,
        contactNumber,
        items,
        charges,
        paymentMethod,
      };
      let response
      switch (paymentMethod) {
        case 'Stripe':
          response = await saveCartOrderstripe(cartData)
          break;
        case 'RazorPay':
          response = await saveCartOrderRazorpay(cartData)
          break;
        default:
          response = await saveCartOrderCOD(cartData)
          break;
      }
      const { success, message } = response
      if (success) {
        localStorage.removeItem("cartItems")
        toast.success(message ?? "Order added successfully!")
        navigate("/my-orders")
      }
      else toast.error(message)
    } catch (error) {
      console.error(error)
    }
    finally {
      setItems({})
      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setAddress(""),
        setCity(""),
        setState(""),
        setContactNumber(""),
        setCharges(0)
      setIsLoading(false)
    }
  }
  return (
    <div className="h-full w-full px-3 md:px-6 mt-4">
      {isLoading && <Spinner />}
      <div className="px-4 sm:px-[5vw] md:px-[7cw] lg:px-[9vw]">
        <div className='fa-1x md:text-2xl  mt-10 font-Aclonica flex justify-start'>
          <PageTitle title1={"Place"} title2={"order"} />
        </div>
        <form className="" onSubmit={handlePaymentMethod}>
          <div className="flex flex-col md:flex-row justify-center gap-4 my-4 md:my-3">
            <div className="w-full max-w-2/4 sm:p-[3vw] md:px-[4vw]">
              <div className='fa-1x md:text-1xl my-4 font-Aclonica flex justify-start'>
                <PageTitle title1={"Delivary"} title2={"Information"} />
              </div>
              <div className="flex flex-col md:flex-row  gap-3 my-2">
                <input required value={firstName} onChange={(e) => setFirstName(e.target.value)}
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-yellow-400"
                  type="text"
                  placeholder='First Name' />
                <input required value={lastName} onChange={(e) => setLastName(e.target.value)}
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-yellow-400"
                  type="text"
                  placeholder='last Name' />
              </div>
              <div className="flex gap-3 my-2">
                <input required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-yellow-400"
                  type="email"
                  placeholder='Email (example@example.com)' />
              </div>
              <div className="flex gap-3 my-2">
                <input required value={address} onChange={(e) => setAddress(e.target.value)}
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-yellow-400"
                  type="text"
                  placeholder='Street No 123 sector A, Phase, City Name' />
              </div>
              <div className="flex gap-3 my-2">
                <input required value={city} onChange={(e) => setCity(e.target.value)}
                  className="bg-white appearance-none border fa-1x md:text-sm
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-yellow-400"
                  type="text"
                  placeholder='City Name (Islambad)' />
                <input required value={state} onChange={(e) => setState(e.target.value)}
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-yellow-400"
                  type="text"
                  placeholder='State (KPK)' />
              </div>
              <div className="flex gap-3 my-2">
                <input required value={contactNumber} onChange={(e) => setContactNumber(e.target.value)}
                  className="bg-white appearance-none border
                                border-gray-200 rounded w-full py-2 px-4 
                                text-gray-700 leading-tight tracking-wider focus:outline-none
                                focus:bg-white focus:border-yellow-400"
                  type="text"
                  placeholder='Contact No (03338988377)' />
              </div>
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
                <button type='submit' className={`btn-dark`}>Submit</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PlaceOrder