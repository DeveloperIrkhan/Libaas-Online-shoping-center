import React, { useEffect, useState } from 'react'
import { useShopContext } from '../Context/Context'
import Card from '../Components/Cards/Card'
import Spinner from '../Components/Cards/Spinner/Spinner'

const SummerSale = () => {
    const [summerSaleProducts, setSummerSaleProducts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { products, getProductAsync } = useShopContext()

    useEffect(() => {
        getProductAsync()
    }, [getProductAsync])
    useEffect(() => {
        try {
            setIsLoading(true)
            let productCopy = products.slice()
            let summerSaleProducts = productCopy.filter(product => product.SaleOnProduct === true && (
                product.subCategory === "TOPWEAR"
                || product.subCategory === "INNERWEAR"
                || product.subCategory === "BOTTOMWEAR"
                || product.subCategory === "CABAN SHIRT"
                || product.subCategory === "MALE CLOTHS"
                || product.subCategory === "WOMEN CLOTHS"
                || product.subCategory === "CAUSAL SHIRTS"
                || product.subCategory === "T-SHIRTS"
                || product.subCategory === "POLO SHIRTS"
                || product.subCategory === "SHIRTS"
                || product.subCategory === "COTTON JEANS"
                || product.subCategory === "DRESS PANTS"
                || product.subCategory === "SHORTS"
                || product.subCategory === "JACKETS"
                || product.subCategory === "HOODIES"
                || product.subCategory === "SWEATERS"
                || product.subCategory === "SWEAT-SHIRTS"
            ))
            setSummerSaleProducts(summerSaleProducts)
        } catch (error) {

        }
        finally {
            setIsLoading(false)
        }
    }, [products])
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7cw] gl:px=[9vw]">
            {isLoading && <Spinner />}
            <div className="m-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">

                    {
                        summerSaleProducts.length > 0 ?
                            summerSaleProducts.map((item) => (
                                <Card key={item._id} classes={"gap-x-4 my-5"}
                                    image={item.productImage[0]}
                                    title={item.name}
                                    originalPrice={item.originalPrice}
                                    discountPrice={item.discountPrice}
                                    to={`/product-details/${item._id}`}
                                    saleOnProduct={item.SaleOnProduct}
                                />
                            )) : <div className='flex justify-center items-center w-full p-4'>No products found.....</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default SummerSale