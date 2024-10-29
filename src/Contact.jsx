import React from 'react';
import Title from './components/Title';
import { assets } from './assets/assets';
import NewsLetterBox from './components/NewsLetterBox';

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-indigo-100 to-white shadow-lg rounded-lg">
      <div className="text-center text-5xl font-extrabold text-indigo-900 border-b-4 border-indigo-500 pb-4 mb-8">
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <img 
          className="w-full h-auto rounded-lg shadow-lg transform transition duration-300 hover:scale-105" 
          src={assets.about_img} 
          alt="Our Store" 
        />

        <div className="flex flex-col justify-start space-y-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-indigo-200">
          <h2 className="text-3xl font-semibold text-indigo-700">OUR STORE</h2>
          <p className="text-gray-700 text-lg">
            600 MAIN ST <br /> Suite 600, Springfield, MA
          </p>
          <p className="text-gray-700 text-lg">
            Tel: <span className="font-semibold">(666) 784-8342</span> <br />
            Email: <a href="mailto:FareedMirzay@ymail.com" className="text-indigo-600 hover:underline">FareedMirzay@ymail.com</a>
          </p>
        </div>
      </div>

      <div className="mt-10">
        <NewsLetterBox />
      </div>
      
      <div className="mt-10 text-center">
        <p className="text-gray-600 text-lg">
          Stay connected with us for the latest updates!
        </p>
        <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition duration-300">
          Follow Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
