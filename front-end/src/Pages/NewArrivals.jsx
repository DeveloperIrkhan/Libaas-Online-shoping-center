import React, { useEffect, useState } from 'react'
import { useShopContext } from '../Context/Context'
import Card from '../Components/Cards/Card'

const NewArrivals = () => {


  const [newArrivals, setNewArrivals] = useState([])
  const { products } = useShopContext()

  useEffect(() => {
    let productCopy = products.slice()
    setNewArrivals(productCopy.filter(product => product.NewArrival === true))
  }, [])
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7cw] gl:px=[9vw]">
      <div className="m-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

          {
            newArrivals.length > 0 ?
              newArrivals.map((item) => (
                <Card key={item._id} classes={"gap-x-4 my-5"}
                  image={item.productImage[0]}
                  title={item.name}
                  discountPrice={item.discountPrice}
                  to={`/product-details/${item._id}`}
                  saleOnProduct={item.SaleOnProduct}
                  originalPrice={item.originalPrice} />
              )) : <div className='flex w-full p-4 bg-red-100 rounded-xl'>No products found.....</div>
          }
        </div>
      </div>
    </div>
  )
}

export default NewArrivals