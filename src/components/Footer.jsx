import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="my-10 mt-40 text-sm">
      {/* Main footer content: split into text and contact sections */}
      <div className='flex flex-col sm:flex-row justify-between gap-14'>
        
        {/* Logo and descriptive text */}
        <div className='flex-1'>
          <img src={assets.logo} className='mb-5 w-32' alt="" />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Contact information, displayed to the right on larger screens */}
        <div className='flex-1 text-right'>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-413-784-8342</li>
            <li>Fareedmirzay@ymail.com</li>
          </ul>
        </div>
      </div>

      {/* Copyright section, centered and styled for separation */}
      <div className='mt-10'>
        <hr /> {/* Divider line */}
        <p className='my-5 text-sm text-center'>Copyright 2024@ AFG-STORE.com - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
