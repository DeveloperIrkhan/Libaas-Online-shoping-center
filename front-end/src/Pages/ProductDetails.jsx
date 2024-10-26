import React, { useEffect, useState } from 'react'
import { PiTShirtThin } from "react-icons/pi";
import { MdOutlineChangeCircle } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { TfiRulerAlt2 } from "react-icons/tfi";
import { LiaRulerVerticalSolid } from "react-icons/lia";
import { useParams } from 'react-router-dom'
import { useShopContext } from '../Context/Context';
import { FaRegClock } from "react-icons/fa";
import CustomBtn from '../Components/CustomBtn';
import AccordionBullets from '../Components/Cards/AccordionBullets';
import Accordion from '../Components/Cards/Accordion';
import { IoChevronDown } from 'react-icons/io5';
import { images } from '../assets/Images';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import Spinner from '../Components/Cards/Spinner/Spinner';
import MeasurementGuide from '../Components/Modals/MeasurementGuide';
const ProductDetails = () => {
    const [product, setProduct] = useState(null);
    const [productImage, setProductimage] = useState(null);
    const [productSize, setProductSize] = useState("");
    const { _id } = useParams();
    const { products, currency, IsModelOpen, setIsModelOpen, addToCart } = useShopContext();
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    const fetchProductById = async () => {
        products.map((item) => {
            if (item._id.toString() === _id) {
                setProductimage(item.image[0])
                setProduct(item)
                return null
            }
        })
    }
    useEffect(() => {
        fetchProductById();
    }, [_id, products])

    return (
        <>
            {product ? (
                <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] mt-3">
                    <MeasurementGuide />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 order-2 md:order-1">
                        {/* Images Section */}
                        <div className="w-full flex items-center justify-center">
                            <div className="flex justify-center flex-col md:flex-row gap-4">
                                {/* Thumbnails (Small Images) */}
                                <div className="flex sm:flex-col sm:w-1/3 w-full gap-2 sm:gap-4 order-2 md:order-1">
                                    {product.image.map((item, index) => (
                                        <img
                                            key={index}
                                            src={item}
                                            alt="product image"
                                            className="cursor-pointer w-1/4 sm:w-full h-auto"
                                            onClick={() => setProductimage(item)}
                                        />
                                    ))}
                                </div>
                                {/* Large Image */}
                                <div className="flex justify-center rounded-lg order-1 md:order-2">
                                    <img className="w-full max-w-[600px] h-auto" src={productImage} alt="Selected Product Image" />
                                </div>
                            </div>
                        </div>

                        {/* Product Details Section */}
                        <div className="flex flex-col mt-3 md:mt-10 order-1 md:order-2">
                            <h1 className="text-xl md:text-2xl font-semibold text-black mb-2">
                                {product.name}
                            </h1>

                            <div className="flex items-center mb-4">
                                <p className="text-lg font-semibold text-gray-600 mr-2">
                                    {currency} {product.price}
                                </p>
                                <p className="text-lg text-gray-600 line-through">
                                    {product.OrigionalPrice}
                                </p>
                            </div>

                            <p className="text-gray-700 mb-4">
                                {product.description}
                            </p>

                            <div className="flex  items-center mb-4">
                                {product.sizes && <>
                                    <span className="font-medium text-gray-800">Size: </span>
                                    <div className="flex space-x-2 ml-4">
                                        {product.sizes.map((size, index) => (
                                            <button onClick={() => setProductSize(size)} key={index}
                                                className={`px-4 py-2 border border-gray-400 rounded duration-300 ${size === productSize ? "bg-blackColor text-white" : ""}`}>
                                                {size}
                                            </button>
                                        ))}
                                    </div></>}

                            </div>
                            <div className="inline-flex justify-between items-center">
                                {product.InStock &&
                                    <p className="text-black text-sm my-3 flex flex-row items-center gap-2">
                                        <FaRegClock /> In Stock
                                    </p>
                                }
                                <p onClick={() => { setIsModelOpen(!IsModelOpen) }}
                                    className='text-black text-sm my-3 flex flex-row items-center gap-2 py-1 hover:border-yellow-400 hover:text-yellow-400 cursor-pointer'><LiaRulerVerticalSolid /> size guide</p>
                            </div>
                            <CustomBtn className={"btn-dark active:bg-orange-500"}
                                onClickFun={() => { addToCart(product._id, productSize) }} text={"Add To Cart"} />
                            <div className="flex flex-col  gap-4 mt-4 py-3">
                                <AccordionBullets
                                    Icon={PiTShirtThin}
                                    Name={"Description"}
                                    content=
                                    {[
                                        { boldText: "Premium Quality Fabric: ", regularText: "Made from 100% cotton, our Cotton oxford shirt is breathable and soft, ensuring all-day comfort." },
                                        { boldText: "Classic Design: ", regularText: " Featuring a button-down collar, this oxford shirt offers a sophisticated look suitable for both formal and casual outings." },
                                        { boldText: "Versatile Colors: ", regularText: "Available in wide range of colors, specially the neutral tones to easily pair with any outfit." },
                                        { boldText: "Tailored Fit:", regularText: "Designed to provide a flattering fit without compromising on comfort, available in a range of sizes to suit every body type." },
                                        { boldText: "Durable Construction:", regularText: "Perfect stitching and high-quality buttons ensure durability, making this oxford shirt a staple in your wardrobe for years to come." },
                                    ]} />
                                <Accordion className=""
                                    Icon={MdOutlineChangeCircle}
                                    Name={"Return & Exchange"}
                                    content="Exchanges with 15 days for unworn items with tags. Returns for damaged items within 7 days. Fees apply." />
                                <AccordionBullets
                                    Icon={FaShippingFast}
                                    Name={"Shipping"}
                                    content=
                                    {[
                                        { boldText: "", regularText: "Flat shipping fee of Rs. 200 on orders below Rs. 2500." },
                                        { boldText: "", regularText: "Orders are typically delivered within 1-7 business days. Delivery times vary by location." },
                                        { boldText: "", regularText: "Free shipping on orders above Rs. 2499" },
                                    ]} />

                                <>
                                    <div onClick={toggleAccordion}
                                        className={`relative border-b-2 py-1 flex items-center cursor-pointer`}>
                                        <TfiRulerAlt2 />
                                        <p className='ml-3 text-sm font-semibold'>Measurements</p>

                                        <span className={`absolute right-0 transform duration-500 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                                            <IoChevronDown />
                                        </span>
                                    </div>
                                    <div
                                        className={`transition-all duration-500  w-full ${isOpen ? "translate-y-100" : "hidden"}`}>
                                        <img className='' src={images.Measurement} alt="" />
                                    </div >
                                </>

                            </div>
                        </div>
                    </div>
                    <RelatedProducts category={product.category} subCategory={product.subCategory} />
                    {/* Product Reviews Section */}
                    <div className="mt-12">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Reviews</h2>
                    </div>

                </div>
            ) : (
                <><Spinner /></>
            )}
        </>
    );
}

export default ProductDetails