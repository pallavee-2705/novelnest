import React from 'react'
import { newrelease1, newrelease2, newrelease3, newrelease4, arrow } from '../assets'

const NewReleases = () => {
  const bookEntries = [
    {
      id: 1,
      title: 'Simple way of piece life',
      author: 'Armor Ramsey',
      price: 40.00,
      imageUrl: newrelease1
    },
    {
      id: 2,
      title: 'Great travel at desert',
      author: 'Sanchit Howdy',
      price: 38.00,
      imageUrl: newrelease2
    },
    {
      id: 3,
      title: 'The Lady Beauty Scarlett',
      author: 'Arthur Doyle',
      price: 45.00,
      imageUrl: newrelease3
    },
    {
      id: 4,
      title: 'Once Upon A Time',
      author: 'Klien Marry',
      price: 35.00,
      imageUrl: newrelease4
    }
    // Add more book entries as needed
  ];
  return (



    <div id="New Releases" className="w-full flex flex-col h-auto bg-rose-50 py-4">

      {/* Headers */}
      <div className="text-center text-neutral-500 text-[13px] font-medium font-['Inter'] uppercase tracking-wider">
        <p className='mt-4'>
        Some quality items
        </p>
      </div>
      <div className="text-center text-indigo-900 text-5xl font-semibold font-['Inter'] capitalize">
        <p className='py-3'>
        New Release Books
        </p>
      </div>


    {/* Books */}
    <div name='books' className='px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-3'>
              {bookEntries.map(({id, title, author, price, imageUrl}) => (
                <div
                  key={id}
                  className='flex-col flex hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
                  onClick={() => {
                    window.open('https://www.goodreads.com/', '_blank');
                  }}
                >
                {/* the white rectangle */}
                <div className='w-full md:col-span-1 lg:col-span-2 h-auto bg-white shadow border border-stone-200'>
                  <img
                  src={imageUrl}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 w-full h-auto py-2 px-2 "
                />
                </div>

                {/* The title */}
                <div className='mt-3 text-center text-indigo-900 text-[22px] font-semibold'>
                  {title}
                </div>

                {/* Authors name */}
                <div className='mt-2 text-center text-zinc-500 text-sm font-normal  tracking-tight'>
                  {author}
                </div>

                {/* Price */}
                <div className='mt-2 text-center text-red-500 text-lg font-bold tracking-tight'>
                  ${price}
                  </div>
              </div>
              ))}
        </div>
    </div>
    {/* the line */}
      <div className="w-full h-px bg-neutral-200" />

    {/* bottom */}

    {/* View all */}
    <div className='flex mr-3 w-full h-auto gap-2 py-3  justify-center items-center cursor-pointer'
    onClick={() => {
      window.open('https://www.goodreads.com/', '_blank');
    }}>
      <p className="text-right text-red-500 font-bold text-xl font-['Inter'] capitalize tracking-tight">
      View all products
      </p>
      <img 
      src={arrow}
      alt='arrow'
      className='h-2 w-auto'
      />
    </div>



    </div>
  )
}

export default NewReleases