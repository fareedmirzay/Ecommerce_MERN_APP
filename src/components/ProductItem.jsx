import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

// Functional component to display individual product items
const ProductItem = ({ id, image, name, price }) => {
  // Accessing the currency from ShopContext
  const { currency } = useContext(ShopContext);

  return (
    // Link component to navigate to the product details page using the product ID
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden'>
        {/* Displaying the product image with a hover effect */}
        <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      {/* Displaying the product price with the selected currency */}
      <p className='text-sm'>{currency}{price}</p>
    </Link>
  );
}

export default ProductItem;
