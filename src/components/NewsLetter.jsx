import React from 'react'

const NewsLetter = () => {
  return (
    <div className='relative bg-rose-100 flex flex-col justify-center items-center lg:px-20'>
      <div className='absolute left-0 top-0'>Design dot</div>
      <div className='bg-red-500 w-full flex flex-col items-center px-20'>
        <div className="text-white text-4xl max-md:text-2xl font-['Inter'] font-semibold leading-wide tracking-wide pt-14 pb-2 max-md:mb-16">Subscribe to our Newsletter</div>
        <div className='w-full lg:w-1/2 max-md:w-full max-md:hidden'>
          <p className="text-center text-white text-sm max-md:text-xs font-light font-['Inter'] leading-8 tracking-tight mb-16">Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.</p>
        </div>
      </div>

      <div className='bg-white shadow-md w-2/3 mb-10 flex max-md:flex-col items-center p-3 -translate-y-10 gap-3'>
        <div className="w-3/4 max-md:w-full p-3 flex items-center gap-3">
          <div className="max-sm:hidden">✉️</div>
          <div className='w-full p-2 text-gray-400 rounded-sm border-red-500 transition ease-in-out delay-100 hover:shadow-md hover:border-[1px] hover:-translate-y-1 hover:scale-102  duration-300'>
            youremail123@gmail.com
          </div>
        </div>
        <div className='w-1/4 max-md:w-full flex flex-col items-center bg-red-500 uppercase p-3 tracking-widest font-semibold text-white'>Subscribe</div>
      </div>

      <div className='absolute left-0 bottom-0 bg-cyan-200 w-full'>design dots x 2</div>
    </div>
  )
}

export default NewsLetter