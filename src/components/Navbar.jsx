import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  // State to track the visibility of the mobile menu
  const [visible, setVisible] = useState(false);

  // Accessing context methods for showing search modal and cart item count
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo, links back to the home page */}
      <Link to='/'><img src={assets.logo} className="w-36" alt=""/></Link>

      {/* Desktop navigation links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/collection" className="flex flex-col items-center gap-1">
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* Icons section */}
      <div className="flex items-center gap-6">
        {/* Search icon to open a search modal */}
        <img onClick={() => setShowSearch(true)} src={assets.search_icon} className="w-5 cursor-pointer" alt="" />

        <div className="flex items-center gap-6">
          {/* Profile icon with dropdown menu on hover */}
          <div className="group relative">
            <Link to='/login'><img className="w-5 cursor-pointer" src={assets.profile_icon} alt="" /></Link>
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p className="cursor-pointer hover:text-black">Orders</p>
                <p className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>
          </div>

          {/* Cart icon with badge showing cart item count */}
          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
            {/* Badge showing the number of items in the cart */}
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile menu icon only visible on small screens */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="menu icon"
          />
        </div>
      </div>

      {/* Mobile menu display */}
      {visible && (
        <div className="absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all w-full">
          <div className="flex flex-col text-gray-600">
            {/* Back button to close mobile menu */}
            <div onClick={() => setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer">
              <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="back icon" />
              <p>Back</p>
            </div>

            {/* Mobile navigation links */}
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/">Home</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/collection">Collection</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/about">About</NavLink>
            <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border' to="/contact">Contact</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
