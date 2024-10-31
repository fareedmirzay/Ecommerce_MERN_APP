import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext'; 
import axios from 'axios'; 
import { toast } from 'react-toastify'; 

const Login = () => {
  // State to track whether the user is on the Login or Sign Up form
  const [currentState, setCurrentState] = useState('Login');

  // Destructuring values from ShopContext
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  // Local state for user input
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const onSubmitHandler = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      // Check if the user is signing up or logging in
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error); 
      toast.error(error.message); 
    }
  };

  // Effect to navigate to the homepage if a token exists
  useEffect(() => {
    if (token) {
      navigate('/'); 
    }
  }, [token, navigate]); 

  return (
    <form 
      onSubmit={onSubmitHandler} 
      className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 p-6 rounded-lg shadow-lg'
    >
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='font-serif text-4xl text-white'>{currentState}</p>
        <hr className='border-none h-[2px] w-8 bg-white' />
      </div>
      
      {/* Render name input only if the current state is "Sign Up" */}
      {currentState === 'Login' ? null : 
        <input 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          type="text" 
          className='w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white transition duration-200' 
          placeholder='Name' 
          required 
        />
      }

      {/* Email input field */}
      <input 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        type="email" 
        className='w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white transition duration-200' 
        placeholder='Email' 
        required 
      />

      {/* Password input field */}
      <input 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        type="password" 
        className='w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white transition duration-200' 
        placeholder='Password' 
        required 
      />

      {/* Links for password recovery and switching between login/signup */}
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='text-white cursor-pointer hover:underline'>Forgot your password?</p>
        <p 
          onClick={() => setCurrentState(currentState === 'Login' ? 'Sign Up' : 'Login')} 
          className='text-white cursor-pointer hover:underline'
        >
          {currentState === 'Login' ? 'Create account' : 'Login Here'}
        </p>
      </div>

      {/* Submit button with dynamic text based on current state */}
      <button className='bg-white text-black font-semibold px-8 py-2 mt-4 rounded-md shadow-md hover:bg-gray-300 transition duration-200'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}

export default Login; 
