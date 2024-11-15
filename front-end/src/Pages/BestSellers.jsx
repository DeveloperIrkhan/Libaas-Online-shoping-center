import React, { useEffect, useState } from 'react'
import { useShopContext } from '../Context/Context'
import Card from '../Components/Cards/Card'

const BestSellers = () => {
  const [bestSellers, setBestSellers] = useState([])
  const { products } = useShopContext()

  useEffect(() => {
    let productCopy = products.slice()
    setBestSellers(productCopy.filter(product => product.NewArrival === true))
  }, [])
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7cw] lg:px-[9vw]">
      <div className="m-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

          {
            bestSellers.length > 0 ?
              bestSellers.map((item) => (
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
  )
}

export default BestSellers