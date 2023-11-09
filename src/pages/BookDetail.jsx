import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { BiArrowBack } from 'react-icons/bi';
import {AiFillHeart} from 'react-icons/ai';
const BookDetail = () => {
  const [bookData, setBookData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const searchTerm = '5HJzDwAAQBAJ';
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    axios.get(apiUrl)
      .then(response => {
        setBookData(response.data.items[0]);
      })
      .catch(error => {
        console.error('Error fetching data from the API:', error);
      });
  }, []);


  return (
    <div className='from-red-50 to-slate-50 bg-gradient-to-r'>
      {bookData ? (
        <div className="lg:flex-col md:flex-col mb-16 py-14 lg:px-28 md:px-28 px-12">
          <div className='lg:px-12 mb-5 flex gap-2 text-indigo-900 items-center text-lg hover:underline'>
          <a href='/store'>
              <BiArrowBack className='font-thin'/>
            </a>
            <a href='/store'>
            Back to Store
            </a>
          </div>
          <div className='lg:flex md:flex md:gap-16 lg:gap-20'>
          {/* Book cover */}
          <div className="lg:ml-16 md:ml-16 ml-10 mb-3 transition-transform duration-300 transform hover:scale-105">
            <img 
              src={bookData.volumeInfo.imageLinks.thumbnail} 
              alt={bookData.volumeInfo.title}
              className='lg:h-[350px] md:h-[300px] h-[280px]'
            />
          </div>
          {/* Book detail */}
          <div className="flex flex-col lg:w-1/2 md:w-1/2 text-indigo-900">
            {/* Book name */}
            <div className='flex justify-between'>
            <div className="text-4xl font-bold hover:underline">{bookData.volumeInfo.title}</div>
            <div className='mt-3'>
            <AiFillHeart className='text-3xl hover:scale-125 transition-transform'
            onClick={()=>{}}/>
            </div>
            </div>
            {/* Book author */}
            <div className="text-lg h-3 mt-1 font-light">{bookData.volumeInfo.authors.join(', ')}</div>
            {/* Rating */}
            <div className="text-xl h-4 mt-7">
              <p>
                <i>Rating {bookData.volumeInfo.averageRating}</i>
              </p>
            </div>
            {/* Price */}

            {/* <div className="text-4xl mt-8 font-semibold">${bookData.saleInfo.listPrice.amount}</div> */} 
            
            <div className="text-3xl mt-8 font-semibold">
              $13.99
            </div>
            {/* Description */}
             <div className="mt-8 text-justify text-lg">
      
              {showFullDescription
                ? bookData.volumeInfo.description
                : `${bookData.volumeInfo.description.slice(0, 200)}...`}
              
            {/* View More/View Less Button */}
            
            {bookData.volumeInfo.description.length > 200 && (
              <button
                className="text-indigo-600 cursor-pointer hover:underline ml-4 self-end"
                onClick={() => setShowFullDescription(!showFullDescription)}
              >
                {showFullDescription ? 'View Less' : 'View More'}
              </button>
            )}
            
            </div>
            {/* Cart */}
            <div className="relative w-full h-10 flex gap-2 mt-8 lg:text-lg text-sm">
              <button className="bg-indigo-900 text-white rounded-xl w-1/2 cursor-pointer transition-transform duration-300 transform hover:scale-105">
                Buy Now
              </button>
              <button className="top-0 right-0 flex items-center justify-center lg:gap-3 gap-2 cursor-pointer bg-indigo-900 text-white rounded-xl w-1/2 transition-transform duration-300 transform hover:scale-105">
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
            </div>
          </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default BookDetail;