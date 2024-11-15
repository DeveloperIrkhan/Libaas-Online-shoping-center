import React from 'react'
import { useShopContext } from '../../Context/Context'

const HorizantialCard = ({ item }) => {
    const { currency } = useShopContext();

    return (

        <div
            key={item._id}
            className="p-4 border border-gray-200 rounded-md text-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white shadow-sm hover:shadow-lg transition-shadow"
        >
            {/* Left Section: Product Image and Details */}
            <div className="w-20 h-20 border rounded-md overflow-hidden">
                <img
                    src={item.productImage[0]}
                    className="w-full h-full object-contain"
                    alt={item.name}
                />
            </div>
            <div className="flex items-start gap-4 w-full md:w-auto">
                <div className="flex flex-col">
                    <p className="text-lg font-semibold">{item.name}</p>
                    {item.bestSeller && (
                        <span className="inline-block bg-yellow-300 text-yellow-800 text-xs font-semibold rounded px-2 py-0.5 mt-1">
                            Best Seller
                        </span>
                    )}
                    <p className="text-sm text-gray-500 mt-2">{item.description}</p>
                    <p className="text-sm text-gray-500 mt-1">
                        {item.category} & {item.subCategory}
                    </p>
                </div>
            </div>

            {/* Center Section: Price and Sizes */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center w-full md:w-auto">
                <div className="text-sm text-gray-600">
                    <p className="font-medium">
                        Price:
                        <span className="text-gray-900">{currency}
                            <span className={`${item.discountPrice > 0 ? "line-through text-yellow-400" : ""}`}>{item.originalPrice}</span>
                            {item.discountPrice > 0 ? <span className='mx-2'>{item.discountPrice}</span> : <></>}
                        </span>
                    </p>
                    {item.sizes && item.sizes.length > 0 && (
                        <div className="flex gap-2 mt-2">
                            {item.sizes.map((size) => (
                                <span
                                    key={size}
                                    className="px-2 py- text-xs font-medium border rounded bg-gray-100 text-gray-700">
                                    {size}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Right Section: Status and Actions */}

        </div>
    )
}

export default HorizantialCard
