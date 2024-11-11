import React, { useState } from 'react'
import PageTitle from './../../../Components/Heading/PageTitle'
import { images } from '../../../assets/Images'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CustomBtn from '../../../Components/CustomBtn'


const AddItem = () => {
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [subCategory, setSubCategory] = useState("")
  const [price, setPrice] = useState(0)
  const [productImage1, setProductImage1] = useState(null)
  const [productImage2, setProductImage2] = useState(null)
  const [productImage3, setProductImage3] = useState(null)
  const [productImage4, setProductImage4] = useState(null)
  const [startDate, setStartDate] = useState(new Date());
  const [bestSeller, setBestSeller] = useState('');
  const inputStyles = "bg-white appearance-none border-2 mt-3 border-gray-200 rounded max-w-md py-2 px-4 text-gray-700 leading-tight tracking-tighter focus:outline-none focus:bg-white focus:border-blackColor";
  const categories = [{ _id: 1, name: "MAN" }, { _id: 2, name: "WOMEN" }, { _id: 3, name: "KIDS" }, { _id: 4, name: "PERFUMES" }, { _id: 5, name: "SUN GLASSESS" }]
  const subcategories = [{ _id: 1, name: "INNER WEAR" }, { _id: 2, name: "OUTER WEAR" }, { _id: 3, name: "HEAD WEAR" }, { _id: 4, name: "FOOT WEAR" }]
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(name, description, category, subCategory, price, productImage1, productImage2, productImage3, productImage4, startDate, bestSeller)
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <div className="font-Aclonica fa-1x md:text-md my-4 capitalize">
          <PageTitle title1="Add" title2={"item"} />
        </div>
        <div className="py-3">
          {/* iamges section */}
          <div className="flex flex-row  md:justify-normal justify-center items-center gap-3">
            <label htmlFor='productImage1' className='border-2 border-dashed w-16 h-16 md:w-32 md:h-32 flex justify-center items-center'>
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
            <label htmlFor='productImage4' className='border-2 border-dashed w-16 h-16 md:w-32 md:h-32 flex justify-center items-center'>
              <img
                src={productImage4 ? URL.createObjectURL(productImage4) : images.Upload}
                className={`${productImage4 != null ? "w-full h-full" : "w-9 h-9 md:w-16 md:h-16"}`}
                alt="" />
              <input onChange={(e) => setProductImage4(e.target.files[0])} type="file" id='productImage4' hidden />
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
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className={inputStyles}
              type="number"
              required
              placeholder='Item Price' />
          </div>
          <div className="flex flex-col gap-3 my-2">
            <div className={`${inputStyles} w-[50%]`}>
              <select
                placeholder="Select a cetegory"
                onChange={(e) => { setCategory(e.target.value) }}
                className='form-control w-full'
                id="">
                {categories.map((item) => {
                  return (
                    <option className='w-full' key={item._id} value={item._id}>
                      {item.name}
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
                {subcategories.map((item) => {
                  return (
                    <option key={item._id} value={item._id}>
                      {item.name}
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
              <div>
                <p className='bg-gray-200 hover:bg-gray-300 px-3 py-1 cursor-pointer'>S</p>
              </div>
              <div>
                <p className='bg-gray-200 hover:bg-gray-300 px-3 py-1 cursor-pointer'>M</p>
              </div>
              <div>
                <p className='bg-gray-200 hover:bg-gray-300 px-3 py-1 cursor-pointer'>L</p>
              </div>
              <div>
                <p className='bg-gray-200 hover:bg-gray-300 px-3 py-1 cursor-pointer'>XL</p>
              </div>
              <div>
                <p className='bg-gray-200 hover:bg-gray-300 px-3 py-1 cursor-pointer'>XXL</p>
              </div>
            </div>
            {/* for perfumes */}
            <div className="flex gap-4 mt-2">
              <div>
                <p className='bg-gray-200 hover:bg-gray-300 px-3 py-1 cursor-pointer'>100ml</p>
              </div>
              <div>
                <p className='bg-gray-200 hover:bg-gray-300 px-3 py-1 cursor-pointer'>250ml</p>
              </div>
              <div>
                <p className='bg-gray-200 hover:bg-gray-300 px-3 py-1 cursor-pointer'>500ml</p>
              </div>
            </div>
          </div>
          {/* bestSeller, date,*/}
          <div className="my-3 flex items-center gap-2">
            <input
              type="checkbox"
              id='bestSeller'
              value={bestSeller}
              onChange={(e) => setBestSeller(e.target.value)} />
            <label htmlFor="bestSeller">Add to BestSeller</label>
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
        <button className='px-4 py-2 bg-slate-800 duration-150 hover:bg-slate-700 text-white rounded-md'>Add Item</button>
      </div>
    </form>
  )
}

export default AddItem