import React, { useEffect, useState } from 'react'
import { useShopContext } from '../Context/Context'
import { FaFaceSmile } from "react-icons/fa6";
import Card from '../Components/Cards/Card'

const Products = () => {
    const { selectedProduct, products } = useShopContext()
    const [selectedItems, setSelectedItems] = useState([])

    // useEffect(() => {
    //     let productCopy = products.slice()
    //     setSelectedItems(productCopy.filter(product => product.Category === selectedProduct.toUpperCase() || product.subCategory === selectedProduct.toUpperCase()))
    //     console.log(`selected Items ${selectedProduct}`, selectedItems)
    // }, [products, selectedProduct])

    // useEffect(() => {
    //     console.log("selectedProduct", selectedProduct)
    // }, [selectedItems])

    useEffect(() => {
        let productCopy = products.slice();
        setSelectedItems(
            productCopy.filter(
                (product) =>
                    product.category === selectedProduct.toUpperCase() ||
                    product.subCategory === selectedProduct.toUpperCase()
            )
        );
    }, [selectedProduct]);

    useEffect(() => {
        // console.log("selected Items", selectedItems); // Logs when `selectedItems` is updated
    }, [selectedItems, setSelectedItems]);

    useEffect(() => {
        // console.log("selectedProduct", selectedProduct); // Logs when `selectedProduct` is updated
    }, [selectedProduct]);


    return (
        <div className="flex w-full justify-between py-3 rounded-md">
            <div className="px-4 sm:px-[5vw] md:px-[7cw] lg:px-[9vw]">
                <div className="m-4">
                    {selectedItems.length != 0 ?
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-3">
                                {selectedItems.map((product, index) =>
                                (
                                    <div key={product._id || index}>
                                        <Card
                                            key={product._id || index}
                                            classes={"gap-x-4 my-5"}
                                            image={product.productImage[0]}
                                            title={product.name}
                                            originalPrice={product.originalPrice}
                                            discountPrice={product.discountPrice}
                                            to={`/product-details/${product._id}`}
                                            saleOnProduct={product.SaleOnProduct}
                                        />
                                    </div>
                                )
                                )}
                            </div>
                        </> :
                        // 
                        <div className='h-screen flex-row justify-center w-full'>
                            <p className='flex justify-center items-center gap-4 font-Aclonica font-bold text-2xl'>These Items are coming Soon <FaFaceSmile className='text-yellow-400' /></p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Products