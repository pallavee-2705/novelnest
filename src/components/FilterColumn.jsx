import React, {useState, useEffect} from 'react';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineSearch } from "react-icons/ai";
import { ImCancelCircle } from "react-icons/im";

import { styles } from '../styles';

const languageOptions = [
    { label: 'English', value: 'en' },
    { label: 'Spanish', value: 'es' },
    { label: 'French', value: 'fr' },
    { label: 'Russian', value: 'ru' },
  ];

const FilterColumn = ({updateFilterData, setIsFilter}) => {
    const [price, setPrice] = useState(true);
    const [writer, setWriter] = useState(false);
    const [language, setLanguage] = useState(false);
    const [bookType, setBookType] = useState(false);
    const [isPaperBack, setIsPaperBack] = useState(true);

    const [form, setForm] = useState({
        search: "",
        author: "",
        languages: [],
        book_type: "",

    })

    const handlebuttonPressed = (filter) => {
        if(filter === 0)
        {
            setPrice((prev) => !prev)
        } else if (filter === 1) {
            setLanguage((prev) => !prev)
        } else if (filter === 2) {
            setBookType((prev) => !prev)
        } else if (filter === 3) {
            setWriter((prev) => !prev)
        }
    }

    const handleInput = (e) => {
        const { name, value, type, checked } = e.target;

        console.log(name, value, type, checked);
    
        if (type === 'checkbox' && name === 'lang') {
            // Create a copy of the current form.languages array
            const updatedLanguages = [...form.languages];

            if (checked) {
            // If the checkbox is checked, add the language to the array
            updatedLanguages.push(value);
            } else {
            // If the checkbox is unchecked, remove the language from the array
            const index = updatedLanguages.indexOf(value);
            if (index !== -1) {
                updatedLanguages.splice(index, 1);
            }
            }

            // Update the filter data with the updated languages
            updateFilterData({ languages: updatedLanguages });
        } else if (name === 'search' || name === 'author') {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
            }));
            updateFilterData({[name]:value});
        }
    }

    useEffect(() => {
        const detail = isPaperBack ? 'books' : 'magazines';
        console.log(detail)
        updateFilterData({ book_type: detail });
      }, [isPaperBack]);

    
  return (
    <div className="relative">
        <div className="flex flex-col items-center gap-2 ">
            <button onClick={()=>setIsFilter(false)} className='hidden max-sm:block mb-2 cursor-pointer hover:scale-105'>
                <ImCancelCircle className='w-8 h-8' />
            </button>
            <div className='border-[2px] border-indigo-900 w-full text-indigo-900 flex justify-center py-1 mb-4 font-medium font-semibold tracking-wide cursor-pointer shadow-md '>Filter</div>
        </div>

        {/* Search - working */}
        <div className='flex flex-col w-full mb-3'>
            <div className={`${styles.filterContainer}`}>
                <div>Search</div>
                <div className={`${styles.filterIcon}`}>
                    <button 
                        onClick={()=>handlebuttonPressed(0)}
                        className={`transition-all duration-500 ease-in-out ${price ? "rotate-180":"rotate-0"}`}
                        >
                        {!price ? <AiOutlinePlus className='w-5 h-5 '/> : <AiOutlineMinus className='w-5 h-5 '/>}
                    </button>
                </div>
            </div>
                        

            <div className={`transition-all h-auto duration-500 ease-in-out ${price ? 'relative translate-y-0' : 'absolute w-full top-0 -translate-y-full opacity-0 z-[-10]'}`}>
                <div className='flex gap-2 items-center justify-between py-2 my-2'>
                    <div className='flex items-center'>
                        <input
                            type="text"
                            name="search"
                            value={form.search}
                            onChange={handleInput}
                            placeholder='Type book name here...'
                            className={`${styles.priceContainer}`}
                        />
                    </div>
                    <div className='flex items-center h-full'><AiOutlineSearch size={20} /></div>
                </div>

            </div>
        </div>

        {/* Author - working */}
        <div className='flex flex-col w-full mb-3'>
            <div className={`${styles.filterContainer}`}>
                <div>Author</div>
                <div className={`${styles.filterIcon}`}>
                    <button 
                        onClick={()=>handlebuttonPressed(3)}
                        className={`transition-all duration-500 ease-in-out ${writer ? "rotate-180":"rotate-0"}`}
                        >
                        {!writer ? <AiOutlinePlus className='w-5 h-5 '/> : <AiOutlineMinus className='w-5 h-5 '/>}
                    </button>
                </div>
            </div>
                        

            <div className={`transition-all h-auto duration-500 ease-in-out ${writer ? 'relative translate-y-0' : 'absolute w-full top-0 -translate-y-full opacity-0 z-[-10]'}`}>
                <div className='flex gap-2 items-center justify-between py-2 my-2'>
                    <div className='flex items-center'>
                        <input
                            type="text"
                            name="author"
                            value={form.author}
                            onChange={handleInput}
                            placeholder='author'
                            className={`${styles.priceContainer}`}
                        />
                    </div>
                    <div className='flex items-center h-full'><AiOutlineSearch size={20} /></div>
                </div>

            </div>
        </div>

        {/* Languages */}
        <div className='flex flex-col w-full my-3'>
            <div className={`${styles.filterContainer}`}>
                <div>Languages</div>
                <div className={`${styles.filterIcon}`}>
                    <button 
                        onClick={()=>handlebuttonPressed(1)}
                        className={`transition-all duration-500 ease-in-out ${language ? "rotate-180":"rotate-0"}`}
                        >
                        {!language ? <AiOutlinePlus className='w-5 h-5 '/> : <AiOutlineMinus className='w-5 h-5 '/>}
                    </button>
                </div>
            </div>
                        

            <div className={`transition-all h-auto duration-500 ease-in-out ${language ? 'relative translate-y-0' : 'absolute w-full top-[20%] -translate-y-full opacity-0 z-[-10]'}`}>
                <div className='border border-indigo-900 bg-gray-300 rounded-md shadow-md h-[60px] overflow-scroll no-scrollbar p-2 my-2'>
                    {languageOptions.map((lang, index)=>(
                        <label key={index} className='flex items-center space-2'>
                            <input type='checkbox' value={lang.value} name='lang' onChange={handleInput} className='text-blue-600 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 h-5 w-5' />
                            <span className='w-full text-center tracking-widest max-md:tracking-tight leading-loose font-medium text-indigo-900 hover:scale-105'>{lang.label}</span>
                        </label>
                    ))}
                </div>
            </div>
        </div>

        {/* Book Type */}
        <div className='flex flex-col w-full my-3'>
            <div className={`${styles.filterContainer}`}>
                <div>Book Type</div>
                <div className={`${styles.filterIcon}`}>
                    <button 
                        onClick={()=>handlebuttonPressed(2)}
                        className={`transition-all duration-500 ease-in-out ${bookType ? "rotate-180":"rotate-0"}`}
                        >
                        {!bookType ? <AiOutlinePlus className='w-5 h-5 '/> : <AiOutlineMinus className='w-5 h-5 '/>}
                    </button>
                </div>
            </div>
                        

            <div className={`transition-all h-auto duration-500 ease-in-out ${bookType ? 'relative translate-y-0' : 'absolute w-full top-[60%] -translate-y-full opacity-0 z-[-10]'}`}>
                <div className='h-auto p-1 my-2 flex flex-col items-center gap-y-1'>
                    <button type='button' onClick={()=>setIsPaperBack(true)} className={`${isPaperBack ? 'bg-indigo-900 text-white' : 'bg-gray-200 text-indigo-900'} ${styles.bookTypeButton}`}>Book</button>
                    <button type='button' onClick={()=>setIsPaperBack(false)} className={`${!isPaperBack ? 'bg-indigo-900 text-white' : 'bg-gray-200 text-indigo-900'} ${styles.bookTypeButton}`}>Magazine</button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default FilterColumn