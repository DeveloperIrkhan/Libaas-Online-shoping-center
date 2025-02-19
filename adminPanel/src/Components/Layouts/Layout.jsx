import React, { useEffect, useState } from 'react'
import Navbar from '../Headers/Navbar'
import { Outlet } from 'react-router-dom'
import Auth from '../Auth/Auth'
import { useAdminContext } from '../../oontext/AdminContext'
import { images } from '../../assets/Images'
import NavButton from '../../Pages/AdminPanel/NavButton'
import CountingCard from '../Cards/CountingCard'
import axios from 'axios'
import { API_URL } from '../../App'
import Spinner from '../Spinner/Spinner'
import { TiArrowForward, TiArrowBack } from "react-icons/ti";
import { getCagetories, getSubCategoriesAsync } from '../../utils/APIUtils'
const Layout = () => {
  const { token, role, products } = useAdminContext();
  const [categories, setCategories] = useState([])
  const [subcategories, setSubCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  const getCategories = async () => {
    try {
      const response = await getCagetories();
      if (response.success) {
        const { categories } = response
        setCategories(categories)
      }

    } catch (error) {
      console.log(error)
    }
  }
  const getSubCategories = async () => {
    try {
      setIsLoading(true)
      const response = await getSubCategoriesAsync();
      if (response.success) {
        const { subcategories } = response
        setSubCategories(subcategories)
      }
    } catch (error) {
      console.log(error)
    }
    finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    getCategories()
    getSubCategories()
  }, [token])

  useEffect(() => {
  }, [products])


  return (
    <>
      {token !== ""
        && token !== undefined
        && token.length > 0
        && role === "Admin" ?
        (
          <>
            <div className='p-0 m-0'>
              {isLoading && <Spinner />}
              <Navbar />
            </div>
            <div className='flex bg-slate-700'>
              <div className={`h-screen relative duration-200 ${isExpanded ? "w-72 shadow-sm" : "w-16 shadow-md drop-shadow-md"} bg-slate-700`}>
                <div className={`flex items-center gap-4 ${isExpanded ? "px-10" : "px-1"}`}>
                  <img className={`py-3 w-10 ${isExpanded ? "rotate-[360deg] duration-500" : "rotate-[-360deg] duration-500"}`} src={images.Icon} />
                  <p className={`font-medium text-white text-[2vmin] tracking-[5px]  duration-300 ${!isExpanded && "hidden"}`}>
                    LibaasPK
                  </p>
                </div>

                <button onClick={() => setIsExpanded(!isExpanded)}
                  className='absolute -right-4 top-3 border-2 shadow-sm group rounded-full bg-gray-100 hover:bg-yellow-400 w-8 h-8 justify-center items-center ml-auto hidden md:flex'>
                  {
                    isExpanded ? <TiArrowBack className='group-hover:text-black duration-500' />
                      : <TiArrowForward className='group-hover:text-black duration-500' />}
                </button>
                <div className="flex flex-col gap-4 mt-4">
                  <NavButton isExpanded={isExpanded} redirectTo={"add-item"} hoverImg={images.AddProductBlack} img={images.AddProductWhite} buttonText={"Add Item"} />
                  <NavButton isExpanded={isExpanded} redirectTo={"add-category"} hoverImg={images.caregoryBlack} img={images.caregoryWhite} buttonText={"Add Category"} />
                  <NavButton isExpanded={isExpanded} redirectTo={"add-sub-category"} hoverImg={images.subCategoryBlack} img={images.subCategoryWhite} buttonText={"Add SubCategory"} />
                  <NavButton isExpanded={isExpanded} redirectTo={"list-products"} hoverImg={images.ListProductBlack} img={images.ListProductWhite} buttonText={"List Items"} />
                  <NavButton isExpanded={isExpanded} redirectTo={"list-orders"} hoverImg={images.ListOrderBlack} img={images.ListOrderWhite} buttonText={"List Orders"} />
                </div>


              </div>
              <div className="bg-white flex-1 p-2">
                <div className="w-full rounded-lg bg-white text-gray-700 px-2 md:p-4">
                  <div className='flex w-full gap-1 md:gap-5'>
                    <CountingCard className={"flex flex-col shadow-md justify-center items-center bg-red-200 flex-1 text-center p-4 md:p-8 rounded-md duration-500 hover:text-white hover:bg-red-500"}
                      title={"Total Items"}
                      count={products.length} />
                    <CountingCard className={"flex flex-col shadow-md justify-center items-center bg-green-200 flex-1 text-center p-4 md:p-8 rounded-md duration-500 hover:text-white hover:bg-green-500"}
                      title={"Total Categories"}
                      count={categories.length} />
                    <CountingCard className={"flex flex-col shadow-md justify-center items-center bg-yellow-200 flex-1 text-center p-4 md:p-8 rounded-md duration-500 hover:text-white hover:bg-yellow-500"}
                      title={"Sub Categories"}
                      count={subcategories.length} />
                    <CountingCard className={"flex flex-col shadow-md justify-center items-center bg-blue-200 flex-1 text-center p-4 md:p-8 rounded-md duration-500 hover:text-white hover:bg-blue-500"}
                      title={"Total Orders"}
                      count={8} />
                  </div>
                  <Outlet />
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