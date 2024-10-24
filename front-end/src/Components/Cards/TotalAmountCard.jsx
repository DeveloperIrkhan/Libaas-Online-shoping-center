import React from 'react'
import { useShopContext } from '../../Context/Context'
import PageTitle from '../Heading/PageTitle'

const TotalAmountCard = () => {
    const { getCartAmount, currency, delivery_Fee, } = useShopContext()
    return (
        <div className='w-full px-5'>
            <div className="fa-1x md:text-1xl my-10 font-Aclonica">
                <PageTitle title1="Total" title2={"Amount"} />
            </div>
            <div className="flex justify-between">
                <p>Sub Total</p>
                <p>{currency}  {getCartAmount()}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <p>Shipping Charges</p>
                <p>{getCartAmount() === 0 ? 0 :  delivery_Fee}.00</p>
            </div>
            <hr />
            <div className="flex justify-between">
                <b>Total</b>
                <b>{getCartAmount() === 0 ? 0 : getCartAmount() + delivery_Fee}.00</b>
            </div>
        </div>
    )
}

export default TotalAmountCard