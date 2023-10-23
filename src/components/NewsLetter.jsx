import React, {useState} from 'react';
import { ornament, ornament1, ornament2 } from '../assets';

const NewsLetter = () => {
  const [email, setEmail] = useState(null);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handleButtonClick = () => {
    console.log(email)
    alert("Signed up for the newsletter!")
  }

  return (
    <div className='relative bg-rose-100 flex flex-col justify-center items-center lg:px-20 pb-14'>
      <div className='absolute left-0 top-0'>
        <img src={ornament} alt="ornament" className='max-sm:h-[150px] -translate-x-4'/>
      </div>
      <div className='bg-red-500 w-full flex flex-col items-center px-20'>
        <div className="text-white text-4xl max-md:text-2xl font-['Inter'] font-semibold leading-wide tracking-wide pt-14 pb-2 max-md:mb-16">Subscribe to our Newsletter</div>
        <div className='w-full lg:w-1/2 max-md:w-full max-md:hidden'>
          <p className="text-center text-white text-sm max-md:text-xs font-light font-['Inter'] leading-8 tracking-tight mb-16">Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.</p>
        </div>
      </div>

      <div className='bg-white shadow-md w-2/3 mb-10 flex max-md:flex-col items-center p-3 -translate-y-10 gap-3'>
        <div className="w-3/4 max-md:w-full p-3 flex items-center gap-3 z-20">
          <div className="max-sm:hidden">✉️</div>
          <input onChange={handleEmailChange} placeholder='youremail123@gmail.com' className='w-full p-2 text-gray-400 rounded-md transition ease-in-out delay-100 hover:shadow-xl hover:border-[1px] hover:-translate-y-1 hover:scale-102  duration-300'/>
        </div>
        <button
          type="button"
          onClick={handleButtonClick}
          className='w-1/4 max-md:w-full flex flex-col items-center bg-red-500 uppercase p-3 tracking-widest font-semibold text-white transition ease-in-out delay-100 hover:scale-105 hover:shadow-xl duration-500'>
            Subscribe
        </button>
      </div>

      <div className='absolute flex w-full justify-between translate-y-2 bottom-0'>
        <div className='flex flex-col justify-end'>
          <img src={ornament1} alt="ornament1" className='max-sm:w-[150px]'/>
        </div>
        <div >
          <img src={ornament2} alt="ornament2" className='max-sm:w-[150px]'/>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter