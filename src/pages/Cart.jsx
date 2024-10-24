import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import Product from './Product';
import { assets } from '../assets/assets';
import CartTotal from "../components/CartTotal"

const Cart = () => {

    const {products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

    const [CartData, setCartData] = useState([]);

    useEffect(() =>{


        const tempData = [];
        for(const items in cartItems){
            for(const item in cartItems[items]){
                if (cartItems[items][item])  {
                    tempData.push({
                        _id:items,
                        size:item,
                        quantity:cartItems[items][item]
                    })

                }
            }
        }
        setCartData(tempData)
        console.log(tempData);
    },[cartItems])




  return (
    <div className='border-t pt-14'>
        <div className='text 2xl mb-3'>
            <Title text1={'YOUR'} text2={'CART'} />
        </div>
        <div>
            {
                CartData.map((item,index)=>{
                    const productData = products.find((product)=> product._id === item._id);

                    return (
                        <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5] sm:grid-cols-[4fr_3fr_0.5fr] items-center gap-4' >
                            <div className='flex items-start gap-6'>
                                <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                                <div>
                                    <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
                                    <div className='flex items-center gap-5 mt-2'>
                                        <p>{currency}{productData.price}</p>
                                        <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                                    </div>
                                </div>
                            </div>
                            <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:maz-w-20 px-1 sm:px-2' type="number" min={1} defaultValue={item.quantity} />
                            <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />

                        </div>
                    )
                })
            }
        </div>

        <div className='flex justify-end my-20'>
            <div className='w-full sm:w-[450px]'>
                <CartTotal />
                <div className='w-full text-end'>

                    <button onClick={()=>navigate('/place-order')} className='bg-black text-white tect-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>

                </div>
                
            </div>

        </div>
    </div>
  )
}

export default Cart

{/* <button className='bg-vlack text-white tect-sm my-8 px-8 py-3'>PROCESS TO CHECKOUT</button> */}
// {/* <div className='border-t pt-14' >

// <div className='text 2xl mb-3'>
//     <Title text1={'YOUR'} text2={'CART'} />
// </div>

// <div>
//     {
//         CartData.map((item,index)=>{
//             const productData = products.find((product)=> product._id === item._id);

//             return (
//                 <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5] sm:grid-cols-[4fr_3fr_0.5fr] items-center gap-4' >
//                     <div className='flex items-start gap-6'>
//                         <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
//                         <div>
//                             <p className='text-xs sm:text-lg font-medium'>{productData.name}</p>
//                         </div>

//                     </div>

//                 </div>
//             )
//         })
//     }

// </div>

// </div> */}
// import React, { useContext, useState, useEffect } from 'react'
// import { ShopContext } from '../context/ShopContext'

// const Cart = () => {

//     const {products, currency, cartItems} = useContext(ShopContext);

//     const [cartData, setCartData] = useState([]);

//     useEffect(()=>{

//         const tempData = [];
//         for(const items in cartItems){
//             for(const item in cartItems[items]){
//                 if (cartItems[items][item] > 0) {
//                     tempData.push({
//                         _id: items,
//                         size:item,
//                         quantity:cartItems[items][item]
//                     })
//                 }
//             }
//         }
//         console.log(tempData);
//     },[cartItems])



//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Cart
