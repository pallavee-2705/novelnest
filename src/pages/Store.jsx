import React from 'react';
import {FilterColumn, BookCard} from "../components";
import { banner1, featurebook, newrelease1, newrelease2 } from '../assets';

const Books = [
  {
    heading: "To Kill a Mockingbird",
    desc: "A powerful exploration of racial injustice and moral growth in the American South during the 1930s, as seen through the eyes of a young girl named Scout Finch.",
    image: featurebook,
    author:'Timbur Wood',
    price:"45.00",
  },
  {
    heading: "1984",
    desc: "Sed sit amet faucibus libero. Fusce congue vitae arcu sit amet convallis. Vivamus blandit, ipsum non dignissim. Nulla facilisi. Proin vestibulum, ante id mollis.",
    image: banner1,
    author:'Timbur Wood',
    price:"145.00",
  },
  {
    heading: "Pride and Prejudice",
    desc: "Vestibulum eu leo sit amet, consectetur adipiscing elit. Sed ut eleifend velit, vel eleifend nisi. Sed porta, est a feugiat euismod, libero ipsum enim.",
    image: newrelease1,
    author:'Timbur Wood',
    price:"299.00",
  },
  {
    heading: "The Great Gatsby",
    desc: "Mauris ac est a justo hendrerit feugiat. Nullam malesuada, ligula ac accumsan. Aliquam tincidunt, nulla ac convallis. Fusce suscipit dui et lorem dignissim.",
    image: newrelease2,
    author:'Timbur Wood',
    price:"75.00",
  },
  {
    heading: "Pride and Prejudice",
    desc: "Vestibulum eu leo sit amet, consectetur adipiscing elit. Sed ut eleifend velit, vel eleifend nisi. Sed porta, est a feugiat euismod, libero ipsum enim.",
    image: newrelease1,
    author:'Timbur Wood',
    price:"50.00",
  },
  {
    heading: "The Great Gatsby",
    desc: "Mauris ac est a justo hendrerit feugiat. Nullam malesuada, ligula ac accumsan. Aliquam tincidunt, nulla ac convallis. Fusce suscipit dui et lorem dignissim.",
    image: newrelease2,
    author:'Timbur Wood',
    price:"95.00",
  },
];

const Store = () => {
  return (
    <div className="min-h-screen">
      {/* Heading */}
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-[100px] flex items-center justify-center">
        <p className="font-['Inter'] uppercase text-xl font-medium text-indigo-900 tracking-wide leading-loose">Home / Products</p>
      </div>
      {/* Filter Column */}
      <div className="flex h-auto">
        <div className="w-1/4 sm:block hidden p-10 font-['Inter'] font-bold text-indigo-900 leading-loose">
          <FilterColumn />
        </div>

        {/* main column */}
        <div className="max-sm:w-full w-3/4 ">
          {/* Second Menu - Sort Bar */}
          <div className="flex justify-between p-10">
            <div className='sm:hidden'>filter button</div>
            <div>sort by</div>
            <div>showing</div>
            <div>show</div>
            <div>view buttons</div>
          </div>
          {/* GRID */}
          <div className='h-auto grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-4 max-sm:px-10'>
            {Books.map((book, index) => {
              return (
                <div className='h-[600px]'><BookCard book={book}/></div>
              )
            })}
          </div>
          <div>pagination</div>
        </div>
      </div>
    </div>
  )
}

export default Store