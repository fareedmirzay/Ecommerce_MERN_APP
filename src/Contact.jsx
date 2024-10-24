import React from 'react'
import Title from './components/Title';
import { assets } from "./assets/assets"
import NewsLetterBox from "./components/NewsLetterBox"



const Contact = () => {

  return (
    <div>

      <div className=" text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>


      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'> 
        <img className='w-full md:max-w-[480px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>OUR STORE</p>
          <p>600 MAIN ST <br /> Suite 600, Springfild, MA</p>
          <p>Tel: (666) 784-8342 <br /> Email: FareedMirzay@ymail.com </p>
          <p></p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact;
