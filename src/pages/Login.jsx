import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
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

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 p-6 rounded-lg shadow-lg'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='font-serif text-4xl text-white'>{currentState}</p>
        <hr className='border-none h-[2px] w-8 bg-white' />
      </div>
      {currentState === 'Login' ? '' : 
        <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white transition duration-200' placeholder='Name' required />
      }
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white transition duration-200' placeholder='Email' required />
      <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-white transition duration-200' placeholder='Password' required />
      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='text-white cursor-pointer hover:underline'>Forgot your password?</p>
        {currentState === 'Login' 
          ? <p onClick={() => setCurrentState('Sign Up')} className='text-white cursor-pointer hover:underline'>Create account</p>
          : <p onClick={() => setCurrentState('Login')} className='text-white cursor-pointer hover:underline'>Login Here</p>
        }
      </div>
      <button className='bg-white text-black font-semibold px-8 py-2 mt-4 rounded-md shadow-md hover:bg-gray-300 transition duration-200'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  );
}

export default Login;
