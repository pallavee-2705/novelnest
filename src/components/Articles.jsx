import React from 'react'
import { article1, article2, article3, arrowarticles } from '../assets';

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: 'Reading Books Aways Makes The Moments Happy',
      date: '2nd August 2021',
      imageUrl: article1
    },
    {
      id: 2,
      title: 'Reading books always makes the moments happy',
      date: '2nd August 2021',
      imageUrl: article2
    },
    {
      id: 3,
      title: 'Reading books always makes the moments happy',
      date: '2nd August 2021',
      imageUrl: article3
    }
  ];

  return (
    <div className="w-full h-auto bg-slate-50 flex flex-col px-12 py-6 justify-center items-center" >
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
          <div
          key={id}
          className='flex-col flex hover:transform hover:scale-105 hover:text-cyan-900 hover:underline transition-transform duration-300 ease-in-out cursor-pointer gap-2'
          onClick={() => {
          window.open('https://www.goodreads.com/', '_blank');
          }}
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
            
          </div>
        ))}
        </div>
    {/* read more button  */}
    <div className="lg:w-[250px] lg:h-[56px] text-sm w-2/3  border border-stone-300 font-normal lg:text-lg text-cyan-900 items-center justify-center cursor-pointer p-2 gap-3 flex"
      onClick={() => {
        window.open('https://www.goodreads.com/', '_blank');
      }}
    >
    <p>
    READ ALL ARTICLES        
    </p>
    <img 
      src={arrowarticles}
      alt='arrow'
      className='h-3 w-auto'
      />
    </div>
 
  </div>
  )
}

export default Articles