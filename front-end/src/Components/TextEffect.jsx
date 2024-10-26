import React, { useEffect, useState } from 'react'
import { images } from '../assets/Images';
import { useNavigate } from 'react-router-dom';

const TextEffect = () => {
  const navigate = useNavigate()
  // following code is for images  slider,

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imagesArray = [
    images.Cap,
    images.TankTop,
    images.Bracelet,
    images.SunGlasses,
    images.Striped_Curved_Hem_T_Shirt_2,
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId);
  }, [imagesArray.length]);


    return (
        <div>
            <section className='text-effect-container mt-4'>
                <div className="hidden md:flex">
                    <div className="text-effect flex justify-center items-center">
                        <span className='text-effect-shop'>Shop</span>
                        <span className='text-effect-shop'>Now</span>
                        <div className="image-slider relative">
                            <img src={imagesArray[currentImageIndex]} alt="slider" className="w-full h-auto" />
                            <p className='absolute inset-0 justify-center items-center
               text-white bg-black/50 p-2 
               rounded hidden cursor-pointer'>
                                <span onClick={() => navigate("/Collections")}>
                                    Shop Now
                                </span>
                            </p>
                        </div>
                        <span className='text-effect-newArrivals'>New Arrivals.</span>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TextEffect