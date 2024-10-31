import React from 'react';

const NewsLetterBox = () => {
  
  // Handles the submit event, preventing default form behavior
  const onSubmitHandler = (event) => {
    event.preventDefault();
    // Optionally, add any logic for form submission here, e.g., API call
  }

  return (
    <div className='text-center'>
      {/* Title and Subtitle */}
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now and get ?? off</p>
      <p className='text-gray-400 mt-3'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
      </p>

      {/* Subscription Form */}
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input 
          className='w-full sm:flex-1 outline-none' 
          type="email" 
          placeholder='Enter your Email' 
          required 
        />
        <button 
          className='bg-black text-white text-xs px-10 py-4' 
          type="submit"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default NewsLetterBox;
