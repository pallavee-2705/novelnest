import React from 'react';

const BookCard = ({book}) => {
  return (
    <div className="p-4 h-full">
      <div className='h-2/3 border-[1px]bg-white shadow border border-stone-200 flex items-center justify-center transition-hover duration-500 ease-in-out hover:scale-110 hover:shadow-2xl'>
        <img src={book.image} alt="book1" className='w-[90%] h-[90%]' />
      </div>

      <div className='h-1/3 py-10 flex flex-col justify-evenly items-center cursor-pointer '>
        <div className="text-indigo-900 text-lg font-semibold font-['Inter'] capitalize hover:underline">{book.heading}</div>
        <div className="text-zinc-500 text-sm font-normal font-['Inter'] capitalize tracking-tight hover:underline">{book.author}</div>
        <div className="h-5 text-red-500 text-[22px] font-bold font-['Inter'] capitalize tracking-wide hover:underline">$ {book.price}</div>
      </div>
    </div>
  )
}

export default BookCard