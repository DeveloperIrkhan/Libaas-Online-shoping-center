import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import PageTitle from '../Components/Heading/PageTitle'
import { useShopContext } from '../Context/Context'
import Card from '../Components/Cards/Card'
import Spinner from '../Components/Cards/Spinner/Spinner'
const Collection = () => {
  const { products, search, openSearchBox, getCategory, getSubCategory, isLoading, setIsLoading } = useShopContext()

  const [setshowFilter, setSetshowFilter] = useState(false)
  const [showFilterMenu, setShowFilterMenu] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
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
    setIsLoading(true)
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter(item => item != e.target.value))
    } else {
      setCategory((prev) => [...prev, e.target.value])
    }
    setIsLoading(false)
  }

  const toggleSubCategory = (e) => {
    console.log(subCategory)
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter(item => item != e.target.value))
    } else {
      setSubCategory((prev) => [...prev, e.target.value])
    }
  }
  const applyFilter = () => {
    let productCopy = products.slice();
    if (openSearchBox && search)
      productCopy = productCopy.filter(item => item.name.toUpperCase().includes(search.toUpperCase()))


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
  }, [category, subCategory, search, openSearchBox]);

  useEffect(() => {
    filterItemsByPrice();
  }, [sortType, setSortType,]);


  return (

    <div className="w-full h-full">
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
                <p>
                  <MdOutlineKeyboardArrowDown
                    className={`group-hover:text-secondColor group-hover:cursor-pointer duration-500 text-2xl 
                   ${showFilterMenu ? "rotate-360" : "-rotate-90"} `} />
                </p>
              </div>
              <div className={`bg-white p-3 duration-300 ${showFilterMenu ? "block" : "hidden"}`}>
                <div className={`pl-5 py-3 border bottom-1 m-2 p-3`}>
                  <div className="flex flex-col text-sm md:font-medium text-gray-700 font-bold m-1 uppercase tracking-widest">CATEGORIES</div>
                  <div className="flex flex-col text-sm md:font-medium text-gray-700">
                    {getCategory && getCategory.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className='m-1 tracking-widest cursor-pointer'>
                          <input className='w-5'
                            type="checkbox"
                            id={item.category}
                            onChange={toggleCategory}
                            value={item.category} /> <label> {item.category}</label>
                        </p>
                      )
                    })}

                  </div>
                </div>
                <div className={`pl-5 py-3 border bottom-1 m-2 p-3`}>
                  <div className="flex flex-col text-sm md:font-medium text-gray-700 m-1 font-bold uppercase tracking-widest">Type</div>
                  <div className="flex flex-col text-sm md:font-medium text-gray-700">
                    {getSubCategory && getSubCategory.map((item) => {
                      return (
                        <p
                          key={item._id}
                          className='m-1 tracking-widest cursor-pointer'>
                          <input
                            id={item.subCategory}
                            className='w-5'
                            type="checkbox"
                            onChange={toggleSubCategory}
                            value={item.subCategory} /> <label>{item.subCategory}</label>
                        </p>
                      )
                    })}
                    {/* <p className='m-1 tracking-widest'>
                      <input className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Accessories"} /> Accessories
                    </p> */}
                  </div>
                </div>
              </div>
            </div>




            <div className={`hidden md:block`}>
              <p className="pl-5 hidden text-[20px] font-bold align-baseline
            text-blackColor uppercase tracking-widest md:inline-block">Filters</p>
              <div className={`pl-5 py-3`}>
                <div className="flex flex-col text-sm md:font-medium text-gray-700 m-1 uppercase tracking-widest">CATEGORIES</div>
                <div className="flex flex-col text-sm md:font-medium text-gray-700">
                  {getCategory && getCategory.map((item, index) => {
                    return (
                      <p
                        key={item._id || index}
                        className='m-1 tracking-widest cursor-pointer'>
                        <input
                          className='w-5'
                          type="checkbox"
                          id={item.category}
                          onChange={toggleCategory}
                          value={item.category} /> <label htmlFor={item.category}> {item.category}</label>
                      </p>
                    )
                  })}


                </div>
              </div>
              <div className={`pl-5 py-3`}>
                <div className="flex flex-col text-sm md:font-medium text-gray-700 m-1 uppercase tracking-widest">Type</div>
                <div className="flex flex-col text-sm md:font-medium text-gray-700">
                  {getSubCategory && getSubCategory.map((item) => {
                    return (
                      <p
                        key={item._id}
                        className='m-1 tracking-widest cursor-pointer'>
                        <input
                          id={item.subCategory}
                          className='w-5'
                          type="checkbox"
                          onChange={toggleSubCategory}
                          value={item.subCategory} /> <label>{item.subCategory}</label>
                      </p>
                    )
                  })}
                  {/* <span className='flex my-1 flex-row items-center tracking-widest'>
                    <input id='Headwear' className='w-5' type="checkbox" onChange={toggleSubCategory} value={"Headwear"} />
                    <label htmlFor='Headwear'>Headwear</label>
                  </span> */}

                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-50 shadow-md py-3 rounded-md">
            <div className="flex justify-between text-base mx-4">
              <div className=" font-Aclonica text-[3vmin]">
                <PageTitle title1={"All"} title2={"Collections"} fontSize={'text-[20px]'} />
              </div>
              <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-200 text-sm px-2'>
                <option value="Relevent">Relevent</option>
                <option value="ByHighPrice">By Low Price </option>
                <option value="ByLowPrice">By High Price</option>
              </select>
            </div>

            <div className="m-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
                {isLoading ? (
                  <Spinner />
                ) : productsPerPage.length > 0 ? (
                  productsPerPage.map((item, index) => (
                    <Card
                      key={item._id || index}
                      classes={"gap-x-4 my-5"}
                      image={item.productImage[0]}
                      title={item.name}
                      originalPrice={item.originalPrice}
                      discountPrice={item.discountPrice}
                      to={`/product-details/${item._id}`}
                      saleOnProduct={item.SaleOnProduct}
                    />
                  ))
                ) : (
                  <p>No products found.</p>
                )}
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