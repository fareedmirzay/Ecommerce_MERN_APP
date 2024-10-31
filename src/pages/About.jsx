import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 text-gray-900">
        {/* Showcase Section */}
        <div className="relative bg-black text-white text-center py-20">
            <h1 className="text-5xl font-bold tracking-wide mb-4">Who We Are</h1>
            <p className="text-xl font-light max-w-2xl mx-auto">We are committed to delivering high-quality products with a focus on customer satisfaction, innovation, and sustainability.</p>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img className="absolute inset-0 object-cover w-full h-full opacity-30" src={assets.about_img} alt="About Us" />
        </div>

        {/* About Us Section */}
        <div className="flex flex-col md:flex-row py-16 px-8 md:px-24 gap-12 bg-white">
            <div className="flex-1">
                <img className="rounded-lg shadow-2xl w-full object-cover h-full" src={assets.about_img} alt="Our Team" />
            </div>
            <div className="flex-1 flex flex-col justify-center text-left">
                <h2 className="text-4xl font-semibold mb-6 text-gray-800">Our Story</h2>
                <p className="text-lg text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <p className="text-lg text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                <a href="/mission" className="inline-block px-8 py-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300">Learn More</a>
            </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-b from-blue-50 to-blue-100 py-16">
            <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">Why Choose Us</h2>
            <div className="flex flex-col md:flex-row justify-center gap-8 px-8">
                {/* Feature 1 */}
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                    <div className="text-center mb-4">
                        <span className="inline-block p-3 rounded-full bg-blue-600 text-white text-3xl">&#10004;</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Quality Products</h3>
                    <p className="text-gray-600 text-center">We ensure the highest quality standards in every product we offer, backed by years of expertise.</p>
                </div>

                {/* Feature 2 */}
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                    <div className="text-center mb-4">
                        <span className="inline-block p-3 rounded-full bg-blue-600 text-white text-3xl">&#10024;</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Exceptional Service</h3>
                    <p className="text-gray-600 text-center">Our customer service is second to none, ensuring that every interaction is personalized and pleasant.</p>
                </div>

                {/* Feature 3 */}
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
                    <div className="text-center mb-4">
                        <span className="inline-block p-3 rounded-full bg-blue-600 text-white text-3xl">&#128640;</span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Fast Delivery</h3>
                    <p className="text-gray-600 text-center">We prioritize fast and reliable delivery to ensure you get your products when you need them.</p>
                </div>
            </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-blue-900 text-white py-16">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
                <p className="text-lg mb-8">Subscribe to our newsletter and never miss out on our latest products, offers, and exclusive discounts.</p>
                <NewsLetterBox />
            </div>
        </div>
    </div>
  )
}

export default About

