import React from 'react'
import { article1, article2, article3 } from '../assets';

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
      title: 'Great travel at desertReading books always makes the moments happy',
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
    <div className="w-full h-auto bg-slate-50 flex flex-col px-12 py-12 gap-5 items-center" >
      {/* first heading  */}
      <div className="w-[169px] h-[15px] text-center text-neutral-500 text-[13px] font-medium font-['Inter'] uppercase tracking-wider">
        Read our articles
      </div>
      {/* main heading  */}
      <div className="mt-2 h-24 w-full flex justify-around">
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
      className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-10'>
        {articles.map(({id, title, date, imageUrl}) => (
          <div
          key={id}
          className='flex-col flex hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer'
          onClick={() => {
          window.open('https://www.goodreads.com/', '_blank');
          }}
          >
            {/* image  */}
            <div>
              <img
                src={imageUrl}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-auto py-2 px-2 "
              />
            </div>
            {/* date  */}
            <div className=''>
              ${date}
            </div>
            {/* Title  */}
            <div>
              {title}
            </div>
            {/* line  */}
            <div>
            </div>
            
          </div>
        ))}
        </div>
    {/* read more button  */}
    <div>
              
    </div>    
    </div>
  )
}

export default Articles