import React from 'react'
import { article1, article2, article3, arrowarticles } from '../assets';
import { Link } from 'react-router-dom';


const Articles = () => {
  const articles = [
    { id: 1, title: 'The Magic of Early Reading: Nurturing Young Minds', date: '2nd August 2021', imageUrl: article1 },
    { id: 2, title: 'Women in STEM: Nurturing the Next Generation of Innovators', date: '14th December 2021', imageUrl: article2 },
    { id: 3, title: 'The Art of Creative Living: Embracing Bohemian Spirit', date: '5th May 2022', imageUrl: article3 },
  ];

  return (
    <div id="articles" className="w-full h-auto bg-slate-50 flex flex-col px-12 py-6 justify-center items-center" >
      {/* first heading  */}
      <div className="w-full h-auto text-center text-neutral-500 text-sm font-medium font-['Inter'] uppercase tracking-wider">
        Read our articles
      </div>
      {/* main heading  */}
      <div className="mt-3 h-auto w-full flex justify-around">
        <div className='w-1/3 flex items-center justify-center '>
          <div className='bg-neutral-200 w-2/3 h-px'></div>
        </div>
        <div className='flex w-1/3 items-center justify-center'>
          <div className="text-center text-cyan-900 text-5xl font-normal font-['Inter'] capitalize">Latest Articles</div>
        </div>
        <div className='w-1/3 flex items-center justify-center '>
          <div className='bg-neutral-200 w-2/3 h-px'></div>
        </div>
      </div>
      {/* articles  */}
      <div name='main-artcle-div'
      className='grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-3 gap-8 my-8 px-16 w-full '>
        {articles.map(({id, title, date, imageUrl}) => (
          <Link
          key={id}
          className='flex-col flex hover:transform hover:scale-105 hover:text-cyan-900 hover:underline transition-transform duration-300 ease-in-out cursor-pointer gap-2'
          to={`/allarticles/${id}`}
          >
            {/* image  */}
            <div className='w-full h-auto'>
              <img
                src={imageUrl}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-auto"
              />
            </div>
            {/* date  */}
            <div className='mt-2 text-zinc-500 text-sm font-normal tracking-tight'>
              {date}
            </div>
            {/* Title  */}
            <div className='text-cyan-900 font-normal text-2xl'>
              {title}
            </div>
            {/* line  */}
            <div className=" mt-6 w-full h-[1px] bg-stone-300" />
            
          </Link>
        ))}
        </div>
    {/* read more button  */}
    {/* <div>
      <a href="/allarticles" 
      className="lg:w-[250px] lg:h-[56px] text-sm w-2/3  border border-stone-300 font-normal lg:text-lg text-cyan-900 items-center justify-center cursor-pointer p-2 gap-3 flex"
    >
    READ ALL ARTICLES        
    <img 
      src={arrowarticles}
      alt='arrow'
      className='h-3 w-auto'
      />
      </a>
    </div>
  */}
  </div>
  )
}

export default Articles