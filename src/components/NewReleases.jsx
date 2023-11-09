import React from 'react'
import { newrelease1, newrelease2, newrelease3, newrelease4, arrow } from '../assets'

const NewReleases = () => {
  const bookEntries = [
    {
      id: 1,
      bookid: "/9WOGEAAAQBAJ",
      title: 'The Roomate Pact',
      author: 'Allison Ashley',
      price: 13.99,
      imageUrl: newrelease1
    },
    {
      id: 2,
      bookid: "/EGpgEAAAQBAJ",
      title: 'The Lost Letter',
      author: 'Mimi Matthews ',
      price: 5.44,
      imageUrl: newrelease2
    },
    {
      id: 3,
      bookid: "/4UCnDQAAQBAJ",
      title: 'Ikigai',
      author: 'Héctor García & Francesc Miralles',
      price: 12.99,
      imageUrl: newrelease3
    },
    {
      id: 4,
      bookid: "/nt6eDwAAQBAJ",
      title: 'In Five Years',
      author: 'Rebecca Serle',
      price: 12.99,
      imageUrl: newrelease4
    }
    // Add more book entries as needed
  ];
  return (



    <div id="New Releases" className="w-full flex flex-col h-auto bg-rose-50 py-4">

      {/* Headers */}
      <div className="text-center text-neutral-500 text-[13px] font-medium font-['Inter'] uppercase tracking-wider">
        <p className='mt-1'>
        Some quality items
        </p>
      </div>
      <div className="text-center text-indigo-900 text-4xl font-semibold font-['Inter'] capitalize">
        <p className='py-1'>
        New Release Books
        </p>
      </div>


    {/* Books */}
    <div name='books' className='px-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16 my-3'>
              {bookEntries.map(({id, title, bookid, author, price, imageUrl}) => (
                <a
                  key={id}
                  className='flex-col flex hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
                  href={bookid}
                >
                {/* the white rectangle */}
                <div className='w-full md:col-span-1 lg:col-span-2 h-full p-4 bg-white shadow border items-center border-stone-200'>
                  <img
                  src={imageUrl}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105 py-2 px-2 h-full"
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
              </a>
              ))}
        </div>
    </div>
    {/* the line */}
      <div className="w-full h-px bg-neutral-200" />

    {/* bottom */}

    {/* View all */}
    <div>
      <a className='flex mr-3 w-full h-auto gap-2 py-3  justify-center items-center cursor-pointer'
      href='/store'>
      <p className="text-right text-red-500 border-b border-2px hover:border-red-500 font-bold text-xl font-['Inter'] capitalize tracking-tight">
      View all products
      </p>
      <img 
      src={arrow}
      alt='arrow'
      className='h-2 w-auto'
      />
      </a>
    </div>



    </div>
  )
}

export default NewReleases