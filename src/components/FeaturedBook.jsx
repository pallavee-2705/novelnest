import React, {useState} from 'react';
import { featurebook1, featurebook2, featurebook3, featurebook4 } from '../assets';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const featBooks = [
  {
    heading: "To Kill a Mockingbird",
    bookid: "/PGR2AwAAQBAJ",
    desc: "A powerful exploration of racial injustice and moral growth in the American South during the 1930s, as seen through the eyes of a young girl named Scout Finch.",
    image: featurebook1,
    author:'Harper Lee',
    price:"11.99",
  },
  {
    heading: "1984",
    bookid: "/PEpoEAAAQBAJ",
    desc: "Among the seminal texts of the 20th century, Nineteen Eighty-Four is a rare work that grows more haunting as its futuristic purgatory becomes more real. Published in 1949, the book offers political satirist George Orwell's nightmarish vision of a totalitarian, bureaucratic world and one poor stiff's attempt to find individuality.",
    image: featurebook2,
    author:'George Orwell',
    price:"2.99",
  },
  {
    heading: "Pride and Prejudice",
    bookid:"/LOFwDwAAQBAJ",
    desc: "The romantic clash between the opinionated Elizabeth and her proud beau, Mr. Darcy, is a splendid performance of civilized sparring. And Jane Austen's radiant wit sparkles as her characters dance a delicate quadrille of flirtation and intrigue, making this book the most superb comedy of manners of Regency England.",
    image: featurebook3,
    author:'Jane Austen',
    price:"10.99",
  },
  {
    heading: "The Great Gatsby",
    bookid: "/zvvtDwAAQBAJ",
    desc: "The story of the fabulously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island at a time when The New York Times noted: Gin was the national drink and sex the national obsession! It is an exquisitely crafted tale of America in the 1920s.",
    image: featurebook4,
    author:'F. Scott Fitzgerald',
    price:"10.99",
  },
];


const FeaturedBook = () => {
  const [book, setBook] = useState(0);
  const [isSkewed, setIsSkewed] = useState(false);
  const [move, setMove] = useState('translate-x-[80px]')

  const handleArrowPress = (direction) => {
    if(direction === 'left' && book>0)
    {
      setBook((prev) => prev-1);
      setMove('-translate-x-[80px]')
    }

    if(direction === 'right' && book<=2)
    {
      setBook((prev) => prev+1);
      setMove('translate-x-[80px]')
    }

     // Apply skew effect during transition
    setIsSkewed(true);
    setTimeout(() => {
      setIsSkewed(false);
    }, 500); // Adjust the duration to match your transition
    
  }

  console.log(book);

  return (
    <div id="Featured" className="w-auto h-auto px-5 bg-gradient-to-r from-red-50 to-slate-50 flex flex-row justify-between">
      <div className='h-auto flex flex-col justify-center items-center p-3'>
        <button onClick={()=>handleArrowPress('left')} className='border-[1px] border-[#ED553B] bg-white p-2 rounded-full hover:bg-[#ED553B] text-[#ED553B] hover:text-white'>
          <BsArrowLeft/>
        </button>
      </div>


      <div>
      <div className={`flex ${book%2===0 ? "flex-row" : "flex-row-reverse"}  w-full mb-2 justify-between transform ${isSkewed ? move : 'translate-x-0'}  transition-transform duration-500 ease-in-out`}>
        <a href='/featuredbook[i]' className='flex flex-col w-1/2 max-md:w-full items-center justify-center px-10 pt-10 cursor-pointer'>
          <div className=''>
          <h2 className="flex w-full justify-center items-center py-2 font-['Inter'] text-indigo-900 font-semibold text-4xl sm:text-3xl max-md:block hidden mb-5">Feature Book</h2>
          </div>
          <div className='max-sm:h-[200px] flex items-center'>
          <img src={featBooks[book].image} alt="featurebook" className='object-contain p-1 w-auto lg:h-[500px] md:h-[500px] h-[240px]'/>
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
          
            <p className={`text-neutral-500 text-base font-normal max-lg:hidden block ${book%2 === 0 ? "text-start" : "text-end"} `}>{featBooks[book].desc}</p>
          </div>

         <div>
          <div class="text-red-500 text-2xl font-bold font-['Inter'] capitalize tracking-wide">$ {featBooks[book].price}</div>
         </div>

          <a href={featBooks[book].bookid} className='mt-10'>
          <button onClick={() => {}} className="flex items-center gap-2 border-[1px] border-indigo-900 text-indigo-900 rounded-lg py-3 px-5 hover:scale-105">
              <p className='uppercase tracking-wide font-normal leading-9 flex gap-1 '>Read More</p> <BsArrowRight />
            </button>
          </a>
        </div>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <div className='flex gap-1 mt-3 mb-5'>
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