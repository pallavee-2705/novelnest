import React from 'react'
import { newrelease1, newrelease2, newrelease3, newrelease4, arrow } from '../assets'

const NewReleases = () => {
  return (
    <div className="w-full flex flex-col h-auto bg-rose-50 py-4">

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
      <div className='flex gap-8 mx-12 justify-between my-3 '>
        {/* New Release 1 */}
        <div 
        className='flex-col flex hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
        onClick={() => {
          window.open('https://www.goodreads.com/', '_blank');
        }}>
          {/* the white rectangle */}
          <div className="w-[300px] h-[395px] bg-white shadow border border-stone-200 ">
            <img
            src={newrelease1}
            alt='newrelease1'
            className='h-auto w-auto px-2 py-2'
            />

          </div>

          {/* The title */}
          <div className=" mt-3 text-center text-indigo-900 text-[22px] font-semibold font-['Inter'] capitalize">
            Simple way of piece life
          </div>

          {/* Authors name */}
          <div className=" mt-2 text-center text-zinc-500 text-sm font-normal font-['Inter'] capitalize tracking-tight">
            Armor Ramsey
          </div>

          {/* Price */}
          <div className=" mt-2 text-center text-red-500 text-lg font-bold font-['Inter'] capitalize tracking-tight">
            $ 40.00
          </div>

        </div>



        {/* New Release 2 */}

        <div className='flex-col flex hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
        onClick={() => {
          window.open('https://www.goodreads.com/', '_blank');
        }}
        >
          {/* the white rectangle */}
          <div className="w-[300px] h-[395px] bg-white shadow border border-stone-200 ">

            <img
            src={newrelease2}
            alt='newrelease1'
            className='h-auto w-auto px-2 py-2'
            />

          </div>

          {/* The title */}
          <div className=" mt-3 text-center text-indigo-900 text-[22px] font-semibold font-['Inter'] capitalize">
            Great travel at desert
          </div>

          {/* Authors name */}
          <div className=" mt-2 text-center text-zinc-500 text-sm font-normal font-['Inter'] capitalize tracking-tight">
            Sanchit Howdy
          </div>

          {/* Price */}
          <div className=" mt-2 text-center text-red-500 text-lg font-bold font-['Inter'] capitalize tracking-tight">
            $ 38.00
          </div>

        </div>

        

        {/* New Release 3 */}
        <div className='flex-col flex hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
        onClick={() => {
          window.open('https://www.goodreads.com/', '_blank');
        }}
        >
          {/* the white rectangle */}
          <div className="w-[300px] h-[395px] bg-white shadow border border-stone-200">

            <img
            src={newrelease3}
            alt='newrelease1'
            className='h-auto w-auto px-2 py-2'
            />

          </div>

          {/* The title */}
          <div className=" mt-3 text-center text-indigo-900 text-[22px] font-semibold font-['Inter'] capitalize">
          The lady beauty Scarlett
          </div>

          {/* Authors name */}
          <div className=" mt-2 text-center text-zinc-500 text-sm font-normal font-['Inter'] capitalize tracking-tight">
          Arthur Doyle
          </div>

          {/* Price */}
          <div className=" mt-2 text-center text-red-500 text-lg font-bold font-['Inter'] capitalize tracking-tight">
            $ 45.00
          </div>

        </div>
        {/* New Release 4 */}
        <div className='flex-col flex hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
        onClick={() => {
          window.open('https://www.goodreads.com/', '_blank');
        }}
        >
          {/* the white rectangle */}
          <div className="w-[300px] h-[395px] bg-white shadow border border-stone-200 ">

            <img
            src={newrelease4}
            alt='newrelease1'
            className='h-auto w-auto px-2 py-2'
            />

          </div>

          {/* The title */}
          <div className=" mt-3 text-center text-indigo-900 text-[22px] font-semibold font-['Inter'] capitalize">
          Once upon a time
          </div>

          {/* Authors name */}
          <div className=" mt-2 text-center text-zinc-500 text-sm font-normal font-['Inter'] capitalize tracking-tight">
          Klien Marry
          </div>

          {/* Price */}
          <div className=" mt-2 text-center text-red-500 text-lg font-bold font-['Inter'] capitalize tracking-tight">
            $ 35.00
          </div>

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
      <p className="text-right text-red-500 text-base font-bold font-['Inter'] capitalize tracking-tight">
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