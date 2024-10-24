import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHander = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now and get ?? off</p>
        <p className='text-gray-400 mt-3'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
        </p>
        <form onSubmit={onSubmitHander} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter your Email' required />
            <button className='bg-black text-white text-xs px-10 py-4 'type="submit">SUBSCRIBE</button>
        </form>
      
    </div>
  )
}

export default NewsLetterBox
