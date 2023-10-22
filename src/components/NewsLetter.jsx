import React from 'react'

const NewsLetter = () => {
  return (
    <div className='relative bg-rose-100 flex flex-col justify-center items-center px-20'>
      <div className='absolute left-0 top-0'>Design dot</div>
      <div className='bg-red-500 w-full flex flex-col items-center px-20'>
        <div className="text-white text-4xl max-md:text-2xl font-['Inter'] font-semibold leading-wide tracking-wide pt-14 pb-2 max-md:mb-16">Subscribe to our Newsletter</div>
        <div className='w-full lg:w-1/2 max-md:w-full max-md:hidden'>
          <p className="text-center text-white text-sm max-md:text-xs font-light font-['Inter'] leading-8 tracking-tight mb-16">Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.</p>
        </div>
      </div>

      <div className='bg-white shadow-md w-2/3 mb-10 flex max-md:flex-col items-center p-3 bg-blue-400 -translate-y-10 gap-3'>
        <div className="w-3/4 max-md:w-full bg-red-300 p-3">Email</div>
        <div className='3-1/4 max-md:w-full bg-red-300 p-3'>Container</div>
      </div>

      <div className='absolute left-0 bottom-0 bg-cyan-200 w-full'>design dots x 2</div>
    </div>
  )
}

export default NewsLetter