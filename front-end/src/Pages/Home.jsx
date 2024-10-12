import React, { useEffect, useState } from 'react'
import HomeCard from '../Components/Cards/HomeCard'
import { Collection } from '../DummyData/Collection'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { images } from '../assets/Images';
import SmallCard from '../Components/Cards/SmallCard';
import { useNavigate } from 'react-router-dom';
import TextEffect from '../Components/TextEffect';
import NewArrivals from '../Components/New Arrivals/NewArrivals';
const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const cardsToShow = 3;
  // this fucntion is used for to move next set of cards
  const handleNext = (e) => {
    e.preventDefault();
    if (currentIndex + cardsToShow < Collection.length) {
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
  // this function is for image fliping effect
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <section className='py2 md:py-6'>
        <div className="row-auto">
          <div className="text-center">
            <div className="flex flex-row items-center justify-center text-darkColor">
              <span>
                <GoChevronLeft style={{ cursor: "pointer" }} onClick={handlePrev} className={`${currentIndex === 0 ? "hidden" : ""}`}
                />
              </span>
              <p className='text-center m-4'> Our Top Categories</p>
              <span>
                <GoChevronRight style={{ cursor: "pointer" }} onClick={handleNext} className={`${currentIndex + cardsToShow >= Collection.length ? "hidden" : ""}`}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center carousel-container"
        >
          <div className="md:columns-3">
            {Collection.slice(currentIndex, currentIndex + cardsToShow).map((item) => (
              <div key={item.id} className="carousel-item">
                <HomeCard image={item.image} title={item.name} classes={"card max-w-md relative bg-white shadow-lg rounded-sm overflow-hidden gap-2 my-2 md:my-0"}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* //carasole section */}

      <section className="carasole-background w-full">
        <div className="">
          <div className={`text-small ${isFlipped ? 'card-flip' : ''}`}>
            <SmallCard description={"PKR 2490"} image={images.Striped_T_Shirt_Block} text={"Striped T-Shirt Black"} className={"img-1"} />
            <SmallCard description={"PKR 2740"} image={images.Striped_Shorts_Grey} text={"Striped Shorts"} className={"img-2"} />
          </div>
          <div className="absolute buttons flex gap-2">
            <span onClick={handleFlip} className='bg-gray-200 text-blackColor py-2 px-3 gap-2 rounded-sm cursor-pointer'>
              <GoChevronLeft />
            </span>
            <span onClick={handleFlip} className='bg-gray-200 text-blackColor py-2 px-3 gap-2 rounded-sm cursor-pointer'>
              <GoChevronRight />
            </span>
          </div>
        </div>
      </section>

      {/* this is text effect portion */}
      <section>
        <TextEffect />
      </section>
      <section>
              <NewArrivals/>
      </section>
    </>
  )
}

export default Home