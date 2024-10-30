import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';

const Product = () => {
    const { productId } = useParams();
    const { products, currency, addToCart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [image, setImage] = useState('');
    const [size, setSize] = useState('');

    const fetchProductData = () => {
        const foundProduct = products.find((item) => item._id === productId);
        if (foundProduct) {
            setProductData(foundProduct);
            setImage(foundProduct.image[0]);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, [productId, products]);

    return productData ? (
        <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
            {/* Product Data */}
            <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
                {/* Product Images */}
                <div className="flex-1 flex flex-col sm:flex-row gap-4">
                    {/* Thumbnails */}
                    <div className="flex sm:flex-col sm:overflow-auto justify-between sm:justify-start sm:w-[15%] w-full gap-4">
                        {productData.image.map((item, index) => (
                            <img
                                onClick={() => setImage(item)}
                                src={item}
                                key={index}
                                className="w-[20%] sm:w-full sm:mb-3 cursor-pointer object-cover"
                                alt=""
                                style={{ maxHeight: '100px' }}
                            />
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="w-full sm:w-[85%]">
                        <img
                            className="w-full h-auto object-cover"
                            src={image}
                            alt=""
                            style={{ maxHeight: '700px' }} 
                        />
                    </div>
                </div>
                {/* ===================== Product Info ===================== */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
                    <div className="flex items-center gap-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                            <img
                                src={assets.star_icon}
                                alt=""
                                className="w-3.5"
                                key={i}
                            />
                        ))}
                        <p className="pl-2">(122)</p>
                    </div>
                    <p className="mt-5 text-3xl font-medium">
                        {currency}
                        {productData.price}
                    </p>
                    <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
                    <div className="flex flex-col gap-4 my-8">
                        <p>SELECT SIZE</p>
                        <div className="flex gap-2">
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)}
                                    className={`border py-2 px-4 bg-gray-100 ${
                                        item === size ? 'border-orange-500' : ''
                                    }`}
                                    key={index}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                        ADD TO CART
                    </button>
                    <hr className="mt-8 sm:w-4/5" />
                    <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
                        <p>100% Original Product</p>
                        <p>Easy return and exchange policy within 7 days</p>
                    </div>
                </div>
            </div>
            {/* ==================== Description & Review section ==================== */}
            <div className="mt-20">
                <div className="flex">
                    <b className="border px-5 py-3 text-sm">DESCRIPTION</b>
                    <p className="border px-5 py-3 text-sm">REVIEWS (122)</p>
                </div>
                <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit."</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                </div>
            </div>
        </div>
    ) : (
        <div className="opacity-0"></div>
    );
};

export default Product;

