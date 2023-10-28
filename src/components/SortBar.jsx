import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BsFillGridFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { BsFillFilterSquareFill } from "react-icons/bs";
import FilterColumn from "./FilterColumn";

const options = [3, 6, 9, 12];

const SortBar = ({page, itemsPerPage, setItemsPerPage, totalItems, isGrid, toggleIsGrid, setIsFilter}) => {
  const [isDropDown, setIsDropDown] = useState(false);
  const [start, setStart] = useState(1)
  const [end, setEnd] = useState(6)
  

  const calculateBookRange = () => {
    const startIndex = (page - 1) * itemsPerPage + 1;
    setStart(startIndex);

    const endIndex = Math.min(startIndex + itemsPerPage - 1, totalItems);
    setEnd(endIndex)
  };

  useEffect(() => {      
      calculateBookRange();
  }, [])

  useEffect(() => {      
     calculateBookRange();
  }, [page, itemsPerPage])  

  return (
    <div className="relative flex flex-wrap gap-2 justify-between max-md:justify-evenly items-center p-10 font-['Inter']  font-semibold text-indigo-900">
        <button onClick={()=>setIsFilter(true)} className='sm:hidden'><BsFillFilterSquareFill className='w-5 h-5 hover:text-indigo-700' /></button>
        <div>sort by - alphabetically A-Z</div>
        <div>Showing {start} - {end} of {totalItems} result</div>
        <div className='relative'>
            <button onClick={()=>{setIsDropDown((prev)=>!prev)}} className='flex items-center'>Show : {itemsPerPage} <RiArrowDropDownLine size={30}/> </button>
            {isDropDown && (
                <div className='absolute right-0 w-[100%] bg-gray-100 z-10 rounded-md shadow'>
                    {options.map((num, index) => (
                    <button 
                        onClick={()=>{
                            setItemsPerPage(num)
                            setIsDropDown(false)
                        }}
                        key={index} className='flex w-full justify-center cursor-pointer border-b-[2px] border-gray-200 hover:text-lg'
                    >
                        {num}
                    </button>
                    ))}
                </div>
            )}
        </div>
        <div className='flex justify-between items-center gap-5  '>
            <button onClick={toggleIsGrid} ><BsFillGridFill className={`${isGrid && 'text-red-500'} w-5 h-5 transition-all duration-100 ease-in-out hover:scale-110`} /></button>
            <button onClick={toggleIsGrid} ><BiMenu className={`${!isGrid && 'text-red-500'} w-7 h-7 transition-all duration-100 ease-in-out hover:scale-110 `} /></button>
        </div>
    </div>
  )
}

export default SortBar