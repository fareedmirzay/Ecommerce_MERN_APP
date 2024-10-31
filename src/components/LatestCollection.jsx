import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    // Accessing products from ShopContext to get the available product data
    const { products } = useContext(ShopContext);

    // Setting up a local state to hold a subset of products (latest products)
    const [latestProducts, setLatestProducts] = useState([]);

    // useEffect runs once on component mount to filter and set the latest products
    useEffect(() => {
        // Only the first 8 products are selected to display as the "latest" collection
        setLatestProducts(products.slice(0, 8));
    }, []); // Dependency array is empty, so this runs only once on mount

    return (
        <div className='my-10'>
            {/* Section title and description */}
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTIONS'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </p>
            </div>

            {/* Product grid */}
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {/* Mapping through latestProducts to render each product as a ProductItem component */}
                {
                    latestProducts.map((item, index) => (
                        <ProductItem 
                            key={index} // Using index as key since product IDs may vary
                            id={item._id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default LatestCollection;
