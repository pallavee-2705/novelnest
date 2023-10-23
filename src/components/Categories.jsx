import React,{useState} from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { categories1, categories2, categories3 } from "../assets";

import { styles } from '../styles';

const Categories = () => {
  const [categories, setCategories] = useState(0)
  const [viewMore, setViewMore] = useState(false);

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

  const handleViewButton = () => {
    setViewMore((prev) => !prev);
  }

  console.log("categories-",categories);
  // console.log(button);
  console.log("view more button- ",viewMore);

  return (
    <div className='p-10 mx-12 mt-12 mb-8 flex flex-col justify-between'>
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

      <div className={`w-full mt-8 transiton-height delay-100 duration-1000 ${viewMore ? "xs:h-[1250px] max-sm:h-[1600px] h-[500px]" : "max-sm:h-[800px] h-[250px]"} relative`}>
        <div className={`absolute top-0 left-0  flex flex-row max-sm:flex-col justify-around items-center gap-10 transition-all delay-100 duration-1000 ease-in-out ${categories===0 && viewMore && 'opacity-100'} ${categories===1 && viewMore && 'opacity-100'} ${categories===1 && !viewMore && 'opacity-0'}  `}>
          <div >
            <a href='/categories[i]'>
              <img src={categories1} alt="categories1" className={`${styles.categoryPics}`} />
              <p className={`${styles.categoryHeadings}`}>Higher Education 1</p>
            </a>
          </div>
          <div className=''>  
            <a href='/categories[i]'>
              <img src={categories2} alt="categories2" className={`${styles.categoryPics}`} />
              <p className={`${styles.categoryHeadings}`}>Management Books 1</p>
            </a>
          </div>
          <div className=''>
            <a href='/categories[i]'>
              <img src={categories3} alt="categories3" className={`${styles.categoryPics}`} />
              <p className={`${styles.categoryHeadings}`}>Engineering Books 1</p>
            </a>
          </div>        
        </div>

        <div className={`absolute top-0 left-0  flex flex-row max-sm:flex-col  justify-around items-center gap-10 transition-all duration-1000 ease-in-out ${categories===0 && viewMore && 'opacity-100 translate-y-[105%] mb-6'} ${categories===1 && viewMore && 'opacity-100 translate-y-[105%] mb-6'} ${categories===0 && !viewMore && 'opacity-0'}    `} >
          <div >
            <a href='/categories[i]'>
              <img src={categories3} alt="categories3" className={`${styles.categoryPics}`}/>
              <p className={`${styles.categoryHeadings}`}>Engineering Books</p>
            </a>
          </div>
          <div className=''>
            <a href='/categories[i]>@####'>
              <img src={categories2} alt="categories2" className={`${styles.categoryPics}`}/>
              <p className={`${styles.categoryHeadings}`}>Management Books</p>
            </a>
          </div>
          <div >
            <a href='/categories[i]'>
              <img src={categories1} alt="categories1" className={`${styles.categoryPics}`}/>
              <p className={`${styles.categoryHeadings}`}>Higher Education</p>
            </a>
          </div>
        </div>
      </div>

      <div className={`font-['Inter'] w-full flex justify-center mt-7  ${viewMore && " pt-4 "}`}>
        <button onClick={()=>handleViewButton()} className="flex items-center gap-2 border-[1px] border-indigo-900 text-indigo-900 rounded-lg py-3 px-5 hover:scale-105">
          <p className='uppercase tracking-wide font-normal leading-9 flex gap-1 '>View {viewMore ? <p>Less</p> : <p>More</p>}</p> <BsArrowRight />
        </button>
      </div>
    </div>
  )
}

export default Categories