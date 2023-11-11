import { useEffect, useState, React } from 'react';
import { arrow, discount } from '../assets';


const Discounts = () => {
  const [countdown, setCountdown] = useState(3600000); // Initial countdown time in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      } else {
        clearInterval(interval);
        // Optionally, you can add a callback function when the countdown reaches 0
        // For example, display a message or perform an action.
      }
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(interval);
  }, [countdown]);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(countdown / 86400);
  const hours = Math.floor((countdown % 86400) / 3600);
  const minutes = Math.floor((countdown % 3600) / 60);
  const seconds = countdown % 60;

  return (
    <div id="Offers" name="main-discount-div" className="w-auto h-auto bg-rose-100 rounded-[20px] mr-12 ml-12 my-12 ">
      <div className="flex flex-col md:flex-row p-12 ">
        {/* Left side */}
        <div className="flex flex-col gap-6 lg:w-2/3 lg:gap-7 lg:p-5">
          {/* Main heading */}
          <div className="text-slate-600 text-4xl lg:text-5xl font-bold font-['Inter'] leading-[32px] items-center">
            <p>All books are 50% off now!<br />Don't miss such a deal!</p>
          </div>

          {/* Subtext */}
          <div className="text-indigo-900 text-lg md:text-xl lg:mt-6 font-normal font-['Inter']">
          Enjoy a fantastic 50% discount on all books at NovelNest! Whether you're into thrillers, romance, or sci-fi, there's something for everyone.
          Happy browsing!
          </div>

          {/* Timer */}

          <div className="mt-5 text-center flex lg:gap-0 gap-4 flex-row lg:mt-16  lg:pr-16 justify-evenly">
            
            <div name='day' className=' flex w-1/2 gap-2'>
                  {days > 0 && (
                    <div className="text-4xl max-md:text-2xl font-bold text-red-500 flex flex-col">
                      {days}
                      <span className="text-base max-md:text-xs font-bold text-gray-600 uppercase">days</span>
                    </div>
                  )}
            </div>
            <div name='hour' className=' flex w-1/2 gap-2'>
                  {hours > 0 && (
                    <div className="text-4xl max-md:text-2xl  font-bold text-red-500 flex flex-col">
                      {hours.toString().padStart(2, '0')}
                      <span className="text-base max-md:text-xs font-bold text-gray-600 uppercase">hours</span>
                    </div>
                  )}
            </div>
            <div name='minute' className='flex w-1/2 gap-2'>
                  {minutes > 0 && (
                    <div className="text-4xl font-bold max-md:text-2xl text-red-500 flex flex-col">
                      {minutes.toString().padStart(2, '0')}
                      <span className="text-base font-bold max-md:text-xs text-gray-600 uppercase">minutes</span>
                    </div>
                  )}
            </div>
            <div name='second' className='flex w-1/2 gap-2'>
                    <div className="text-4xl font-bold max-md:text-2xl text-red-500 flex flex-col">
                      {seconds.toString().padStart(2, '0')}
                      <span className="text-base max-md:text-xs font-bold text-gray-600 uppercase">seconds</span>
                    </div>
            </div>


          </div>

          {/* Offer button */}
            <a className="flex h-auto gap-2 w-fit items-center cursor-pointer lg:mt-10" href='/store'>
            <p className=" text-red-500 font-bold text-xl md:text-2xl font-inter tracking-tight">
              Explore Now
            </p>
            <img src={arrow} alt="arrow" className="h-3 " />
            </a>
        
        </div>

        {/* Right side */}
        <div className="md:w-2/3">

          <img 
          src={discount}
          alt='discount'
          className='w-full h-auto p-6 max-lg:hidden'
          
          />

        </div>
      </div>
    </div>
  );
};
 

export default Discounts