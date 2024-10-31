import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { ShopContext } from '../context/ShopContext'; 

const Product = () => {
    const { productId } = useParams(); // Get product ID from URL
    const { products, currency, addToCart } = useContext(ShopContext); // Access context values
    const [productData, setProductData] = useState(null); // State for product data
    const [image, setImage] = useState(''); // State for selected image
    const [size, setSize] = useState(''); // State for selected size

    // Fetch product data based on ID
    const fetchProductData = () => {
        const foundProduct = products.find((item) => item._id === productId);
        if (foundProduct) {
            setProductData(foundProduct); // Set product data
            setImage(foundProduct.image[0]); // Set default image
        }
    };

    useEffect(() => {
        fetchProductData(); // Load product data when component mounts or ID changes
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
                                onClick={() => setImage(item)} // Change main image on click
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
                {/* Product Info */}
                <div className="flex-1">
                    <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
                    <p className="mt-5 text-3xl font-medium">
                        {currency}
                        {productData.price} {/* Product price */}
                    </p>
                    <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p> {/* Description */}
                    <div className="flex flex-col gap-4 my-8">
                        <p>SELECT SIZE</p>
                        <div className="flex gap-2">
                            {productData.sizes.map((item, index) => (
                                <button
                                    onClick={() => setSize(item)} // Select size
                                    className={`border py-2 px-4 bg-gray-100 ${
                                        item === size ? 'border-orange-500' : ''
                                    }`}
                                    key={index}
                                >
                                    {item} {/* Size options */}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button onClick={() => addToCart(productData._id, size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
                        ADD TO CART {/* Add product to cart */}
                    </button>
                    <hr className="mt-8 sm:w-4/5" />

                </div>
            </div>
        </div>
    ) : (
        <div className="opacity-0"></div> // Placeholder while loading
    );
};

export default Product; 
