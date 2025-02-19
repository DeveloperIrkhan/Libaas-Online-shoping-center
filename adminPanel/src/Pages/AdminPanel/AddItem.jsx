import React, { useEffect, useState } from 'react'
import PageTitle from './../../Components/Heading/PageTitle'
import { images } from '../../assets/Images'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import Cookies from 'js-cookie'
import Spinner from '../../Components/Spinner/Spinner';
import { toast } from 'react-toastify'
import { API_URL } from '../../App';
import { useAdminContext } from '../../oontext/AdminContext';
import { addItemAsync } from '../../utils/APIUtils';
const AddItem = () => {
  const { categories, subCategories } = useAdminContext()
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("MEN")
  const [subCategory, setSubCategory] = useState("HEADWEAR")
  const [originalPrice, setOriginalPrice] = useState(0)
  const [discountPrice, setDiscountPrice] = useState(0)
  const [productImage0, setProductImage0] = useState(null)
  const [productImage1, setProductImage1] = useState(null)
  const [productImage2, setProductImage2] = useState(null)
  const [productImage3, setProductImage3] = useState(null)
  const [startDate, setStartDate] = useState(new Date());
  const [bestSeller, setBestSeller] = useState(false);
  const [NewArrival, setNewArrival] = useState(false);
  const [SaleOnProduct, setSaleOnProduct] = useState(false);
  const [sizes, setSizes] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const inputStyles = "bg-white appearance-none border-2 mt-3 border-gray-200 rounded max-w-md py-2 px-4 text-gray-700 leading-tight tracking-tighter focus:outline-none focus:bg-white focus:border-blackColor";
  useEffect(() => {
    console.log("category", category)
    console.log("subCategory", subCategory)
  }, [category, subCategory])
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("name", name)
    formdata.append("description", description)
    formdata.append("originalPrice", originalPrice)
    formdata.append("discountPrice", discountPrice)
    formdata.append("category", category)
    formdata.append("subCategory", subCategory)
    formdata.append("sizes", JSON.stringify(sizes))
    formdata.append("bestSeller", bestSeller)
    formdata.append("NewArrival", NewArrival)
    formdata.append("SaleOnProduct", SaleOnProduct)
    productImage0 && formdata.append("productImage0", productImage0)
    productImage1 && formdata.append("productImage1", productImage1)
    productImage2 && formdata.append("productImage2", productImage2)
    productImage3 && formdata.append("productImage3", productImage3)
    // formdata.append("startDate", startDate)

    try {
      setIsLoading(true)
      const asyncResponse = await addItemAsync(formdata)
      const { success, message } = asyncResponse
      if (success) {
        toast.success(message)
      }
      else {
        toast.error(message)
      }
    } catch (error) {
      console.log(error)
    }
    finally {
      setIsLoading(false)
      setName("")
      setDescription("")
      setCategory("")
      setSubCategory("")
      setOriginalPrice(0)
      setDiscountPrice(0)
      setProductImage0(null)
      setProductImage1(null)
      setProductImage2(null)
      setProductImage3(null)
      setStartDate(new Date())
      setBestSeller(false)
      setSizes([])
      setIsLoading(false)
    }
  }
  return (
    <form onSubmit={onSubmitHandler}>
      {isLoading && <Spinner />}
      <div>
        <div className="font-Aclonica fa-1x md:text-md my-4 capitalize">
          <PageTitle title1="Add" title2={"item"} />
        </div>
        <div className="py-3">
          {/* iamges section */}
          <div className="flex flex-row  md:justify-normal justify-center items-center gap-3">
            <label htmlFor='productImage0' className='border-2 border-dashed w-16 h-16 md:w-32 md:h-32 flex justify-center items-center'>
              <img
                src={productImage0 ? URL.createObjectURL(productImage0) : images.Upload}
                className={`${productImage0 != null ? "w-full h-full" : "w-9 h-9 md:w-16 md:h-16"}`}
                alt="" />
              <input onChange={(e) => setProductImage0(e.target.files[0])} type="file" id='productImage0' hidden />
            </label>
            <label htmlFor='productImage1' className='border-2 border-dashed w-16 h-16 md:w-32 md:h-32 flex justify-center items-center '>
              <img
                src={productImage1 ? URL.createObjectURL(productImage1) : images.Upload}
                className={`${productImage1 != null ? "w-full h-full" : "w-9 h-9 md:w-16 md:h-16"}`}
                alt="" />
              <input onChange={(e) => setProductImage1(e.target.files[0])} type="file" id='productImage1' hidden />
            </label>
            <label htmlFor='productImage2' className='border-2 border-dashed w-16 h-16 md:w-32 md:h-32 flex justify-center items-center '>
              <img
                src={productImage2 ? URL.createObjectURL(productImage2) : images.Upload}
                className={`${productImage2 != null ? "w-full h-full" : "w-9 h-9 md:w-16 md:h-16"}`}
                alt="" />
              <input onChange={(e) => setProductImage2(e.target.files[0])} type="file" id='productImage2' hidden />
            </label>
            <label htmlFor='productImage3' className='border-2 border-dashed w-16 h-16 md:w-32 md:h-32 flex justify-center items-center'>
              <img
                src={productImage3 ? URL.createObjectURL(productImage3) : images.Upload}
                className={`${productImage3 != null ? "w-full h-full" : "w-9 h-9 md:w-16 md:h-16"}`}
                alt="" />
              <input onChange={(e) => setProductImage3(e.target.files[0])} type="file" id='productImage3' hidden />
            </label>

          </div>
          <div className="flex flex-col w-full">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={inputStyles}
              type="text"
              required
              placeholder='Item Name' />
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={inputStyles}
              type="text"
              required
              placeholder='description' />
            <label className='mt-3 ml-1'>Original Price</label>
            <input
              value={originalPrice}
              onChange={(e) => setOriginalPrice(e.target.value)}
              className={inputStyles}
              type="number"
              required
              placeholder='Item Original Price' />
            <label className='mt-3 ml-1'>Discount Price</label>
            <input
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
              className={inputStyles}
              type="number"
              placeholder='Item Discount Price' />
          </div>
          <div className="flex flex-col gap-3 my-2">
            <div className={`${inputStyles} w-[50%]`}>
              <select
                placeholder="Select a cetegory"
                onChange={(e) => { setCategory(e.target.value) }}
                className='form-control w-full'
                id="">
                {categories && categories.map((item) => {
                  return (
                    <option className='w-full' key={item._id} value={item.value}>
                      {item.category}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className={`${inputStyles} w-[50%]`}>
              <select
                placeholder="Select a cetegory"
                onChange={(e) => { setSubCategory(e.target.value) }}
                className='form-control w-full'
                id="">
                {subCategories && subCategories.map((item) => {
                  return (
                    <option className='w-full' key={item._id} value={item.value}>
                      {item.subCategory}
                    </option>
                  )
                })}
              </select>
            </div>
          </div>
          <div className="">
            <p>Product Sizes</p>
            {/* for shirts */}
            <div className="flex gap-4 mt-2">
              <div onClick={() => setSizes(prev => prev.includes("S") ? prev.filter(item => item !== "S") : [...prev, "S"])}>
                <p className={`bg-gray-500 text-white hover:bg-gray-700 px-3 py-1 cursor-pointer ${sizes.includes("S") ? "bg-gray-900" : ""}`}>S</p>
              </div>
              <div onClick={() => setSizes(prev => prev.includes("M") ? prev.filter(item => item !== "M") : [...prev, "M"])}>
                <p className={`bg-gray-500 text-white hover:bg-gray-700 px-3 py-1 cursor-pointer ${sizes.includes("M") ? "bg-gray-900" : ""}`}>M</p>
              </div>
              <div onClick={() => setSizes(prev => prev.includes("L") ? prev.filter(item => item !== "L") : [...prev, "L"])}>
                <p className={`bg-gray-500 text-white hover:bg-gray-700 px-3 py-1 cursor-pointer ${sizes.includes("L") ? "bg-gray-900" : ""}`}>L</p>
              </div>
              <div onClick={() => setSizes(prev => prev.includes("XL") ? prev.filter(item => item !== "XL") : [...prev, "XL"])}>
                <p className={`bg-gray-500 text-white hover:bg-gray-700 px-3 py-1 cursor-pointer ${sizes.includes("XL") ? "bg-gray-900" : ""}`}>XL</p>
              </div>
              <div onClick={() => setSizes(prev => prev.includes("XXL") ? prev.filter(item => item !== "XXL") : [...prev, "XXL"])}>
                <p className={`bg-gray-500 text-white hover:bg-gray-700 px-3 py-1 cursor-pointer ${sizes.includes("XXL") ? "bg-gray-900" : ""}`}>XXL</p>
              </div>
            </div>
            {/* for perfumes */}
            <div className="flex gap-4 mt-2">
              <div onClick={() => setSizes(prev => prev.includes("100ml") ? prev.filter(item => item !== "100ml") : [...prev, "100ml"])}>
                <p className={`bg-gray-500 text-white hover:bg-gray-700 px-3 py-1 cursor-pointer ${sizes.includes("100ml") ? "bg-gray-900" : ""}`}>100ml</p>
              </div>
              <div onClick={() => setSizes(prev => prev.includes("250ml") ? prev.filter(item => item !== "250ml") : [...prev, "250ml"])}>
                <p className={`bg-gray-500 text-white hover:bg-gray-700 px-3 py-1 cursor-pointer ${sizes.includes("250ml") ? "bg-gray-900" : ""}`}>250ml</p>
              </div>
              <div onClick={() => setSizes(prev => prev.includes("500ml") ? prev.filter(item => item !== "500ml") : [...prev, "500ml"])}>
                <p className={`bg-gray-500 text-white hover:bg-gray-700 px-3 py-1 cursor-pointer ${sizes.includes("500ml") ? "bg-gray-900" : ""}`}>500ml</p>
              </div>
            </div>
          </div>
          {/* bestSeller, date,*/}
          <div className="my-3 flex items-center gap-2">
            <input
              type="checkbox"
              id='bestSeller'
              value={bestSeller}
              onChange={(e) => setBestSeller(e.target.checked)} />
            <label htmlFor="bestSeller">Add to BestSeller</label>
          </div>

          <div className="my-3 flex items-center gap-2">
            <input
              type="checkbox"
              id='NewArrival'
              value={bestSeller}
              onChange={(e) => setNewArrival(e.target.checked)} />
            <label htmlFor="NewArrival">Add to NewArrival</label>
          </div>
          <div className="my-3 flex items-center gap-2">
            <input
              type="checkbox"
              id='SaleOnProduct'
              value={SaleOnProduct}
              onChange={(e) => setSaleOnProduct(e.target.checked)} />
            <label htmlFor="SaleOnProduct">Add to SaleOnProduct</label>
          </div>
          <div className="my-3 flex items-center gap-4">
            <p className='mt-3'>Today Date</p>
            <div className={`flex gap-3 items-center`}>
              <DatePicker
                selected={startDate}
                className="w-full bg-white appearance-none border-2 mt-3 border-gray-200 rounded py-2 px-4 text-gray-700 leading-tight tracking-tighter focus:outline-none focus:bg-white focus:border-blackColor"
                onChange={(date) => setStartDate(date)}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
        </div>
        <button type='submit' className='px-4 py-2 bg-slate-800 duration-150 hover:bg-slate-700 text-white rounded-md'>Add Item</button>
      </div>
    </form>
  )
}

export default AddItem