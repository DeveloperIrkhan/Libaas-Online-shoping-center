import React from 'react'
import PageTitle from '../Components/Heading/PageTitle'
import { images } from '../assets/Images'
import NewsLetterBox from '../Components/NewsLetterBox/NewsLetterBox'
const About = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <div className='fa-1x md:text-2xl  mt-10 font-Aclonica flex justify-start'>
        <PageTitle title1={"About"} title2={"us"} />
      </div>


      <div className="mt-4 flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-2/4 p-4">
          <img src={images.TshirtBanner} alt="" />
        </div>
        <div className="w-full md:w-2/4 p-4 flex flex-col justify-center text-gray-600">
          <div className="my-3 border-b py-3">
            <b className='text-gray-800'>Our Mission</b>
            <p className='text-gray-600'>Since our inception, we've worked tirelessly to curate a diverse selection</p>
          </div>
          <div className="my-3 border-b py-3">
            <b className='text-gray-800'>Our Vision</b>
            <p className='text-gray-600'>We aim to become the leading platform for premium fashion, offering the best in quality and style.</p>
          </div>
          <div className="my-3 border-b py-3">
            <b className='text-gray-800'>Our Commitment</b>
            <p className='text-gray-600'>We are committed to providing exceptional customer service and ensuring the best online shopping experience.</p>
          </div>
        </div>
      </div>

      <div className='text-xl my-10 font-Aclonica flex justify-start'>
        <PageTitle title1={"Why Choose"} title2={"us"} />
      </div>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px[10-vw]">
        <div className="flex flex-col md:flex-row text-center gap-4">
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
            <b>Quality Assurance:</b>
            <p>Since our inception, we've worked tirelessly to curate a diverse selection</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
            <b>Convenience:</b>
            <p>Since our inception, we've worked tirelessly to curate a diverse selection</p>
          </div>
          <div className="border px-10 md:px-16 py-8 sm:py-20 flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p>Since our inception, we've worked tirelessly to curate a diverse selection</p>
          </div>
        </div>
      </div>

      <div className="flex my-4">
        <NewsLetterBox />
      </div>
    </div>
  )
}

export default About