import React, { useEffect, useState } from 'react'
import { useShopContext } from '../Context/Context'
import Card from '../Components/Cards/Card'
import Spinner from '../Components/Cards/Spinner/Spinner'

const Clothing = () => {
  const [clothing, setClothing] = useState([])
  const { products } = useShopContext()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchClothing = () => {
      try {
        setIsLoading(true)
        const productCopy = products.slice()
        const filteredProducts = productCopy.filter(product => product.category === "CLOTHING")
        setClothing(filteredProducts)
      } catch (error) {
        console.error("Error fetching clothing products:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchClothing()
  }, [products])

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7cw] gl:px=[9vw]">
      <div className="m-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {isLoading ? (
            <Spinner />
          ) : clothing.length === 0 ? (
            <div className='flex justify-center items-center w-full p-4'>No products found.....</div>
          ) : (
            clothing.map(item => (
              <Card
                key={item._id}
                classes="gap-x-4 my-5"
                image={item.productImage[0]}
                title={item.name}
                discountPrice={item.discountPrice}
                to={`/product-details/${item._id}`}
                saleOnProduct={item.SaleOnProduct}
                originalPrice={item.originalPrice}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default Clothing
