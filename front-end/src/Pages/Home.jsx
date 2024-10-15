import React, { useEffect, useState } from 'react';
import HomeCard from '../Components/Cards/HomeCard';
import { Collection } from '../DummyData/Collection';
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { images } from '../assets/Images';
import SmallCard from '../Components/Cards/SmallCard';
import { useNavigate } from 'react-router-dom';
import TextEffect from '../Components/TextEffect';
import NewArrivals from '../Components/New Arrivals/NewArrivals';
import KidsShop from '../Components/KidsShop/KidsShop';
import WomenShop from '../Components/WomenShop/WomenShop';
import ExtraSection from '../Components/ExtraSection/ExtraSection';

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('');
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardsToShow, setCardsToShow] = useState()
  const handleNext = (e) => {
    e.preventDefault();
    if (currentIndex + cardsToShow < Collection.length) {
      setDirection('next');
      setCurrentIndex(currentIndex + 1);
      setTimeout(() => setDirection(''), 500); // Reset direction after animation
    }
  };
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(4);
      }
    };
    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateCardsToShow);
    };
  }, [window.innerWidth]);
  const handlePrev = (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
      setDirection('prev');
      setCurrentIndex(currentIndex - 1);
      setTimeout(() => setDirection(''), 500); // Reset direction after animation
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <>
      <section className='py-2 md:py-6'>
        <div className="row-auto">
          <div className="text-center">
            <div className="flex flex-row items-center justify-center text-darkColor">
              <span>
                <GoChevronLeft
                  style={{ cursor: "pointer" }}
                  onClick={handlePrev}
                  className={`${currentIndex === 0 ? "hidden" : ""}`}
                />
              </span>
              <p className='text-center m-4'>Our Top Categories</p>
              <span>
                <GoChevronRight
                  style={{ cursor: "pointer" }}
                  onClick={handleNext}
                  className={`${currentIndex + cardsToShow >= Collection.length ? "hidden" : ""}`}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4">
            {Collection.slice(currentIndex, currentIndex + cardsToShow).map((item) => (
              <div
                key={item._id}
                className={`carousel-item ${direction === 'next' ? 'slide-next' : direction === 'prev' ? 'slide-prev' : ''}`}
              >
                <HomeCard
                  image={item.image}
                  title={item.name}
                  classes={"card max-w-md relative bg-white shadow-lg rounded-sm overflow-hidden gap-2 my-2 md:my-0"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carasole section */}
      <section className="carasole-background w-full">
        <div className="">
          <div className={`text-small ${isFlipped ? 'card-flip' : ''}`}>
            <SmallCard
              description={"PKR 2490"}
              image={images.Striped_T_Shirt_Block}
              text={"Striped T-Shirt Black"}
              className={"img-1"}
            />
            <SmallCard
              description={"PKR 2740"}
              image={images.Striped_Shorts_Grey}
              text={"Striped Shorts"}
              className={"img-2"}
            />
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

      {/* Text effect portion */}
      <section>
        <TextEffect />
      </section>
      <section>
        <NewArrivals />
      </section>
      <section>
        <KidsShop />
      </section>
      <section>
        <WomenShop />
      </section>
      <section>
        <ExtraSection />
      </section>
    </>
  );
};

export default Home;