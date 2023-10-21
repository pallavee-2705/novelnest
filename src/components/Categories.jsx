import React,{useState} from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { categories1, categories2, categories3 } from "../assets";

import { styles } from '../styles';

const Categories = () => {
  const [categories, setCategories] = useState(0)
  const [button, setButton] = useState(false);

  const handleArrowPress = (direction) => {
    if(direction === 'left')
    {
      setCategories(0);
    }

    if(direction === 'right')
    {
      setCategories(1);
    }
    
  }

  const handleButtonPress = () => {
    setButton((prev) => !prev);

    if(button===true)
    {
      setCategories(2);
    } else if(button === false)
    {
      setCategories(0);
    }
  }

  console.log(categories);
  console.log(button);

  return (
    <div className='p-10 '>
      <div className='flex w-full justify-between'>
        <div>
          <div className='flex items-center gap-2'>
            <div className='w-8 h-[2px] bg-red-500'/>
            <p className="text-red-500 text-sm font-bold tracking-wider font-['Inter']">Categories</p>
          </div>
          <div className="text-indigo-900 font-bold font-['Inter'] text-3xl leading-10 mt-2">Explore Our Top Categories</div>
        </div>
        <div className='flex gap-3 block max-md:hidden py-3'>
          <button onClick={()=>handleArrowPress('left')} className='p-3 border-[1px] border-[#ED553B] bg-white p-2 rounded-full  text-[#ED553B] hover:scale-105'>
            <BsArrowLeft/>
          </button>
          <button onClick={()=>handleArrowPress('right')} className='p-3 border-[1px] border-[#ED553B] p-2 rounded-full bg-[#ED553B]  text-white hover:scale-105'>
            <BsArrowRight/>
          </button>
        </div>
      </div>

      <div className='w-full mt-8'>
        <div className={`flex flex-row max-sm:flex-col  justify-around items-center gap-10 ${categories===0 || categories===2 ? "block": "hidden"}`}>
        <div className={`${styles.categoryPics}`}>
          <a href='https://www.youtube.com'>
            <img src={categories1} alt="categories1" />
            <p className={`${styles.categoryHeadings}`}>Higher Education</p>
          </a>
        </div>
        <div className=''>
          <a href='https://www.youtube.com'>
            <img src={categories2} alt="categories2" />
            <p className={`${styles.categoryHeadings}`}>Management Books</p>
          </a>
        </div>
        <div className=''>
          <a href='https://www.youtube.com'>
            <img src={categories3} alt="categories3" />
            <p className={`${styles.categoryHeadings}`}>Engineering Books</p>
          </a>
        </div>        
        </div>

        <div className={`flex flex-row max-sm:flex-col  justify-around items-center gap-10 ${categories===1 || categories===2 ? "block": "hidden"}`}>
        <div className=''>
          <a href='https://www.youtube.com'>
            <img src={categories3} alt="categories3" />
            <p className={`${styles.categoryHeadings}`}>Engineering Books</p>
          </a>
        </div>
        <div className=''>
          <a href='https://www.youtube.com'>
            <img src={categories2} alt="categories2" />
            <p className={`${styles.categoryHeadings}`}>Management Books</p>
          </a>
        </div>
        <div className={`${styles.categoryPics}`}>
          <a href='https://www.youtube.com'>
            <img src={categories1} alt="categories1" />
            <p className={`${styles.categoryHeadings}`}>Higher Education</p>
          </a>
        </div>
        </div>
      </div>
      <div className="font-['Inter'] w-full flex justify-center mt-7">
        <button onClick={()=>handleButtonPress()} className="flex items-center gap-2 border-[1px] border-indigo-900 text-indigo-900 rounded-lg py-3 px-5 hover:scale-105">
          <p className='uppercase tracking-wide font-normal leading-9 flex gap-1 '>View {button ? <p>More</p> : <p>Less</p>}</p> <BsArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Categories