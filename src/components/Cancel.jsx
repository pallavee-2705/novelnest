import React from 'react'
import {MdCancel} from "react-icons/md"

const Cancel = () => {
  return (
    <div className='w-full max-h-screen flex items-center justify-center p-10'>
        <div className='flex flex-col items-center justify-center gap-5 p-10 bg-gray-200 rounded-xl shadow-xl'>
            <p className=''>
                <MdCancel className='text-red-500 w-20 h-20' />
            </p>
            <h2 className="font-['Inter'] text-indigo-900 text-3xl font-medium tracking-wider">Unfortunately, we were unable to process your order.</h2>
            <h2 className="font-['Inter'] text-indigo-900 text-lg font-base tracking-tight">
                Please try again or contact support -&nbsp;
                <a href={`mailto:pallaveebisoyee@gmail.com`} className='text-red-500'>
                    pallaveebisoyee@gmail.com
                </a>
            </h2>
            
            <a href='/'>
                <button
                    type='button'
                    className="font-['Inter'] text-white bg-red-500 rounded-full p-4 transition-hover duration-300 ease-in-out hover:scale-110 text-xl font-medium tracking-wide"                
                >
                    Continue Shopping
                </button>
            </a>
        </div>
    </div>
  )
}

export default Cancel