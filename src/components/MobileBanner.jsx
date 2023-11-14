import React from 'react'

const MobileBanner = () => {
  return (
    <div  className="max-sm:block hidden">
        <div className='flex justify-center w-full bg-gradient-to-t from-red-50 to-sky-100'>
            <p className="font-['Inter'] text-xl text-indigo-900 font-medium uppercase tracking-widest p-5">Novel - Nest</p>
        </div>
    </div>
  )
}

export default MobileBanner