import React, { useEffect, useState } from 'react'
import { useShopContext } from '../Context/Context'
import Card from '../Components/Cards/Card'
const Footwear = () => {
  const { products } = useShopContext()
  const collection = products.filter(product =>
    product.subCategory === "FOOTWEAR" &&
    (
      product.category === "WOMEN" ||
      product.category === "UNISEX" ||
      product.category === "MEN" ||
      product.category === "KIDS"
    ))
  const [footware, setFootware] = useState([])
  useEffect(() => {
    setFootware(collection)
  }, [products]);
  return (

    <>
      <div className="px-4 sm:px-[5vw] md:px-[7cw] lg:px-[9vw]">
        <div className="m-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

            {
              footware.length > 0 ?
                footware.map((item) => (
                  <Card key={item._id} classes={"gap-x-4 my-5"}
                    image={item.productImage[0]}
                    title={item.name}
                    to={`/product-details/${item._id}`}
                    discountPrice={item.discountPrice}
                    SaleOnProduct={item.SaleOnProduct}
                    originalPrice={item.originalPrice} />
                )) :  <div className='flex justify-center items-center w-full p-4'>No products found.....</div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Footwear