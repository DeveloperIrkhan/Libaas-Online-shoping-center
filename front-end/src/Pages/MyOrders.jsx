import React from 'react'
import { useShopContext } from '../Context/Context'
import PageTitle from '../Components/Heading/PageTitle'
const MyOrders = () => {
  const { products, currency } = useShopContext()
  return (
    <div>
      <div className=' px-4 sm:px-[5vw] md:px-[7cw] gl:px=[9vw]'>
        <div className=' fa-1x md:text-2xl mt-10 font-Aclonica flex justify-center'>
          <PageTitle title1={"My"} title2={"Orders"} fontSize={"3vmin"} />
        </div>

        <div className="flex flex-col md:flex-row p-3">
          <div className="w-full">
            <div className="flex flex-col my-10">
              {
                products.slice(0, 4).map((item, index) => (
                  <div key={index} className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row justify-around items-center 
                  gap-4 px-3">
                    <div className="flex items-start gap-5">
                      <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
                      <div className="">
                        <p className='text-sm sm:text-lg font-medium'>{item?.name}</p>
                        <div className="flex items-center gap-5 mt-3">
                          <p className=' text-sm md:text-base font-medium'>Total Price {currency}{item.price}</p>
                          <p className='px-2 md:px-3 sm:py-2 border rounded-sm bg-slate-50'>M</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row md:inline-flex gap-6">
                      <div className="flex justify-center items-center gap-2">
                        <p className='min-w-2.5 h-2.5 bg-green-500 rounded-full'></p>
                        <p className='font-medium text-gray-700 text-current'>Ready to Ship</p>
                      </div>
                      <div className="flex justify-center items-center gap-2">
                        <div className='min-w-24 md:min-w-44 text-sm md:text-base font-medium flex justify-center items-center gap-2 border p-1 px-3 cursor-pointer'>
                          <p>Track my Order</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyOrders