import React, { useContext, useEffect, useState } from 'react'; 
import { ShopContext } from '../context/ShopContext'; 
import { assets } from '../assets/assets'; 
import { useLocation } from 'react-router-dom'; 

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext); // Access context values
    const [visible, setVisible] = useState(false); // State to manage visibility
    const location = useLocation(); // Get current route location

    useEffect(() => {
        // Show search bar on 'collection' page
        setVisible(location.pathname.includes('collection'));
    }, [location]); // Update visibility on route change

    // Render search bar if conditions are met
    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center'>
            <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-r-full w-3/4 sm:w-3/4 sm:1/2'>
                <input 
                    value={search} 
                    onChange={(e) => setSearch(e.target.value)} 
                    className='flex-1 outline-none bg-inherit text-sm' 
                    type="text" 
                    placeholder='Search' 
                />
                <img className='w-4' src={assets.search_icon} alt="Search icon" /> {/* Search icon */}
            </div>
            <img 
                onClick={() => setShowSearch(false)} 
                className='inline w-3 cursor-pointer' 
                src={assets.cross_icon} 
                alt="Close icon" 
            /> {/* Close icon */}
        </div>
    ) : null; // Return nothing if not visible
}

export default SearchBar; // Export component
