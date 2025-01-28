import React, { useEffect } from 'react'
import PageTitle from '../../Components/Heading/PageTitle'
import HorizantialCard from '../../Components/Cards/HorizantialCard'
import { useAdminContext } from '../../oontext/AdminContext';
import Spinner from '../../Components/Spinner/Spinner';
const ListProduct = () => {
    const { products, isLoading } = useAdminContext();
    const removeProduct = (id) => {
        try {
            
        } catch (error) {
            
        }
        finally{

        }
    }
    useEffect(()=>{}, [products])
    return (
        <div>
            {isLoading && <Spinner />}
            <div className="font-Aclonica fa-1x md:text-md my-4">
                <PageTitle title1="list" title2={"products"} />
            </div>
            <div className="flex w-full">
                <div className="w-full">
                    <span className='float-right px-4 font-Quicksand'>Total No of Products Added: {products.length}</span>
                </div>
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



