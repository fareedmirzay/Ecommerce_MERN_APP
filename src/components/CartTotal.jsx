import React from 'react';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
    // Pulls the currency symbol, shipping fee, and a function to get the cart’s total item cost from the shared context
    const { currency, deliveryFee, getCartAmount } = useContext(ShopContext);

    return (
        <div className='e-full'>
            <div className='text-2xl'>
                {/* Displays the 'CART TOTALS' heading */}
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>
            <div className='flex flex-col gap-2 mt-2 text-sm'>
                {/* Displays subtotal using the cart’s total item cost */}
                <div className='flex justify-between'>
                    <p>Subtotal</p>
                    <p>{currency}{getCartAmount()}.00</p>
                </div>
                <hr />
                {/* Shows the fixed delivery fee */}
                <div className='flex justify-between'>
                    <p>Shipping Fee</p>
                    <p>{currency} {deliveryFee}.00</p>
                </div>
                <hr />
                {/* Calculates and displays the final total, adding the delivery fee only if there are items in the cart */}
                <div className='flex justify-between'>
                    <b>Total</b>
                    <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + deliveryFee}.00</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;
