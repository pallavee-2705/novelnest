import React, {useState, useEffect} from 'react';
import banner1 from "../assets/banner1.png"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const banners = [
  {
    heading: "To Kill a Mockingbird",
    desc: "A powerful exploration of racial injustice and moral growth in the American South during the 1930s, as seen through the eyes of a young girl named Scout Finch.",
    image: banner1,
  },
  {
    heading: "1984",
    desc: "Sed sit amet faucibus libero. Fusce congue vitae arcu sit amet convallis. Vivamus blandit, ipsum non dignissim. Nulla facilisi. Proin vestibulum, ante id mollis.",
    image: banner1,
  },
  {
    heading: "Pride and Prejudice",
    desc: "Vestibulum eu leo sit amet, consectetur adipiscing elit. Sed ut eleifend velit, vel eleifend nisi. Sed porta, est a feugiat euismod, libero ipsum enim.",
    image: banner1,
  },
  {
    heading: "The Great Gatsby",
    desc: "Mauris ac est a justo hendrerit feugiat. Nullam malesuada, ligula ac accumsan. Aliquam tincidunt, nulla ac convallis. Fusce suscipit dui et lorem dignissim.",
    image: banner1,
  },
];


const Banner = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowPress = (direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log("left");
    } else if (direction === 'right' && currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);   
      console.log("right");
    }
  }


  return (
    <div className="w-auto h-[500px] px-5 bg-gradient-to-r from-[#FFE5E5] via-[#F5FFFE] to-[#FFFFFF] flex flex-row justify-evenly">
      <div className='h-full flex flex-col justify-center items-center p-3'>
        <button onClick={()=>handleArrowPress('left')} className='border-[1px] border-[#ED553B] bg-white p-2 rounded-full hover:bg-[#ED553B] text-[#ED553B] hover:text-white'>
          <BsArrowLeft/>
        </button>
      </div>

      <div className='w-3/4 h-full overflow-hidden '>
        <div className={`relative h-full transition-transform duration-1000 ease-in-out -translate-x-[${currentIndex * 25}%] w-[400%] flex justify-between`}>
          {banners.map((banner, index) => (
            <div key={index} className='relative h-full w-1/4 p-10 flex justify-start'>
            <div className=' flex flex-row w-full justify-between gap-10 '>
              <div className="w-1/2 flex flex-col justify-center gap-3 font-['Inter'] text-indigo-900 max-sm:hidden block">
                <div className="text-6xl max-lg:text-3xl font-semibold tracking-wide">{banner.heading}</div>
                <p className='font-medium text-lg max-lg:text-sm text-opacity-80 tracking-wider'>{banner.desc}</p>
                <div className='my-2 '> 
                  <button className="flex items-center gap-2 border-[1px] border-indigo-900 rounded-lg py-3 px-5 hover:bg-white">
                    <p className='uppercase tracking-wide font-normal leading-9'>Read More</p> <BsArrowRight />
                  </button>
                </div>
                
              </div>
  
              <div className='h-full'>
       
                <img src={banner.image} alt="banner" className="h-full max-lg:py-10 w-full" title={banner.heading}/>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>


      <div className='h-full flex flex-col justify-center items-center p-3'>
        <button onClick={()=>handleArrowPress('right')} className='border-[1px] border-[#ED553B] bg-white p-2 rounded-full hover:bg-[#ED553B] text-[#ED553B] hover:text-white'>
          <BsArrowRight/>
        </button>
      </div>
    </div>

  )
}

export default Banner




// <div className='flex gap-1 mt-5'>
//                   {banners.map((banner, index)=>(
//                     <div className={`p-3 ${index===book && "border-[1px] border-red-500 rounded-full"}`}>
//                       <div className={`w-3 h-3 rounded-full ${index===book ? "bg-red-500 " : 'bg-stone-300'}`}/>
//                     </div>
//                   ))}
//                 </div>