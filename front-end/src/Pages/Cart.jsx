import React, { useEffect, useState } from 'react'
import { useShopContext } from '../Context/Context'
import PageTitle from '../Components/Heading/PageTitle';
import { FaPlus, FaMinus } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import TotalAmountCard from '../Components/Cards/TotalAmountCard';
import CustomBtn from '../Components/CustomBtn';
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems, setCartItems, products, currency, updateCartItems } = useShopContext();
  const [cartData, setCartData] = useState([])
  const navigate = useNavigate()

  // useEffect(() => {
  //   const savedCartItems = localStorage.getItem('cartItems');
  //   if (savedCartItems) {
  //     setCartItems(JSON.parse(savedCartItems));
  //   }
  // }, [])
  useEffect(() => {
    const tempraryData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempraryData.push({
            _id: Number(items),
            size: item,
            quantity: cartItems[items][item],
          })
        }
      }

    }
    setCartData(tempraryData)
  }, [cartItems])


  return (
    <div className=' px-4 sm:px-[5vw] md:px-[7cw] gl:px=[9vw]'>
      <div className='fa-1x md:text-2xl  mt-10 font-Aclonica flex justify-center'>
        <PageTitle title1={"Shoping"} title2={"Cart"} fontSize={"3vmin"} />
      </div>

      <div className="flex flex-col md:flex-row p-3">
        <div className="w-full md:w-3/4">
          <div className="mt-10 font-Aclonica fa-1x md:text-xl ">
            <PageTitle title1="Cart" title2={"Items"} />
          </div>
          <div className="flex flex-col my-10">
            {
              cartData.length > 0 ? cartData.map((item, index) => {
                const cartProducts = products.find((singleProduct) => singleProduct._id === item._id);
                return (
                  <div key={index} className="py-4 border-t border-b text-gray-700 grid gird-cols-2 md:grid-cols-2 items-center gap-4 px-3">
                    <div className="flex items-start gap-5">
                      <img src={cartProducts.image[0]} className='w-16 sm:w-20' alt="" />
                      <div className="">
                        <p className='text-sm sm:text-lg font-medium'>{cartProducts?.name}</p>
                        <div className="flex items-center gap-5 mt-3">
                          <p>{currency}{cartProducts.price}</p>
                          <p className='px-2 sm:px-3 sm:py-2 border rounded-sm bg-slate-50'>{item.size}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between md:justify-around items-center gap-2">
                      <div className="max-w-28 flex justify-center items-center gap-2">
                        <div className={`bg-blackColor w-6 h-6 flex items-center justify-center rounded-full text-white text-middum cursor-pointer hover:bg-gray-500 duration-300 ${Number(item.quantity) === 1 ? "opacity-0" : ""}`}>
                          <FaMinus className='text-white text-sm'
                            size={10}
                            onClick={() => Number(item.quantity) === 1 ? null : updateCartItems(item._id, item.size, item.quantity - 1)} />
                        </div>
                        <p className='text-sm sm:text-lg font-medium'>{item.quantity}</p>
                        <div className='bg-blackColor w-6 h-6 flex items-center justify-center rounded-full text-white text-middum cursor-pointer hover:bg-gray-500 duration-300'>
                          <FaPlus className='text-white'
                            size={10}
                            onClick={() => updateCartItems(item._id, item.size, item.quantity + 1)} />
                        </div>
                      </div>
                      <div className="flex justify-end items-center">
                        <IoTrashBin onClick={() => updateCartItems(item._id, item.size, 0)} className="text-red-300 hover:text-red-600 duration-300" size={20} />
                      </div>
                    </div>
                  </div>

                )
              }
              )
                : <p className='flex flex-row px-5 py-4 md:mx-6 bg-red-50 md:shadow-md md:py-4 text-blackColor rounded-lg text-base'> cart is empty at the moment!!</p>
            }


          </div>
        </div>
        <div className="w-full md:w-1/4 flex flex-col md:items-end md:mb-10">
          <TotalAmountCard />
          <div className="w-full my-4 px-10 md:px-0 md:flex md:justify-center">
            <CustomBtn onClickFun={() => navigate("/place-order")} className={"btn-dark w-full md:w-3/4 shadow-md"} text={"Proceed to checkout"} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart