import React,{useState, useEffect, useRef} from 'react';
import {FilterColumn, BookCard, SortBar, BookRow} from "../components";
// import { banner1, featurebook, newrelease1, newrelease2 } from '../assets';
import env from "react-dotenv";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const Store = () => {

  // total books
  const [Books, setBooks] = useState([])

  // page number
  const [page, setPage] = useState(1)

  // books per page
  const [itemsPerPage, setItemsPerPage] = useState(6);

  // total items + total pages
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // grid/row view
  const [isGrid, setIsGrid] = useState(() => {
    // Initialize isGrid from localStorage, or use a default value
    const storedIsGrid = localStorage.getItem('isGrid');
    return storedIsGrid ? JSON.parse(storedIsGrid) : true;
  });

  // filter active or not
  const [isFilter, setIsFilter] = useState(false);

  // Update isGrid state and save it in localStorage
  const toggleIsGrid = () => {
    const newIsGrid = !isGrid;
    setIsGrid(newIsGrid);
    localStorage.setItem('isGrid', JSON.stringify(newIsGrid));
  };

  const pageRef = useRef(null);

  // filter form
  const [filterData, setFilterData] = useState({
    search: "",
    author: "",
    languages: [],
    book_type: "books",
  })

  // update filer form
  const updateFilterData = (newFilterData) => {
    setFilterData({ ...filterData, ...newFilterData });
  };

  // change button function
  const pageButtonPress = (direction) => {
    if(direction === 'left' && page>1)
    {
      setPage((prev) => prev-1);
    } else if(direction === 'right')
    {
      setPage((prev) => prev+1);
    }
  }

  // BOOK QUERY parameters
  const apiKey = env.PUBLIC_BOOK_API_KEY;
  const query = 'j'; // Replace with your search query

  // Calculate the startIndex based on the current page and itemsPerPage
  const startIndex = (page - 1) * itemsPerPage;

  // Make a GET request to the Google Books API with maxResults parameter
  /* eslint-disable */
  useEffect(() => {
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&startIndex=${startIndex}&maxResults=${itemsPerPage}`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      const booksData = data.items.map(item => item);
      setBooks(booksData);
      setTotalItems(data.totalItems)
      setTotalPages(Math.ceil(totalItems / itemsPerPage));
    })
    .catch(error => {
      console.error('Error:', error);
    });

  }, [page, itemsPerPage])

  useEffect(() => {

    const newData = async () => {
      const {search, author, languages, book_type} = filterData;
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}+${author}&key=${apiKey}&startIndex=${startIndex}&maxResults=${itemsPerPage}&langRestrict=${languages}&=printType${book_type}`);
    
        if (!response.ok) {
          throw new Error(`Network response was not ok`);
        }
    
        const data = await response.json();
        const booksData = data.items.map(item => item);
        setBooks(booksData);
        setTotalPages(Math.ceil(totalItems / itemsPerPage));
      } catch (error) {
        console.error('Error:', error);
      }
    }

    newData();
  }, [filterData, page, itemsPerPage])

  useEffect(() => {
    if (pageRef.current) {
      const translateX = -(page - 1) * 20; // Adjust the formula to match your requirements
      pageRef.current.style.transform = `translateX(${translateX}%)`; // Use 'px' units
    }
  }, [page]);
  /* eslint-disable */

  
 
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="min-h-screen border-[15px] border-rose-300">
            {/* Filter Column */}
      <div className="flex h-auto relative ">
        <div className={`${isFilter ? "block" : "hidden"} w-1/4 max-sm:absolute max-sm:top-0 max-sm:w-full max-sm:bg-gray-200 max-sm:z-10 max-sm:backdrop-blur max-sm:bg-opacity-60 p-10 font-['Inter'] font-bold text-indigo-900 leading-loose`}>
          <FilterColumn updateFilterData={updateFilterData} setIsFilter={setIsFilter}/>
          
        </div>

        <div className={`${!isFilter ? "block" : "hidden"} w-1/4 p-10 font-['Inter'] font-bold text-indigo-900 leading-loose block max-sm:hidden border-r-[1px] border-gray-400`}>
        <FilterColumn updateFilterData={updateFilterData} setIsFilter={setIsFilter}/>
        </div>

        {/* main column */}
        <div className="max-sm:w-full w-3/4">
          {/* Second Menu - Sort Bar */}
          <SortBar page={page} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} totalItems={totalItems}isGrid={isGrid} toggleIsGrid={toggleIsGrid} setIsFilter={setIsFilter}/>

          {isGrid ? (
          <div className='h-auto grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-4 max-sm:px-10'>
            {Books.map((book, index) => {
              return (
                <div key={index} className='h-[600px]'><BookCard book={book}/></div>
              )
            })}
          </div>

          ) : (
            <div className='h-auto flex flex-col gap-5 pl-5 pr-10'>
              {Books.map((book, index) => {
              return (
                <div key={index} className='w-full'><BookRow book={book}/></div>
              )
            })}
            </div>
          )}

          <div className='p-4 flex justify-center items-center gap-2'>
            <button onClick={()=>pageButtonPress('left')} className='border-[1px] border-[#ED553B] bg-white p-2 rounded-full hover:bg-[#ED553B] text-[#ED553B] hover:text-white'>
              <BsArrowLeft/>
            </button>

            <div className='w-1/4 h-full overflow-hidden py-2' >
              <div ref={pageRef} className='transition-translate duration-200 ease-in'>
                {pageNumbers.map((number)=>(
                  <span key={number} className={`py-2 px-3 rounded-full border border-red-500 mx-2  ${number===page && 'bg-red-500 text-white'}`}>{number}</span>
                ))}
              </div>
            </div>

            <button onClick={()=>pageButtonPress('right')} className='border-[1px] border-[#ED553B] bg-white p-2 rounded-full hover:bg-[#ED553B] text-[#ED553B] hover:text-white'>
              <BsArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store