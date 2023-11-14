import React, { useState, useEffect } from 'react';

const BookRow = ({book}) => {
    const [isBookData, setIsBookData] = useState(false);

    useEffect(() => {
        if (book !== null) {
        setTimeout(() => {
            setIsBookData(true);
        }, 1500)
        } else {
        // Set isBookData to false while waiting for data
        setTimeout(() => {
            setIsBookData(false);
        }, 500)
        }
        
    }, [book]);

    // console.log(book);

  return (
    <>
    {book.saleInfo.listPrice?.amount ? (
        <a href={`${book.id}`}>
            <div className={`border-[1px] bg-white shadow border border-stone-200 rounded-md tansition-hover duration-200 ease-in-out ${!book.saleInfo.listPrice?.amount ? 'opacity-60' : 'hover:scale-105'}`}>
                <div className="flex justify-between items-center p-5">
                    <div className='flex items-center gap-2 hover:cursor-pointer'>
                        <div>
                            {isBookData ? (
                                <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className={`bg-red-500 w-20 h-20 ${!book.saleInfo.listPrice?.amount && 'opacity-30'}`} />
                            ) : (
                                <div className="animate-pulse w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
                            )}
                        </div>
                        <div className="w-auto">
                            {isBookData ? (
                                <p className="text-indigo-900 text-md text-center font-semibold font-['Inter'] capitalize hover:underline" >{book.volumeInfo.title}</p>
                            ) : (
                                <div className="animate-pulse w-[100px] h-[20px] bg-gray-300 rounded-md my-1"></div>
                            )}

                            {isBookData ? (
                                <div className="text-zinc-500 text-sm font-normal font-['Inter'] capitalize tracking-tight hover:underline" >{book.volumeInfo.authors}</div>
                            ) : (
                                <div className="animate-pulse w-[50px] h-[20px] bg-gray-300 rounded-md my-1"></div>
                            )}
                        </div>
                    </div>
                    {isBookData ? (
                        <div className="h-5 text-red-500 text-lg font-bold font-['Inter'] capitalize tracking-wide hover:underline p-2 h-full" >$ {book.saleInfo.listPrice?.amount}</div>
                    ) : (
                        <div className="animate-pulse w-[60px] h-[20px] bg-gray-300 rounded-md"></div>
                    )}
                </div>
            </div>
        </a>
    ) : (
        <div className={`relative border-[1px] bg-white shadow border border-stone-200 rounded-md tansition-hover duration-200 ease-in-out ${!book.saleInfo.listPrice?.amount ? 'opacity-60' : 'hover:scale-105'}`}>
            <div className="flex justify-between items-center p-5">
                <div className='flex items-center gap-2 hover:cursor-pointer'>
                    <div>
                        {isBookData ? (
                            <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} className={`bg-red-500 w-20 h-20 ${!book.saleInfo.listPrice?.amount && 'opacity-30'}`} />
                        ) : (
                            <div className="animate-pulse w-[100px] h-[100px] bg-gray-300 rounded-md"></div>
                        )}
                    </div>
                    <div className="">
                    {isBookData ? (
                        <p className="text-indigo-900 text-md text-center font-semibold font-['Inter'] capitalize hover:underline" >{book.volumeInfo.title}</p>
                    ) : (
                        <div className="animate-pulse w-[100px] h-[20px] bg-gray-300 rounded-md my-1"></div>
                    )}

                    {isBookData ? (
                        <div className="text-zinc-500 text-sm font-normal font-['Inter'] capitalize tracking-tight hover:underline" >{book.volumeInfo.authors}</div>
                    ) : (
                        <div className="animate-pulse w-[50px] h-[20px] bg-gray-300 rounded-md my-1"></div>
                    )}
                    </div>
                </div>
                {isBookData ? (
                    <div className="h-5 text-red-500 text-lg font-bold font-['Inter'] capitalize tracking-wide hover:underline p-2 h-full" >$ {book.saleInfo.listPrice?.amount}</div>
                ) : (
                    <div className="animate-pulse w-[60px] h-[20px] bg-gray-300 rounded-md"></div>
                )}
            </div>
            <div className='absolute top-[40%] bg-gray-300 text-black flex w-full justify-center items-center text-xl italic'>Out of Stock.</div>
        </div>
    )}
    </>
  )
}

export default BookRow