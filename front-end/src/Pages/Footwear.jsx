import React, { useEffect, useState } from 'react'
import { useShopContext } from '../Context/Context'
import Card from '../Components/Cards/Card'
const Footwear = () => {
  const { products } = useShopContext()
  const collection = products.filter(product =>
    product.subCategory === "Footwear" &&
    (
      product.category === "Women" ||
      product.category === "Unisex" ||
      product.category === "Men" ||
      product.category === "Kids"
    ))
  const [footware, setFootware] = useState([])
  useEffect(() => {
    setFootware(collection)
  }, []);
  return (

    <>
      <div className="px-4 sm:px-[5vw] md:px-[7cw] gl:px=[9vw]">
        <div className="m-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

            {
              footware.length > 0 ?
                footware.map((item) => (
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
        </div>
      </div>
    </>
  )
}

export default Footwear