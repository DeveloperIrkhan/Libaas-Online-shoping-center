import React, { useEffect, useState } from 'react'
import { useShopContext } from '../../Context/Context'
import Card from '../Cards/Card';
import PageTitle from '../Heading/PageTitle';

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
        <div className='w-full'>
            <div className="mt-12 text-[3vmin] font-Aclonica">
                <PageTitle title1={"Related"} title2={"Products"} fontSize={' text-sm'}/>
            </div>
            <div className="m-4">
                <div className=" grid grid-cols-2 md:grid-cols-4 gap-3">
                    {reletedProduct.length > 0 ? reletedProduct.map((item) => (
                        <Card key={item._id}
                            title={item.name}
                            image={item?.productImage[0]}
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