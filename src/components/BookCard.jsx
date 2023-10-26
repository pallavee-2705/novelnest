import React, { useState, useEffect } from 'react';

const BookCard = ({ book }) => {
  const [isBookData, setIsBookData] = useState(false);

  useEffect(() => {
    if (book !== null) {
      setTimeout(() => {
        setIsBookData(true);
      }, 1500)
    } else {
      // Set isBookData to false while waiting for data
      setTimeout(() => {
        setIsBookData(false);
      }, 500)
    }
    
  }, [book]);

  return (
    <div className="p-4 h-full">
      {book.saleInfo.listPrice?.amount ? (
        <a href={`/books/${book.volumeInfo.title}`}>
          <div className={`h-2/3 border-[1px] bg-white shadow border border-stone-200 flex items-center justify-center transition-hover duration-500 ease-in-out  ${book.saleInfo.listPrice?.amount && 'hover:scale-110 hover:shadow-2xl'}`}>
            {isBookData ? (
              <div className='relative h-2/3 w-2/3'>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className={`bg-red-500 w-full h-full ${!book.saleInfo.listPrice?.amount && 'opacity-30'}`} />
                {!book.saleInfo.listPrice?.amount && (
                  <div className='absolute top-[50%] bg-gray-300 text-slate-900 flex w-full justify-center text-lg italic'>Out of Stock.</div>
                )}
              </div>
            ) : (
              <div className="animate-pulse w-[70%] h-[70%] bg-gray-300 rounded-md"></div>
            )}
          </div>

          <div className='h-1/3 py-10 flex flex-col justify-evenly items-center cursor-pointer '>
            {isBookData ? (
              <div className="text-indigo-900 text-lg text-center font-semibold font-['Inter'] capitalize hover:underline">{book.volumeInfo.title}</div>
            ) : (
              <div className="animate-pulse bg-gray-300 w-full p-4 rounded-md"></div>
            )}

            {isBookData ? (
              <div className="text-zinc-500 text-sm font-normal font-['Inter'] capitalize tracking-tight hover:underline">{book.volumeInfo.authors}</div>
            ) : (
              <div className="animate-pulse bg-gray-300 w-1/2 flex justify-center p-2 rounded-md"></div>
            )}

            {isBookData ? (
              <div className="h-5 text-red-500 text-[22px] font-bold font-['Inter'] capitalize tracking-wide hover:underline">$ {book.saleInfo.listPrice?.amount}</div>
            ) : (
              <div className="animate-pulse bg-gray-300 w-1/3 flex justify-center p-3 rounded-md"></div>
            )}
          </div>
        </a>
      ) : (
        <div className='h-full'>
          <div className={`h-2/3 border-[1px] bg-white shadow border border-stone-200 flex items-center justify-center transition-hover duration-500 ease-in-out  ${book.saleInfo.listPrice?.amount && 'hover:scale-110 hover:shadow-2xl'}`}>
            {isBookData ? (
              <div className='relative h-2/3 w-2/3'>
                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className={`bg-red-500 w-full h-full ${!book.saleInfo.listPrice?.amount && 'opacity-30'}`} />
                {!book.saleInfo.listPrice?.amount && (
                  <div className='absolute top-[50%] bg-gray-300 text-slate-900 flex w-full justify-center text-lg italic'>Out of Stock.</div>
                )}
              </div>
            ) : (
              <div className="animate-pulse w-[70%] h-[70%] bg-gray-300 rounded-md"></div>
            )}
          </div>

          <div className='h-1/3 py-10 flex flex-col justify-evenly items-center cursor-pointer '>
            {isBookData ? (
              <div className="text-indigo-900 text-lg text-center font-semibold font-['Inter'] capitalize hover:underline">{book.volumeInfo.title}</div>
            ) : (
              <div className="animate-pulse bg-gray-300 w-full p-4 rounded-md"></div>
            )}

            {isBookData ? (
              <div className="text-zinc-500 text-sm font-normal font-['Inter'] capitalize tracking-tight hover:underline">{book.volumeInfo.authors}</div>
            ) : (
              <div className="animate-pulse bg-gray-300 w-1/2 flex justify-center p-2 rounded-md"></div>
            )}

            {isBookData ? (
              <div className="h-5 text-red-500 text-[22px] font-bold font-['Inter'] capitalize tracking-wide hover:underline">$ {book.saleInfo.listPrice?.amount}</div>
            ) : (
              <div className="animate-pulse bg-gray-300 w-1/3 flex justify-center p-3 rounded-md"></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookCard;
