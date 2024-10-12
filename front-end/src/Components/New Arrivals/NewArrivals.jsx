import React, { useState } from 'react'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { New_Arrivals } from '../../DummyData/NewArrivals';
import NewArrivalsCard from '../Cards/NewArrivalsCard';

const NewArrivals = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);
    const cardsToShow = 4;
    const handleNext = (e) => {
        e.preventDefault();
        if (currentIndex + cardsToShow < New_Arrivals.length) {
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

    return (
        <section className='px-4 sm:px-[5vw] md:px-[7cw] gl:px=[9vw] '>
            <div className='py2 md:py-6'>
                <div className="row-auto">
                    <div className="text-center">
                        <div className="flex flex-row items-center justify-center text-darkColor mb-0">
                            <span>
                                <GoChevronLeft style={{ cursor: "pointer" }} onClick={handlePrev} className={`${currentIndex === 0 ? "hidden" : ""}`}
                                />
                            </span>
                            <p className='text-center m-4'> Our New Arrivals</p>
                            <span>
                                <GoChevronRight style={{ cursor: "pointer" }} onClick={handleNext} className={`${currentIndex + cardsToShow >= New_Arrivals.length ? "hidden" : ""}`}
                                />
                            </span>
                        </div>
                        <p className='text-center text-darkColor mt-0 mb-2 underline'> View All</p>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center">
                    <div className="md:columns-4 ">
                        {New_Arrivals.slice(currentIndex, currentIndex + cardsToShow).map((item) => (
                            <div key={item.id} className="carousel-item bordered">
                                <NewArrivalsCard
                                    image={item.images[0]}
                                    title={item.name}
                                    classes={"bg-white shadow-sm rounded-lg overflow-hidden gap-0"}
                                />
                                <div className='buttons bordered'>
                                    <GoChevronLeft className='py-2 px-3 gap-2 rounded-sm cursor-pointer left' />
                                    <GoChevronRight className='py-2 px-3 gap-2 rounded-sm cursor-pointer right' />
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>

    )
}

export default NewArrivals