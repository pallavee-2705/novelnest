import React, { useState, useEffect } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";

const options = [3, 6, 9, 12];

const SortBar = ({page, itemsPerPage, setItemsPerPage, totalItems}) => {
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
    <div className="flex justify-between p-10 font-['Inter']  font-semibold text-indigo-900">
        <div className='sm:hidden'>filter button</div>
        <div>sort by</div>
        <div>Showing {start} - {end} of {totalItems} result</div>
        <div className='relative'>
            <button onClick={()=>{setIsDropDown((prev)=>!prev)}} className='flex items-center'>Show : {itemsPerPage} <RiArrowDropDownLine size={30}/> </button>
            {isDropDown && (
                <div className='absolute right-0 w-[100%] bg-gray-100 rounded-md shadow'>
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
        <div>view buttons</div>
    </div>
  )
}

export default SortBar