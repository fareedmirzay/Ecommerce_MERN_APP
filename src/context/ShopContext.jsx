// import { createContext, useEffect, useState } from "react";
// import { products } from "../assets/assets";
// import { toast } from "react-toastify";
// import { search } from "../components/SearchBar"

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//     const currency = '$';
//     const delivery_fee = 10;
//     const [search, setSearch] = useState('');
//     const [showSearch, setShowSearch] = useState(true);
//     const [cartItems, setCartItems] = useState({});


//     const addToCart = async (itemId, size) => {
//         if (!size) {
//             toast.error('Please Select Product Size!!!!');
//             return;
//         }
    
//         let CartData = structuredClone(cartItems);
    
//         // Initialize item if it doesn't exist in cart
//         if (!CartData[itemId]) {
//             CartData[itemId] = {};
//         }
    
//         // Increment size count or set it to 1
//         CartData[itemId][size] = (CartData[itemId][size] || 0) + 1;
    
//         setCartItems(CartData);
//     }



//     const getCartCount = () =>{
//         let totalCount = 0;
//         for(const items in cartItems){
//             for(const item in cartItems[items]){
//                 try {
//                     if (cartItems[items][item] > 0) {
//                         totalCount += cartItems[items][item]; 
//                     }
//                 } catch (error) {

//                 }

//             }
//         } return totalCount;
//     }


//     // const addToCart = async (itemId,size) => {

//     //     let CartData = structuredClone(cartItems);

//     //     if (CartData[itemId]) {
//     //         if(CartData[itemId][size]) {
//     //             CartData[itemId][size] += 1;   
//     //         }
//     //         else{
//     //             CartData[itemId][size] = 1;
//     //         }
//     //     }
//     //     else{
//     //         CartData[itemId] = {};
//     //         CartData[itemId][size] = 1;
//     //     }

//     //     setCartItems(CartData);
//     // }



//     useEffect(()=>{
//         console.log(cartItems);
//     },[cartItems])



//     const value = {
//         products,
//         currency,
//         delivery_fee,
//         search,
//         setSearch,
//         showSearch,
//         setShowSearch,
//         cartItems,
//         addToCart,
//         getCartCount
//     };

//     return (
//         <ShopContext.Provider value={value}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;



import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
    const currency = '$';
    const deliveryFee = 10; // Use camelCase for variable names
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Please Select Product Size!!!!');
            return;
        }

        let CartData = structuredClone(cartItems);

        // Initialize item if it doesn't exist in cart
        if (!CartData[itemId]) {
            CartData[itemId] = {};
        }

        // Increment size count or set it to 1
        CartData[itemId][size] = (CartData[itemId][size] || 0) + 1;

        setCartItems(CartData);
    };

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]; 
                    }
                } catch (error) {
                    // Consider logging the error or handling it
                }
            }
        }
        return totalCount;
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const value = {
        products,
        currency,
        deliveryFee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
    };

    return (
        <ShopContext.Provider value={value}>
            {children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
