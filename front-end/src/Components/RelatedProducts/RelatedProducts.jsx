import React, { useEffect, useState } from 'react'
import { useShopContext } from '../../Context/Context'
import Card from '../Cards/Card';

const RelatedProducts = ({ category, subCategory }) => {

    const [reletedProduct, setReletedProduct] = useState([])
    const { products } = useShopContext();
    useEffect(() => {
        if (products.length > 0) {
            let relatedProductCopy = products.slice();
            let relatedProduct = relatedProductCopy.filter((product) => product.category === category && product.subCategory === subCategory)
            setReletedProduct(relatedProduct.slice(0, 5))
        }

    }, [products, category, subCategory])



    return (
        <div>
            <div className="mt-12">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Related Products</h2>
            </div>
            <div className="m-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {reletedProduct.length > 0 ? reletedProduct.map((item) => (
                        <Card key={item._id}
                            title={item.name}
                            image={item?.image[0]}
                            price={item.price}
                            to={`/product-details/${item._id}`}
                            saleOnProduct={item.SaleOnProduct}
                            originalPrice={item.OrigionalPrice} />
                    )) : <>No related products found</>}

                </div>
            </div>
        </div>
    )
}

export default RelatedProducts