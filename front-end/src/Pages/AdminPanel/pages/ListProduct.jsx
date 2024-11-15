import React from 'react'
import PageTitle from './../../../Components/Heading/PageTitle'
import Card from '../../../Components/Cards/Card'
import { useShopContext } from '../../../Context/Context'
import HorizantialCard from '../../../Components/Cards/HorizantialCard'
const ListProduct = () => {
    const { products } = useShopContext();
    console.log(products)
    return (
        <div>
            <div className="font-Aclonica fa-1x md:text-md my-4">
                <PageTitle title1="list" title2={"products"} />
            </div>
            <div className="m-4">
                <div className="flex flex-col gap-3">
                    {
                        products && products.map((item) => (
                            <HorizantialCard key={item._id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ListProduct



