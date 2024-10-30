import React from 'react'
import { assets } from '../assets/assets';

const Showcase = () => {
  return (
    <div className='flex flex-col sm:flex-row border-gray-400'>
        {/* Showcase Left Side */}

        <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
            <div className='text-[#414141]'>
                <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>OUR LATEST PRODUCTS</h1>
                <div className='flex items-center gap-2' >
                    <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                    <p className='w-8 md:w-11 h-[1px] bg-[#414141]'> </p>

                </div>
                
            </div>

        </div>

        {/* Showcase Right-Side */}

        <img className='w-full sm:w-1/2' src={assets.Showcase_img} alt="" />
    
      
    </div>
  )
}

export default Showcase;
