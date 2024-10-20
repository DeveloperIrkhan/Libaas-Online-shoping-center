import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import PageTitle from '../Components/Heading/PageTitle'
import { useShopContext } from '../Context/Context'
import Card from '../Components/Cards/Card'
import Spinner from '../Components/Cards/Spinner/Spinner'
const Collection = () => {
  const { products, currency, delivery_Fee } = useShopContext()
  const [setshowFilter, setSetshowFilter] = useState(false)
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [sortType, setSortType] = useState("Relevent")
  // getting item by categorywise
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  // pagination logic
  const [currentPage, setCurrentPage] = useState(1)
  const [itemPerPage] = useState(12);
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const productsPerPage = filterProducts.slice(indexOfFirstItem, indexOfLastItem)

  // change Page
  const Paginate = (pageNumber) => setCurrentPage(pageNumber)
  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter(item => item != e.target.value))
    } else {
      setCategory((prev) => [...prev, e.target.value])
    }
  }
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter(item => item != e.target.value))
    } else {
      setSubCategory((prev) => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productCopy = products.slice();
    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }
    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productCopy)

  }
  const filterItemsByPrice = () => {
    let productsCopy = filterProducts.slice()
    switch (sortType) {
      case "ByHighPrice":
        setFilterProducts(productsCopy.sort((a, b) => a.price - b.price))
        break;
      case "ByLowPrice":
        setFilterProducts(productsCopy.sort((a, b) => b.price - a.price))
        break;
      case "Relevent":
        applyFilter();
        break;
      default:
        applyFilter();
        break;
    }

  }
  useEffect(() => {
    applyFilter();
  }, [category, setCategory, subCategory, setSubCategory]);

  useEffect(() => {
    filterItemsByPrice();
  }, [sortType, setSortType,]);


  return (

    <div className="w-full h-full">
      {isLoading && <Spinner />}
      <div className="mx-0 md:mx-4">
        <div className="flex flex-col md:flex-row gap-2 sm:gap-10 pt-10">
          <div className="min-w-60 bg-gray-50 shadow-md py-3 rounded-md">
            <div className='relative block md:hidden'>
              <p className='hidden md:block fa-[18px] font-bold leading-[23px]  
            align-baseline first-letter:text-blackColor tracking-extra-spacing not-italic uppercase text-center indent-0
            '>Filter</p>
              <div className="flex flex-row justify-center p-3 group" onClick={() => setShowFilterMenu(!showFilterMenu)}>
                <p className='block md:hidden group-hover:text-secondColor group-hover:cursor-pointer duration-500 fa-[18px] font-bold leading-[23px]  align-baseline
            text-blackColor tracking-extra-spacing not-italic uppercase text-center indent-0'>Filter
                </p>
                <p><span><MdOutlineKeyboardArrowDown className={`group-hover:text-secondColor group-hover:cursor-pointer duration-500 text-2xl  ${showFilterMenu ? "rotate-360" : "-rotate-90"} `} /></span></p>
              </div>
              <div className={`bg-white p-3 duration-300 ${showFilterMenu ? "block" : "hidden"}`}>
                <div className={`pl-5 py-3 border bottom-1 m-2 p-3`}>
                  <div className="flex flex-col text-sm md:font-medium text-gray-700 font-bold m-1 uppercase tracking-widest">CATEGORIES</div>
                  <div className="flex flex-col text-sm md:font-medium text-gray-700">
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleCategory} value={"Men"} /> Men
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleCategory} value={"Women"} /> Women
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleCategory} value={"Kids"} /> Kids
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleCategory} value={"Unisex"} /> Unisex
                    </p>
                  </div>
                </div>
                <div className={`pl-5 py-3 border bottom-1 m-2 p-3`}>
                  <div className="flex flex-col text-sm md:font-medium text-gray-700 m-1 font-bold uppercase tracking-widest">Type</div>
                  <div className="flex flex-col text-sm md:font-medium text-gray-700">
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Headwear"} /> Headwear
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Bottomwear"} /> Bottomwear
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Outerwear"} /> Outerwear
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Topwear"} /> Topwear
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Innerwear"} /> Innerwear
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Footwear"} /> Footwear
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Activewear"} /> Activewear
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Sun Glasses"} /> Sun Glasses
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Fragrances"} /> Fragrances
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Caban Shirt"} /> Caban Shirt
                    </p>
                    <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Accessories"} /> Accessories
                    </p>
                  </div>
                </div>
              </div>
            </div>




            <div className={`${setshowFilter ? '' : 'hidden'} md:block`}>
              <p className="pl-5 hidden text-[20px] font-bold align-baseline
            text-blackColor uppercase tracking-widest md:inline-block">Filters</p>
              <div className={`pl-5 py-3`}>
                <div className="flex flex-col text-sm md:font-medium text-gray-700 m-1 uppercase tracking-widest">CATEGORIES</div>
                <div className="flex flex-col text-sm md:font-medium text-gray-700">
                  <p className='m-1 tracking-widest'>
                    <input className='w-5' type="checkbox" onChange={toggleCategory} value={"Men"} /> Men
                  </p>
                  <p className='m-1 tracking-widest'>
                    <input className='w-5' type="checkbox" onChange={toggleCategory} value={"Women"} /> Women
                  </p>
                  <p className='m-1 tracking-widest'>
                    <input className='w-5' type="checkbox" onChange={toggleCategory} value={"Kids"} /> Kids
                  </p>
                  <p className='m-1 tracking-widest'>
                    <input className='w-5' type="checkbox" onChange={toggleCategory} value={"Unisex"} /> Unisex
                  </p>
                </div>
              </div>
              <div className={`pl-5 py-3`}>
                <div className="flex flex-col text-sm md:font-medium text-gray-700 m-1 uppercase tracking-widest">Type</div>
                <div className="flex flex-col text-sm md:font-medium text-gray-700">
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='Headwear' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Headwear"} />
                    <label htmlFor='Headwear'>Headwear</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='Bottomwear' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Bottomwear"} />
                    <label htmlFor='Bottomwear'>Bottomwear</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='Outerwear' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Outerwear"} />
                    <label htmlFor='Outerwear'>Outerwear</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='Topwear' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Topwear"} />
                    <label htmlFor='Topwear'>Topwear</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='Innerwear' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Innerwear"} />
                    <label htmlFor='Innerwear'>Innerwear</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='Footwear' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Footwear"} />
                    <label htmlFor='Footwear'>Footwear</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='Activewear' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Activewear"} />
                    <label htmlFor='Activewear'>Activewear</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='SunGlasses' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Sun Glasses"} />
                    <label htmlFor='SunGlasses'>Sun Glasses</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='Fragrances' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Fragrances"} />
                    <label htmlFor='Fragrances'>Fragrances</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='CabanShirt' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Caban Shirt"} />
                    <label htmlFor='CabanShirt'>Caban Shirt</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='Accessories' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Accessories"} />
                    <label htmlFor='Accessories'>Accessories</label>
                  </span>
                  <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='clothing' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Clothing"} />
                    <label htmlFor='clothing'>Clothing</label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 shadow-md py-3 rounded-md">
            <div className="flex justify-between text-base mx-4">
              <PageTitle title1={"All"} title2={"Collections"} fontSize={'text-[20px]'} />
              <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-200 text-sm px-2'>
                <option value="Relevent">Relevent</option>
                <option value="ByHighPrice">By Low Price </option>
                <option value="ByLowPrice">By High Price</option>
              </select>
            </div>

            <div className="m-4">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                {
                  productsPerPage.length > 0 ?
                    productsPerPage.map((item) => (
                      <Card key={item._id} classes={"gap-x-4 my-5"}
                        image={item.image[0]}
                        title={item.name}
                        price={item.price}
                        to={`/product-details/${item._id}`}
                        saleOnProduct={item.SaleOnProduct}
                        originalPrice={item.OrigionalPrice} />
                    )) : <div className='flex w-full p-4 bg-red-100 rounded-xl'>No products found.....</div>
                }
              </div>

              {/* pagination  */}

              <div className="flex justify-center mt-6">
                <ul className='inline-flex items-center -space-x-px'>
                  {Array.from({ length: Math.ceil(filterProducts.length / itemPerPage) }).map((_, index) => (
                    <li key={index}>
                      <button
                        onClick={() => Paginate(index + 1)}
                        className={`py-2 px-3 mx-1 leading-tight ${currentPage === index + 1 ? 'bg-secondColor text-white' : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'} border border-gray-300`}
                      >
                        {index + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection