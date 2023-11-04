import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const BookDetail = () => {
  const [bookData, setBookData] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    // Define the search term for the Google Books API
    const searchTerm = 'xNgstAEACAAJ';

    // Define the API URL with the search term
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    // Make the API request
    axios.get(apiUrl)
      .then(response => {
        // Update the bookData state with the API response
        setBookData(response.data.items[0]); // Assuming you want the first result
      })
      
      .catch(error => {
        console.error('Error fetching data from the API:', error);
      });
  }, []);
console.log(bookData);
  return (
    <div >
      {bookData ? (
        <div className="from-red-50 to-slate-50 bg-gradient-to-r px-28 flex gap-20 mb-16 mt-8 py-20">
          {/* Book cover */}
          <div className="ml-16 transition-transform duration-300 transform hover:scale-105">
            <img 
            src={bookData.volumeInfo.imageLinks.thumbnail} 
            alt={bookData.volumeInfo.title}
            className='h-full
            w-[260px]' 
            />
          </div>


          {/* Book detail */}
          <div className="flex flex-col w-1/2 text-indigo-900">
            {/* Book name */}
            <div className="text-4xl font-bold hover:underline">{bookData.volumeInfo.title}</div>
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
              {showFullDescription ? (
                <>{bookData.volumeInfo.description}</>
              ) : (
                <>{bookData.volumeInfo.description.split('\n').slice(0, 3).join('\n')}</>
              )}

              {bookData.volumeInfo.description.split('\n').length > 3 && (
                <button
                  className="text-indigo-600 cursor-pointer hover:underline"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? 'View Less' : 'View More'}
                </button>
              )}
            </div>
            {/* Cart */}
            <div className="relative w-full flex gap-2 mt-8">
              <button className="bg-indigo-900 text-white px-6 py-3 rounded-lg w-full transition-transform duration-300 transform hover:scale-105">
                Buy Now
              </button>
              <button className="top-0 right-0 bg-indigo-900 text-white rounded-lg py-3 px-6 transition-transform duration-300 transform hover:scale-105">
                <FontAwesomeIcon icon={faShoppingCart} />
              </button>
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
