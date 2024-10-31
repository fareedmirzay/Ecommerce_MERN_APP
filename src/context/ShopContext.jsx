import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify"; // Import toast for notifications
import { useNavigate } from "react-router-dom"; // Import navigation hook
import axios from 'axios'; 

export const ShopContext = createContext(); // Create context

const ShopContextProvider = (props) => {
    const currency = '$'; 
    const delivery_fee = 10; 
    const backendUrl = import.meta.env.VITE_BACKEND_URL; 
    const [search, setSearch] = useState(''); // State for search query
    const [showSearch, setShowSearch] = useState(false); // State for search visibility
    const [cartItems, setCartItems] = useState({}); // State for cart items
    const [products, setProducts] = useState([]); // State for product list
    const [token, setToken] = useState(''); // State for user token
    const navigate = useNavigate(); // Navigation function

    // Function to add items to the cart
    const addToCart = async (itemId, size) => {
        if (!size) {
            toast.error('Select Product Size');
            return;
        }

        let cartData = structuredClone(cartItems); // Clone current cart items

        // Update cart data
        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1; // Increment quantity if size exists
            } else {
                cartData[itemId][size] = 1; // Add new size with quantity 1
            }
        } else {
            cartData[itemId] = {}; // Create new item entry
            cartData[itemId][size] = 1; // Set quantity to 1
        }
        setCartItems(cartData); // Update state with new cart data

        // Send add to cart request to backend if token exists
        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } });
            } catch (error) {
                console.log(error); 
                toast.error(error.message);
            }
        }
    }

    // Function to count total items in the cart
    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItems) {
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item]; // Add to total count
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount; 
    }

    // Function to update item quantity in the cart
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems); // Clone current cart items
        cartData[itemId][size] = quantity; // Update quantity

        setCartItems(cartData); // Update state

        // Send update request to backend if token exists
        if (token) {
            try {
                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } });
            } catch (error) {
                console.log(error); 
                toast.error(error.message);
            }
        }
    }

    // Function to calculate total cart amount
    const getCartAmount = () => {
        let totalAmount = 0;
        for (const items in cartItems) {
            let itemInfo = products.find((product) => product._id === items); // Find product info
            for (const item in cartItems[items]) {
                try {
                    if (cartItems[items][item] > 0) {
                        totalAmount += itemInfo.price * cartItems[items][item]; // Calculate total amount
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount; 
    }

    // Function to fetch product data from backend
    const getProductsData = async () => {
        try {
            const response = await axios.get(backendUrl + '/api/product/list'); // Fetch products
            if (response.data.success) {
                setProducts(response.data.products.reverse()); // Set products state
            } else {
                toast.error(response.data.message); 
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message); 
        }
    }

    // Function to fetch user cart data from backend
    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } }); // Fetch cart data
            if (response.data.success) {
                setCartItems(response.data.cartData); // Set cart items state
            }
        } catch (error) {
            console.log(error); 
            toast.error(error.message); 
        }
    }

    useEffect(() => {
        getProductsData(); // Fetch products on mount
    }, []);

    useEffect(() => {
        // Check for token in local storage and fetch user cart data
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
            getUserCart(localStorage.getItem('token')); // Fetch user cart
        }
        if (token) {
            getUserCart(token); // Fetch user cart if token exists
        }
    }, [token]);

    // Context value to be provided to components
    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart, setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children} {/* Render child components */}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider; 