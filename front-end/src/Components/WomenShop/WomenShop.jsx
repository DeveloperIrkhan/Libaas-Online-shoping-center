import React, { useEffect, useState } from 'react'
import WomenShopCard from '../Cards/WomenShopCard'
import { useShopContext } from '../../Context/Context'
import { NavLink } from 'react-router-dom'
const WomenShop = () => {
  const { products, setSelectedProduct } = useShopContext()
  const collection = products.filter(product => product.NewArrival === true && (product.category === "WOMEN" || product.category === "Unisex"))
  const [WomenCollection, setWomenCollection] = useState([])
  useEffect(() => {
    setWomenCollection(collection.slice(0, 8))
  }, [products]);
  document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.scroll-item');
    const triggerOffset = window.innerHeight / 2 * 4; // Adjust the trigger point
    sections.forEach(section => {
      const imageContent = section.querySelector('.image-content');
      const sectionTop = section.getBoundingClientRect().top;
      if (imageContent) {
        if (sectionTop < triggerOffset) {
          imageContent.classList.add('opacity-100');
          imageContent.classList.remove('opacity-0');
        } else {
          imageContent.classList.add('opacity-0');
          imageContent.classList.remove('opacity-100');
        }
      }
    });
  });

  return (
    <div>
      <div className="scroll-item text-2xl text-blackColor text-center my-4 md:my-10">Women Shop</div>
      {/* <div className="relative h-full md:h-[800px] md:overflow-scroll py-20 md:py-52 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
          <div className="text-center p-3 md:p-16 xl:p-44">
            <div className="text-content
            scroll-auto fa-[18px] font-bold leading-[23px]  align-baseline
             text-blackColor tracking-extra-spacing not-italic uppercase text-center indent-0">
              Elegant Eastern Attire Emporium

            </div>
            <div className="leading-[23px] font-normal uppercase tracking-[2.5px] align-baseline text-[#7b7878] my-5">
              Step into a world of timeless elegance at our Elegant Eastern Attire Emporium,
              where every piece tells a story of heritage and style. Embrace the richness of
              Eastern culture with our exquisite collection of women's wear, carefully crafted
              to blend tradition with contemporary flair.
            </div>
          </div>
          <div className="image-content hidden md:flex women-collection justify-center items-center">
            <img className='h-[90vmin] w-[70vmin]' src={images.WomenCollection1} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">

          <div className="text-center p-3 md:p-16 xl:p-44">
            <div className="text-content
            scroll-auto fa-[18px] font-bold leading-[23px]  align-baseline
             text-blackColor tracking-extra-spacing not-italic uppercase text-center indent-0">
              Where Every Tee Tells a Tale!
            </div>

            <div className="leading-[23px] font-normal uppercase tracking-[2.5px] align-baseline text-[#7b7878] my-5">
              Discover a range of tees that cater to every mood and personality,
              from playful graphics that make a statement to classic cuts that exude effortless elegance.
              Whether you're lounging at home or out and about, our t-shirts are versatile companions for any occasion.
            </div>
          </div>
          <div className="image-content hidden md:flex women-collection justify-center items-center">
            <img className='h-[90vmin] w-[70vmin]' src={images.WomenCollection2} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">

          <div className="text-center p-3 md:p-16 xl:p-44">
            <div className="text-content
            scroll-auto fa-[18px] font-bold leading-[23px]  align-baseline
             text-blackColor tracking-extra-spacing not-italic uppercase text-center indent-0">
              Women's bottom wear just got a bold makeover.
            </div>
            <div className="leading-[23px] font-normal uppercase tracking-[2.5px] align-baseline text-[#7b7878] my-5">
              Welcome to our Women Bottoms Collection, your one-stop destination for women's cotton pants
              and trousers designed for both style and comfort. Explore our range of cozy bottoms
              that are perfect for everyday wear, whether you're lounging at home or stepping out for a casual outing.
            </div>
          </div>
          <div className="image-content hidden md:flex women-collection justify-center items-center">
            <img className='h-[90vmin] w-[70vmin]' src={images.WomenCollection3} alt="" />
          </div>
        </div>
      </div> */}


      <div className="px-4 sm:px-[5vw] md:px-[7cw] lg:px=[9vw] py-4">
        <div className='py2 md:py-6'>
          <div className="flex justify-center ">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4" >
              {WomenCollection.map((item, index) => (
                <div key={index} className="">
                  <WomenShopCard classes={"gap-x-4 my-5"}
                    to={`product-details/${item._id}`}
                    image={item.productImage[0]}
                    onmouseEnter={item.productImage[1]}
                    onmouseOut={item.productImage[0]}
                    title={item.name}
                    discountPrice={item.discountPrice}
                    originalPrice={item.originalPrice} />
                </div>))}
            </div>
          </div>
          <div className="row text-center my-5">
            <NavLink onClick={(e) => setSelectedProduct("WOMEN")} to={"/products"} className={"btn-dark p-2 rounded-lg"}>View All</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WomenShop