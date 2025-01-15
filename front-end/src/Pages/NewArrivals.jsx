import React, { useEffect, useState } from 'react'
import { useShopContext } from '../Context/Context'
import Card from '../Components/Cards/Card'

const NewArrivals = () => {


  const [newArrivals, setNewArrivals] = useState([])
  const { products,getProductAsync } = useShopContext()

  useEffect(() => {
    let productCopy = products.slice()
    const lastMonth = new Date();
    lastMonth.setDate(lastMonth.getDate() - 30);
    setNewArrivals(productCopy.filter(product => product.NewArrival === true &&
      new Date(product.date) >= lastMonth))


      console.log("newArrivals",newArrivals)
  }, [products])
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7cw] xl:px-[9vw]">
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
              )) : <div className='flex justify-center items-center w-full p-4'>No products found.....</div>
          }
        </div>
      </div>
    </div>
  )
}

export default NewArrivals