import React, { useEffect} from 'react';
import { useWishListContext } from '../context/WishContext';
import { useStateContext } from '../context/ShareContext';
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineHeart } from "react-icons/ai";

const WishList = () => {
    const { setShowWish, WishListItems, setWishListItems, removeItemFromWishList } = useWishListContext();
    const { onAdd } = useStateContext();

    useEffect(() => {
        const storedWishListData = localStorage.getItem('wishListData');
        // const storedQuantity = localStorage.getItem('quantity');

        if (storedWishListData) {
            setWishListItems(JSON.parse(storedWishListData));
        }
        
        // if (storedQuantity) {
        //     setTotalQuantities(parseInt(storedQuantity));
        // }
    }, [])

    const addFromWishList = (product) => {
        onAdd(product)
        removeItemFromWishList(product.id)
    }
    


    return (
    <div className="fixed top-0 right-0 z-10 bg-gradient-to-r from-red-200 to-indigo-100 w-1/2 max-md:w-full max-sm:w-full h-screen overflow-scroll p-4">
        <div className='w-full flex flex-col h-full'>

        <div className='flex justify-between items-center w-full border-b-[1px] border-black pb-2'>
            <div className="flex items-center gap-2">
                <h1 className="font-['Inter']  uppercase font-xl tracking-widest font-bold">my Wish list</h1>
            </div>
            <button onClick={()=>setShowWish(false)}><ImCancelCircle className='w-6 h-6' /></button>
        </div>

        <div className='h-full overflow-scroll px-5 bg-white border-b-[1px] border-black shadow-lg rounded-b-xl'>
            {WishListItems.length > 0 ? (
                <div>
                    {WishListItems.map((item, index) => (
                    <div key={index} className='w-full rounded-xl flex justify-between gap-2 bg-gray-200 my-5 p-5 shadow-xl'>
                        <div className=''>
                            <img src={item.image} alt={item.title} className='w-16 h-20'/>
                        </div>
                    <div className="w-full">
                        <div className="text-indigo-900 text-lg font-semibold font-['Inter'] leading-tight">{item.title}</div>
                        <div className="font-['Inter'] text-blue-600 font-medium text-lg tracking-wider">${item.price}</div>
                        <div>
                            <button onClick={()=>addFromWishList(item)} className='bg-red-500 text-white rounded-full w-full px-2 py-1 mt-2 hover:scale-105'>Add to Cart</button>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-end'>
                        <button onClick={()=>removeItemFromWishList(item.id)}><ImCancelCircle className='w-4 h-4' /></button>
                    </div>
                </div>
            ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-full font-['Inter']">
                    <div className='flex items-center justify-center'><AiOutlineHeart className='w-40 h-40' /></div>
                    <h1 className="text-xl my-2 tracking-wide font-medium text-gray-500">Your wish List is Empty</h1>
                    <a href="/store" className='bg-red-500 text-white rounded-full p-4 hover:scale-110 my-2 tracking-widest text-xl'>Explore our Book Store</a>
                </div>
            )}
            
        </div>
        </div>

    </div>
    )
}

export default WishList