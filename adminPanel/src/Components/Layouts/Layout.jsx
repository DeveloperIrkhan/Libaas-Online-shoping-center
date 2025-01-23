import React, { useEffect } from 'react'
import Navbar from '../Headers/Navbar'
import { Outlet } from 'react-router-dom'
import Auth from '../Auth/Auth'
import { useAdminContext } from '../../oontext/AdminContext'
import { images } from '../../assets/Images'
import NavButton from '../../Pages/AdminPanel/NavButton'
import PageTitle from '../Heading/PageTitle'
const Layout = () => {

  const { token, role } = useAdminContext();
  useEffect(() => {
    console.log("token",token)
  }, [token])


  return (
    <>
      {token !== ""
        && token !== undefined
        && token.length > 0
        && role === "Admin" ?
        (
          <>
            <div>
              <Navbar />
            </div>
            <div className='h-screen w-full'>
              <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[5vw] my-5">
                <div className="mt-10 font-Aclonica my-4">
                  <PageTitle title1="admin" title2={"panel"} />
                </div>
                <div className='flex md:flex-row flex-col gap-4'>
                  <div className="w-full md:w-[25%] flex flex-row md:flex-col items-center justify-center md:items-stretch md:justify-normal gap-y-3">
                    <NavButton redirectTo={"add-item"} img={images.AddProduct} buttonText={"Add Item"} />
                    <NavButton redirectTo={"add-category"} img={images.caregory} buttonText={"Add Category"} />
                    <NavButton redirectTo={"add-sub-category"} img={images.subCategory} buttonText={"Add SubCategory"} />
                    <NavButton redirectTo={"list-products"} img={images.ListProduct} buttonText={"List Items"} />
                    <NavButton redirectTo={"list-orders"} img={images.ListOrder} buttonText={"List Orders"} />
                  </div>
                  <div className="w-full rounded-lg bg-white shadow-md px-2 md:p-4">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (<> <Auth /></>)

      }
    </>
  )
}

export default Layout