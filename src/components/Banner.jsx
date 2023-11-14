import React, {useState, useEffect, useRef} from 'react';
import { banner1, banner2, banner3, banner4 } from '../assets';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const banners = [
  {
    heading: "The Song of Achilles",
    bookid: "/opC3d3ltQ94C",
    desc: "A tale of gods, kings, immortal fame, and the human heart, The Song of Achilles is a dazzling literary feat that brilliantly reimagines Homer’s enduring masterwork, The Iliad.",
    image: banner2,
  },
  {
    heading: "Fangirl: A Novel",
    bookid: "/Boj-DwAAQBAJ",
    desc: "In Rainbow Rowell's Fangirl, Cath is a Simon Snow fan. Okay, the whole world is a Simon Snow fan, but for Cath, being a fan is her life―and she's really good at it.",
    image: banner1,
  },
  {
    heading: "The Cliffside Inn",
    bookid: "/BIQEEAAAQBAJ",
    desc: "Spend another month in Five Island Cove and experience an amazing adventure between five best friends, the challenges they face, the secrets threatening to come between them, and their undying support of each other.",
    image: banner4,
  },
  {
    heading: "Meet Me at the Lake",
    bookid: "/f1d-EAAAQBAJ",
    desc: "After, a random connection sends two strangers on a daylong adventure where they make a promise one keeps and the other breaks, with life-changing effects. Fern Brookbanks has wasted far too much of her adult life thinking about Will Baxter.",
    image: banner3,
  },
];


const Banner = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(false);
  const bannerRef = useRef(null);

  const handleArrowPress = async (direction) => {
    if (direction === 'left' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      console.log("left");
    } else if (direction === 'right' && currentIndex < 3) {
      setCurrentIndex(currentIndex + 1);   
      console.log("right");
    }

    setButtonPressed(true);

    setTimeout(() => {
      setButtonPressed(false);
    }, 1000)

  }

  useEffect(() => {
    const translateX = -currentIndex * 25;

    bannerRef.current.style.transform = `translateX(${translateX}%)`;
  }, [currentIndex]);

  // console.log(buttonPressed, currentIndex);

  return (
    <div id="Home" className="w-auto h-[500px] px-5 bg-gradient-to-r from-[#FFE5E5] via-[#F5FFFE] to-[#FFFFFF] flex flex-row justify-evenly">
      <div className='h-full flex flex-col justify-center items-center p-3'>
        <button onClick={()=>handleArrowPress('left')} className='border-[1px] border-[#ED553B] bg-white p-2 rounded-full hover:bg-[#ED553B] text-[#ED553B] hover:text-white'>
          <BsArrowLeft/>
        </button>
      </div>

      <div className='w-full h-full overflow-hidden'>
        <div ref={bannerRef} className='relative h-full w-[400%] flex justify-between delay-100  transition-all duration-1000 ease-in-out'>
          {banners.map((banner, index) => (
            <div key={index} className='relative h-full w-1/4 p-10 max-sm:p-1 flex justify-start'>
            <div className=' flex flex-row w-full justify-between gap-10 max-sm:gap-0 max-sm:flex-col-reverse'>
              <div className="w-1/2 max-sm:w-full max-sm:h-1/3 flex flex-col justify-center gap-3 font-['Inter'] text-indigo-900 ">
                <div className="text-5xl max-lg:text-3xl max-sm:text-xl font-semibold tracking-wide">{banner.heading}</div>
                <p className='font-medium text-lg max-lg:text-sm text-opacity-80 tracking-wider max-sm:hidden block'>{banner.desc}</p>
                <div className='my-2 '> 
                  <a href={banner.bookid} className="flex w-1/2 max-sm:w-full items-center justify-center gap-2 border-[1px] border-indigo-900 rounded-lg py-3 px-5 hover:bg-white">
                    <p className='uppercase tracking-wide font-normal leading-9 max-lg:text-xs'>Read More</p> <BsArrowRight className='max-md:w-5 max-md:h-5'/>
                  </a>
                </div>
                
              </div>
  
              <div className='h-2/3'>      
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
