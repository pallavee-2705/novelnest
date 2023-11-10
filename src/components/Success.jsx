import React, {useEffect} from 'react';
import { useStateContext } from '../context/ShareContext';
import { BsBagCheckFill } from 'react-icons/bs';
import { runFireWorks } from '../utils';

const Success = () => {
    const {  setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();

    useEffect(() => {
        localStorage.removeItem('cartData');
        localStorage.removeItem('quantity');
        localStorage.removeItem('price');
        setCartItems([])
        setTotalPrice(0)
        setTotalQuantities(0)
        runFireWorks()
    }, [])
    
  return (
    <div className='w-full max-h-screen flex items-center justify-center p-10'>
        <div className='flex flex-col items-center justify-center gap-5 p-10 bg-gray-200 rounded-xl shadow-xl'>
            <p className=''>
                <BsBagCheckFill className='text-green-500 w-20 h-20' />
            </p>
            <h2 className="font-['Inter'] text-indigo-900 text-3xl font-medium tracking-wider">Thank you for your order!</h2>
            <div className='flex items-center gap-2'>
            <h2 className="font-['Inter'] text-indigo-900 text-xl font-base">Please visit again to get the best quality books at -</h2>
            <p className="font-['Inter'] text-red-500 text-xl font-base">NovelNest</p>
            </div>
            
            <a href='/'>
                <button
                    type='button'
                    className="font-['Inter'] text-white bg-red-500 rounded-full p-4 transition-hover duration-300 ease-in-out hover:scale-110 text-xl font-medium tracking-wide"                
                >
                    Continue Shopping
                </button>
            </a>
        </div>
    </div>
  )
}

export default Success