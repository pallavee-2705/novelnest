import React,{useState, useEffect, useRef} from 'react';
import {FilterColumn, BookCard, SortBar} from "../components";
// import { banner1, featurebook, newrelease1, newrelease2 } from '../assets';
import env from "react-dotenv";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// const Books = [
//   {
//     heading: "To Kill a Mockingbird",
//     desc: "A powerful exploration of racial injustice and moral growth in the American South during the 1930s, as seen through the eyes of a young girl named Scout Finch.",
//     image: featurebook,
//     author:'Timbur Wood',
//     price:"45.00",
//   },
//   {
//     heading: "1984",
//     desc: "Sed sit amet faucibus libero. Fusce congue vitae arcu sit amet convallis. Vivamus blandit, ipsum non dignissim. Nulla facilisi. Proin vestibulum, ante id mollis.",
//     image: banner1,
//     author:'Timbur Wood',
//     price:"145.00",
//   },
//   {
//     heading: "Pride and Prejudice",
//     desc: "Vestibulum eu leo sit amet, consectetur adipiscing elit. Sed ut eleifend velit, vel eleifend nisi. Sed porta, est a feugiat euismod, libero ipsum enim.",
//     image: newrelease1,
//     author:'Timbur Wood',
//     price:"299.00",
//   },
//   {
//     heading: "The Great Gatsby",
//     desc: "Mauris ac est a justo hendrerit feugiat. Nullam malesuada, ligula ac accumsan. Aliquam tincidunt, nulla ac convallis. Fusce suscipit dui et lorem dignissim.",
//     image: newrelease2,
//     author:'Timbur Wood',
//     price:"75.00",
//   },
//   {
//     heading: "Pride and Prejudice",
//     desc: "Vestibulum eu leo sit amet, consectetur adipiscing elit. Sed ut eleifend velit, vel eleifend nisi. Sed porta, est a feugiat euismod, libero ipsum enim.",
//     image: newrelease1,
//     author:'Timbur Wood',
//     price:"50.00",
//   },
//   {
//     heading: "The Great Gatsby",
//     desc: "Mauris ac est a justo hendrerit feugiat. Nullam malesuada, ligula ac accumsan. Aliquam tincidunt, nulla ac convallis. Fusce suscipit dui et lorem dignissim.",
//     image: newrelease2,
//     author:'Timbur Wood',
//     price:"95.00",
//   },
// ];

const Store = () => {

  const [Books, setBooks] = useState([])

  const [page, setPage] = useState(1)

  const [itemsPerPage, setItemsPerPage] = useState(6);

  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const pageRef = useRef(null);

  const [filterData, setFilterData] = useState({
    low_price:"",
    high_price:"",
    languages: [],
    book_type: "",
  })

  const updateFilterData = (newFilterData) => {
    setFilterData({ ...filterData, ...newFilterData });
  };

  const pageButtonPress = (direction) => {
    if(direction === 'left' && page>1)
    {
      setPage((prev) => prev-1);
    } else if(direction === 'right')
    {
      setPage((prev) => prev+1);
    }
  }

  const apiKey = env.PUBLIC_BOOK_API_KEY;
  const query = 'fault in our stars'; // Replace with your search query

  // Calculate the startIndex based on the current page and itemsPerPage
  const startIndex = (page - 1) * itemsPerPage;

  const filter = 'paid-ebooks';

  // Make a GET request to the Google Books API with maxResults parameter
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
  }, [])

  useEffect(() => {

    const newData = async () => {
      const {low_price, high_price, languages, book_type} = filterData;
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&startIndex=${startIndex}&maxResults=${itemsPerPage}&langRestrict=${languages}`);
    
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
 
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <div className="min-h-screen">
      {/* Heading */}
      <div className="bg-gradient-to-r from-rose-100 to-teal-100 h-[100px] flex items-center justify-center">
        <p className="font-['Inter'] uppercase text-xl font-medium text-indigo-900 tracking-wide leading-loose">Home / Products</p>
      </div>
      {/* Filter Column */}
      <div className="flex h-auto">
        <div className="w-1/4 sm:block hidden p-10 font-['Inter'] font-bold text-indigo-900 leading-loose">
          <FilterColumn updateFilterData={updateFilterData} />
        </div>

        {/* main column */}
        <div className="max-sm:w-full w-3/4 ">
          {/* Second Menu - Sort Bar */}
          <SortBar page={page} itemsPerPage={itemsPerPage} setItemsPerPage={setItemsPerPage} totalItems={totalItems}/>
         
          {/* GRID */}
          <div className='h-auto grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-4 max-sm:px-10'>
            {Books.map((book, index) => {
              return (
                <div key={index} className='h-[600px]'><BookCard book={book}/></div>
              )
            })}
          </div>
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