import React, {useState, useEffect} from 'react';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { styles } from '../styles';

const languageOptions = ['English', 'Spanish', 'French', 'Russian']

const FilterColumn = () => {
    const [price, setPrice] = useState(true);
    const [language, setLanguage] = useState(false);
    const [bookType, setBookType] = useState(false);
    const [isPaperBack, setIsPaperBack] = useState(true);

    const [form, setForm] = useState({
        low_price:"",
        high_price:"",
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
            console.log("cvbnmcvb")
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
    
            // Update the form state with the updated languages array
            setForm((prevForm) => ({
                ...prevForm,
                languages: updatedLanguages,
            }));
        } else if (name === 'low_price' || name === 'high_price') {
            setForm((prevForm) => ({
                ...prevForm,
                [name]: value,
            }));
        }
    }

    useEffect(() => {
        setForm((prevForm) => ({
            ...prevForm,
            book_type: isPaperBack ? 'Paperback' : 'Soft Copy',
        }));
    }, [isPaperBack])
    
    const handleFilterButton = () => {
        console.log(form)
    }
    

    // console.log(form)
    // console.log("price",price);
    // console.log("language",language);

  return (
    <div className="relative">
        {/* Price - working */}
        <div className='flex flex-col w-full mb-3'>
            <div className={`${styles.filterContainer}`}>
                <div>Price</div>
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
                <div className='flex flex-wrap justify-between py-2 my-2'>
                    <div className='flex gap-2 items-center'>
                        <p>$</p>
                        <input
                            type="text"
                            name="low_price"
                            value={form.low_price}
                            onChange={handleInput}
                            placeholder='10'
                            className={`${styles.priceContainer}`}
                        />
                    </div>
                        <p className='text-zinc-500 text-lg font-medium tracking-wide max-lg:hidden'>to</p>
                    <div className='flex gap-2 items-center'>
                        <p>$</p>
                        <input
                            type="text"
                            name="high_price"
                            value={form.high_price}
                            onChange={handleInput}
                            placeholder='100'
                            className={`${styles.priceContainer}`}
                        />
                    </div>
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
                            <input type='checkbox' value={lang} name='lang' onChange={handleInput} className='text-blue-600 border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 h-5 w-5' />
                            <span className='w-full text-center tracking-widest max-md:tracking-tight leading-loose font-medium text-indigo-900 hover:scale-105'>{lang}</span>
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
                    <button type='button' onClick={()=>setIsPaperBack(true)} className={`${isPaperBack ? 'bg-indigo-900 text-white' : 'bg-gray-200 text-indigo-900'} ${styles.bookTypeButton}`}>Paperback</button>
                    <button type='button' onClick={()=>setIsPaperBack(false)} className={`${!isPaperBack ? 'bg-indigo-900 text-white' : 'bg-gray-200 text-indigo-900'} ${styles.bookTypeButton}`}>soft copy</button>
                </div>
            </div>
        </div>
        

        {/* static */}
        <div className='relative flex justify-between items-center border-b-[2px] border-neutral-200 pb-2 my-3'>
            <div>Availabilty</div>
            <div><AiOutlinePlus className='w-5 h-5' /></div>
        </div>

        <button type="submit" onClick={handleFilterButton} className='bg-indigo-900 w-full text-white flex justify-center py-1 my-2 font-medium font-light tracking-wide transition-hover duration-200 hover:scale-105 hover:bg-indigo-600 hover:shadow-lg'>Filter</button>
    </div>
  )
}

export default FilterColumn