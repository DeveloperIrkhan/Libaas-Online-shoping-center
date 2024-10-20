import React, { useEffect, useState } from 'react'
import { useShopContext } from '../Context/Context'
import Card from '../Components/Cards/Card'

const Perfumes = () => {

    const [perfumes, setPerfumes] = useState([])
    const { products } = useShopContext()

    useEffect(() => {
        let productCopy = products.slice()
        setPerfumes(productCopy.filter(product => product.subCategory === "Perfume"))
    }, [])
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7cw] gl:px=[9vw]">
            <div className="m-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                    {
                        perfumes.length > 0 ?
                            perfumes.map((item) => (
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

export default Perfumes