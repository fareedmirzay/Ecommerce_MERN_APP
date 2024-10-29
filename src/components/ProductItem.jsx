import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({id,image,name,price}) => {

    const {currency} = useContext(ShopContext);

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>

        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />

        </div>
        <p className='pt-3 pd-1 text-sm'>{name}</p>
        <p className='text-sm fon' >{currency}{price}</p>
      
    </Link>
  )
}

export default ProductItem

