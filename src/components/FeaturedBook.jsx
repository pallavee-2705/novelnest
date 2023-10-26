import React, {useState} from 'react';
import banner1 from "../assets/banner1.png"
import { featurebook } from '../assets';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const featBooks = [
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
    price:"45.00",
  },
  {
    heading: "Pride and Prejudice",
    desc: "Vestibulum eu leo sit amet, consectetur adipiscing elit. Sed ut eleifend velit, vel eleifend nisi. Sed porta, est a feugiat euismod, libero ipsum enim.",
    image: banner1,
    author:'Timbur Wood',
    price:"45.00",
  },
  {
    heading: "The Great Gatsby",
    desc: "Mauris ac est a justo hendrerit feugiat. Nullam malesuada, ligula ac accumsan. Aliquam tincidunt, nulla ac convallis. Fusce suscipit dui et lorem dignissim.",
    image: banner1,
    author:'Timbur Wood',
    price:"45.00",
  },
];


const FeaturedBook = () => {
  const [book, setBook] = useState(0);
  // const [opacityClass, setOpacityClass] = useState('scale-100');
  const [isSkewed, setIsSkewed] = useState(false);
  const [move, setMove] = useState('translate-x-[40px]')

  const handleArrowPress = (direction) => {
    if(direction === 'left' && book>0)
    {
      setBook((prev) => prev-1);
      setMove('-translate-x-[40px]')
    }

    if(direction === 'right' && book<=2)
    {
      setBook((prev) => prev+1);
      setMove('translate-x-[40px]')
    }

     // Apply skew effect during transition
    setIsSkewed(true);
    setTimeout(() => {
      setIsSkewed(false);
    }, 500); // Adjust the duration to match your transition
    
  }

  console.log(book);

  return (
    <div className="w-auto h-auto px-5 bg-gradient-to-r from-red-50 to-slate-50 flex flex-row justify-between">
      <div className='h-auto flex flex-col justify-center items-center p-3'>
        <button onClick={()=>handleArrowPress('left')} className='border-[1px] border-[#ED553B] bg-white p-2 rounded-full hover:bg-[#ED553B] text-[#ED553B] hover:text-white'>
          <BsArrowLeft/>
        </button>
      </div>


      <div>
      <div className={`flex ${book%2===0 ? "flex-row" : "flex-row-reverse"}  w-full justify-between transform ${isSkewed ? move : 'translate-x-0'}  transition-transform duration-500 ease-in-out`}>
        <a href='/featuredbook[i]' className='flex flex-col w-1/2 max-md:w-full items-center justify-center px-10 pt-10 cursor-pointer'>
          <div className=''>
          <h2 className="flex w-full justify-center items-center py-2 font-['Inter'] text-indigo-900 font-semibold text-4xl sm:text-3xl max-md:block hidden mb-5">Feature Book</h2>
          </div>
          <div className='max-sm:h-[200px] flex items-center'>
          <img src={featBooks[book].image} alt="featurebook" className='object-contain p-1 w-full h-full'/>
          </div>
        </a>

        <div className='w-1/2 flex flex-col justify-center max-md:hidden block'>
        <div className={`h-full my-20 flex flex-col justify-evenly ${book%2 === 0 ? "items-start" : "items-end"} p-20 font-['Inter'] text-indigo-900 max-sm:hidden block`}>
          <h2 className="text-5xl font-semibold">Featured Book</h2>

          <div className="mt-5 flex flex-col">
            <div className={`flex ${book%2 === 0 ? "justify-start" : "justify-end"} `}>
            <div className='w-[101px] h-0.5 bg-red-500' />
            </div>
            <p className='uppercase tracking-widest mt-3 text-sm text-zinc-500'>by {featBooks[book].author}</p>
          </div>

          <div className={`flex flex-col w-full ${book%2 === 0 ? "items-start" : "items-end"}`}>
            <p className='mb-4 text-2xl font-semibold '>{featBooks[book].heading}</p>
          
            <p className='text-neutral-500 text-base font-normal max-lg:hidden block'>{featBooks[book].desc}</p>
          </div>

         <div>
          <div class="text-red-500 text-2xl font-bold font-['Inter'] capitalize tracking-wide">$ {featBooks[book].price}</div>
         </div>

          <a href='/featuredbooks' className='mt-10'>
            <button onClick={()=>{}} className="flex items-center gap-2 border-[1px] border-indigo-900 text-indigo-900 rounded-lg py-3 px-5 hover:scale-105">
              <p className='uppercase tracking-wide font-normal leading-9 flex gap-1 '>Read More</p> <BsArrowRight />
            </button>
          </a>
        </div>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <div className='flex gap-1 mb-5'>
            {featBooks.map((featurebook, index)=>(
              <div className={`p-3 ${index===book && "border-[1px] border-red-500 rounded-full"}`}>
                <div className={`w-3 h-3 rounded-full ${index===book ? "bg-red-500 " : 'bg-stone-300'}`}/>
              </div>
            ))}
          </div>
        </div>

      </div>

  

      <div className='h-auto flex flex-col justify-center items-center p-3'>
        <button onClick={()=>handleArrowPress('right')} className='border-[1px] border-[#ED553B] bg-white p-2 rounded-full hover:bg-[#ED553B] text-[#ED553B] hover:text-white'>
          <BsArrowRight/>
        </button>
      </div>
    </div>

  )
}

export default FeaturedBook