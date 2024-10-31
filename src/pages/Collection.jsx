// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import ProductItem from '../components/ProductItem';

// const Collection = () => {
//     // Extracting values from the ShopContext for use in the component
//     const { products, search, showSearch } = useContext(ShopContext);
    
//     // Local state to manage filter visibility, filtered products, selected categories, and sort type
//     const [showFilter, setShowFilter] = useState(false);
//     const [filterProducts, setFilterProducts] = useState([]);
//     const [category, setCategory] = useState([]);
//     const [sortType, setSortType] = useState('relevant');

//     // Function to toggle the selected category
//     const toggleCategory = (e) => {
//         if (category.includes(e.target.value)) {
//             // Remove category if it's already selected
//             setCategory(prev => prev.filter(item => item !== e.target.value));
//         } else {
//             // Add category if it's not selected
//             setCategory(prev => [...prev, e.target.value]);
//         }
//     };

//     // Function to apply filters based on search and selected categories
//     const applyFilter = () => {
//         let productsCopy = products.slice(); // Create a copy of the products array

//         // Filter products by search term if search is active
//         if (showSearch && search) {
//             productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
//         }

//         // Filter products by selected categories
//         if (category.length > 0) {
//             productsCopy = productsCopy.filter(item => category.includes(item.category));
//         }

//         setFilterProducts(productsCopy); // Update the state with filtered products
//     };

//     // Function to sort the filtered products based on selected sort type
//     const sortProduct = () => {
//         let fpCopy = filterProducts.slice(); // Create a copy of the filtered products
//         switch (sortType) {
//             case 'low-high':
//                 setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price))); // Sort from low to high price
//                 break;
//             case 'high-low':
//                 setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price))); // Sort from high to low price
//                 break;
//             default:
//                 applyFilter(); // Apply filter if no sort type is selected
//                 break;
//         }
//     };

//     // useEffect to apply filters whenever category, search, or showSearch changes
//     useEffect(() => {
//         applyFilter();
//     }, [category, search, showSearch]);

//     // useEffect to sort products whenever sortType changes
//     useEffect(() => {
//         sortProduct();
//     }, [sortType]);

//     return (
//         <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
//             {/* Filter Options */}
//             <div className='min-w-60'>
//                 <p className='my-2 text-lg flex items-center cursor-pointer gap-2' onClick={() => setShowFilter(!showFilter)}>
//                     FILTERS
//                     <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Dropdown Icon" />
//                 </p>

//                 {/* Category Filter */}
//                 <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
//                     <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//                     <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//                         {/* Checkboxes for category selection */}
//                         <p className='flex gap-2'>
//                             <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
//                         </p>
//                         <p className='flex gap-2'>
//                             <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} /> Women
//                         </p>
//                         <p className='flex gap-2'>
//                             <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
//                         </p>
//                     </div>
//                 </div>
//             </div>

//             {/* Right-Side: Displaying products */}
//             <div className='flex-1'>
//                 <div className='flex justify-between text-base sm:text-2xl mb-4'>
//                     {/* Product Sort Dropdown */}
//                     <select onChange={(e) => setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
//                         <option value="low-high">Sort by: low to high</option>
//                         <option value="high-low">Sort by: high to low</option>
//                     </select>
//                 </div>

//                 {/* Mapping and displaying filtered products */}
//                 <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6'>
//                     {
//                         filterProducts.map((item, index) => (
//                             <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Collection;



import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import ProductItem from '../components/ProductItem';

const Collection = () => {
    const { products, search, showSearch } = useContext(ShopContext);

    const [showFilter, setShowFilter] = useState(false);
    const [filterProducts, setFilterProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [sortType, setSortType] = useState('relevant');

    const toggleCategory = (selectedCategory) => {
        setCategory((prev) =>
            prev.includes(selectedCategory)
                ? prev.filter((cat) => cat !== selectedCategory)
                : [...prev, selectedCategory]
        );
    };

    const applyFilter = () => {
        let filtered = [...products];

        if (showSearch && search) {
            filtered = filtered.filter((item) =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category.length > 0) {
            filtered = filtered.filter((item) => category.includes(item.category));
        }

        setFilterProducts(filtered);
    };

    const sortProduct = () => {
        let sorted = [...filterProducts];
        if (sortType === 'low-high') {
            sorted.sort((a, b) => a.price - b.price);
        } else if (sortType === 'high-low') {
            sorted.sort((a, b) => b.price - a.price);
        }
        setFilterProducts(sorted);
    };

    useEffect(() => {
        applyFilter();
    }, [category, search, showSearch]);

    useEffect(() => {
        sortProduct();
    }, [sortType]);

    return (
        <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t">
            {/* Filter Panel */}
            <div className="relative">
                <button
                    className="text-lg font-bold py-2 px-4 bg-indigo-500 text-white rounded-full hover:bg-indigo-600"
                    onClick={() => setShowFilter(!showFilter)}
                >
                    Toggle Filters
                </button>
                <div
                    className={`${
                        showFilter ? 'block' : 'hidden'
                    } absolute top-12 left-0 w-64 bg-white p-6 rounded shadow-lg z-10`}
                >
                    <h3 className="text-xl font-semibold mb-4">Categories</h3>
                    <div className="flex flex-wrap gap-2">
                        {['Men', 'Women', 'Kids'].map((cat) => (
                            <button
                                key={cat}
                                className={`px-4 py-2 rounded-full border ${
                                    category.includes(cat)
                                        ? 'bg-indigo-500 text-white'
                                        : 'bg-gray-100 text-gray-800'
                                }`}
                                onClick={() => toggleCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sorting Options */}
            <div className="flex-1">
                <div className="flex justify-between mb-4">
                    <div className="flex gap-4">
                        <button
                            className={`px-3 py-1 text-sm font-medium rounded ${
                                sortType === 'low-high'
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-200'
                            }`}
                            onClick={() => setSortType('low-high')}
                        >
                            Price: Low to High
                        </button>
                        <button
                            className={`px-3 py-1 text-sm font-medium rounded ${
                                sortType === 'high-low'
                                    ? 'bg-indigo-500 text-white'
                                    : 'bg-gray-200'
                            }`}
                            onClick={() => setSortType('high-low')}
                        >
                            Price: High to Low
                        </button>
                    </div>
                </div>

                {/* Displaying Filtered Products */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
                    {filterProducts.map((item, index) => (
                        <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
