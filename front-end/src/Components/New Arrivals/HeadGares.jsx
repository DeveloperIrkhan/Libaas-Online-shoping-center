import React, { useEffect, useState } from 'react'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import NewArrivalsCard from '../Cards/NewArrivalsCard';
import { useShopContext } from '../../Context/Context';

const HeadGares = () => {
    const { products, getProductAsync } = useShopContext();
    const [headgear, setHeadgare] = useState([])
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(headgear.map(() => 0));
    const [direction, setDirection] = useState('');
    const cardsToShow = 4;

   
    
    useEffect(() => {
        getProductAsync();
    }, [getProductAsync]);

    useEffect(() => {
        // Filter and set headgear when products update
        const filteredHeadgear = products.filter(
            item => item.subCategory === "HEADWEAR" && item.NewArrival === true
        );
        setHeadgare(filteredHeadgear);

        // Initialize imageIndex for spinners
        setImageIndex(filteredHeadgear.map(() => 0));
    }, [products]);

    const handleNext = (e) => {
        e.preventDefault();
        if (currentIndex + cardsToShow < headgear.length) {
            setDirection('next');
            setCurrentIndex(currentIndex + 1)
        }
    }
    const handlePrev = (e) => {
        if (currentIndex > 0) {
            setDirection('prev');
            setCurrentIndex(currentIndex - 1)
        }
    }


    const nextPicture = (itemIndex) => {
        setImageIndex((prev) =>
            prev.map((index, i) => (i === itemIndex ? (index + 1) % headgear[itemIndex].productImage.length : index))
        );
    };

    const prevPicture = (itemIndex) => {
        setImageIndex((prev) =>
            prev.map((index, i) => (i === itemIndex ? (index - 1 + headgear[itemIndex].productImage.length) % headgear[itemIndex].productImage.length : index))
        );
    };

    return (
        <section className='px-4 sm:px-[5vw] md:px-[7cw] lg:px-[9vw] '>
            <div className='py2 md:py-6'>
                <div className="row-auto">
                    <div className="text-center">
                        <div className="flex flex-row items-center justify-center text-darkColor mb-0">
                            <span>
                                <GoChevronLeft style={{ cursor: "pointer" }} onClick={handlePrev} className={`${currentIndex === 0 ? "hidden" : ""}`}
                                />
                            </span>
                            <p className="p-3 text-middum text-center wonderland-fonts mt-4 md:mt-10">Our New headGears</p>
                            <span>
                                <GoChevronRight style={{ cursor: "pointer" }} onClick={handleNext} className={`${currentIndex + cardsToShow >= headgear.length ? "hidden" : ""}`}
                                />
                            </span>
                        </div>
                        <p className='text-center text-darkColor mt-0 mb-2 underline cursor-pointer hover:text-yellow-300 transition-colors duration-200 '> View All</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {headgear.slice(currentIndex, currentIndex + cardsToShow).map((item, itemIndex) => (
                            <div key={`${item.name}-${itemIndex}`} className="carousel-item bg-white shadow-sm rounded-lg overflow-hidden relative group">
                                <NewArrivalsCard
                                    to={`product-details/${item._id}`}
                                    image={item.productImage[imageIndex[itemIndex]]}
                                    title={item.name}
                                    classes={"bg-white shadow-sm rounded-lg overflow-hidden"}
                                    description={item.description}
                                />
                                <div className="hidden group-hover:flex justify-between items-center absolute inset-0 transition-opacity duration-500">
                                    <GoChevronLeft
                                        className="text-2xl cursor-pointer absolute left-0 top-[45%] bg-[#D4D2D2] w-7 h-7 text-black"
                                        onClick={() => prevPicture(currentIndex + itemIndex)}
                                    />
                                    <GoChevronRight
                                        className="text-2xl cursor-pointer absolute right-0 top-[45%] bg-[#D4D2D2] w-7 h-7 text-black"
                                        onClick={() => nextPicture(currentIndex + itemIndex)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeadGares