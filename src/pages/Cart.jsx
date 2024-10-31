import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from "../components/CartTotal"

const Cart = () => {
    // Extracting values from the ShopContext for use in the component
    const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

    // Local state to hold formatted cart data
    const [CartData, setCartData] = useState([]);

    // useEffect to update CartData whenever cartItems changes
    useEffect(() => {
        const tempData = []; // Temporary array to hold formatted cart items

        // Looping through cartItems to create a structured array of cart data
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                if (cartItems[items][item]) {
                    // Pushing structured item data into tempData
                    tempData.push({
                        _id: items,
                        size: item,
                        quantity: cartItems[items][item]
                    });
                }
            }
        }
        setCartData(tempData); // Updating the CartData state
        console.log(tempData); // Logging the structured cart data to the console for debugging
    }, [cartItems]); // Dependency array: runs effect when cartItems changes

    return (
        <div className='border-t pt-14'>
            {/* Title Section */}
            <div className='text 2xl mb-3'>
                <Title text1={'YOUR'} text2={'CART'} />
            </div>
            <div>
                {/* Rendering each item in the cart */}
                {
                    CartData.map((item, index) => {
                        // Finding product data for each cart item
                        const productData = products.find((product) => product._id === item._id);

                        return (
                            <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5] sm:grid-cols-[4fr_3fr_0.5fr] items-center gap-4'>
                                <div className='flex items-start gap-6'>
                                    {/* Product image and details */}
                                    <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                                    <div>
                                        <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                        <div className='flex items-center gap-5 mt-2'>
                                            <p>{currency}{productData.price}</p>
                                            <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* Input field for quantity update */}
                                <input
                                    onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                                    className='border max-w-10 sm:max-w-20 px-1 sm:px-2'
                                    type="number"
                                    min={1}
                                    defaultValue={item.quantity} // Set the default value to the current quantity
                                />
                                {/* Delete item icon */}
                                <img onClick={() => updateQuantity(item._id, item.size, 0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />
                            </div>
                        )
                    })
                }
            </div>

            {/* Cart total and checkout button */}
            <div className='flex justify-end my-20'>
                <div className='w-full sm:w-[450px]'>
                    <CartTotal /> {/* Display the total cost of items in the cart */}
                    <div className='w-full text-end'>
                        {/* Checkout button */}
                        <button onClick={() => navigate('/place-order')} className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
