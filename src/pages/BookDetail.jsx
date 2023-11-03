import React, { useState } from 'react';
import { samplebook } from '../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


const BookDetail = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);
   
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const bookDescription = `About three things I was absolutely positive.
  First, Edward was a vampire.
  Second, there was a part of him - and I didn't know how dominant that part might be - that thirsted for my blood.
  And third, I was unconditionally and irrevocably in love with him.
  Deeply seductive and extraordinarily suspenseful, Twilight is a love story with bite.`;



  return (
    <div className=' from-red-50 to-slate-50 bg-gradient-to-r px-14 py-24 flex gap-16 mb-16'>
      {/* book cover  */}
      <div className='ml-16 transition-transform duration-300 transform hover:scale-105'>
        <img src={samplebook} 
        alt="" 
        />

      </div>
      {/* book detail  */}
      <div className='flex flex-col w-1/3  text-indigo-900'>
        {/* book name  */}
        <div className='text-5xl font-bold'>
          Twillight
        </div>
        {/* book author */}
        <div className=' text-xl h-3 mt-1 font-light'>
          Stephenie Meyer
        </div>
        {/* rating  */}
        <div className='text-2xl h-4 font- mt-7'>
          <p><i>Rating 3.64</i></p>
        </div>
        {/* price  */}
        <div className='text-4xl mt-8 font-semibold'>
          $12.99
        </div>

        {/* descritption  */}
        <div className="mt-8 text-justify ">
        {showFullDescription ? (
          <>
            {bookDescription} {/* Display the full description */}
          </>
        ) : (
          <>
            {bookDescription.split('\n').slice(0, 3).join('\n')} {/* Show only a few lines */}
          </>
        )}

        {bookDescription.split('\n').length > 3 && (
          <button
            className="text-indigo-600 cursor-pointer hover:underline"
            onClick={toggleDescription}
          >
            {showFullDescription ? 'View Less' : 'View More'}
          </button>
        )}
      </div>


        {/* Cart */}
        <div className="relative w-full flex gap-2 mt-8">
          <button className="bg-indigo-900 text-white px-6 py-3 rounded-lg w-full transition-transform duration-300 transform hover:scale-105 ">
            Buy Now
          </button>
          <button className=" top-0 right-0 bg-indigo-900 text-white rounded-lg py-3 px-6 transition-transform duration-300 transform hover:scale-105">
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BookDetail