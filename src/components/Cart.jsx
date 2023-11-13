import React, { useEffect} from 'react';
import { useStateContext } from '../context/ShareContext';
import { ImCancelCircle } from "react-icons/im";
import { AiOutlineShoppingCart } from "react-icons/ai";
import axios from 'axios';

const Cart = () => {
    const { setShowCart, cartItems, setCartItems, totalPrice, totalQuantities, setTotalPrice, setTotalQuantities, removeItemFromCart } = useStateContext();
    /* eslint-disable */
    useEffect(() => {
        const storedCartData = localStorage.getItem('cartData');
        const storedPrice = localStorage.getItem('price');
        const storedQuantity = localStorage.getItem('quantity');

        if (storedCartData) {
            setCartItems(JSON.parse(storedCartData));
        }
        if (storedPrice) {
            setTotalPrice(parseFloat(storedPrice));
        }
        if (storedQuantity) {
            setTotalQuantities(parseInt(storedQuantity));
        }
    }, [])
    /* eslint-disable */

    const handlePayment = async () => {
        try {
          const response = await axios.post('https://payment3.onrender.com/checkout', {
            cartItems,
          });
    
          // Redirect the user to the Stripe Checkout page
          window.location.href = response.data.url;
            
        } catch (error) {
          console.error('Error initiating checkout:', error);
        }
      };
    


    return (
    <div className="fixed top-0 right-0 z-10 bg-gradient-to-r from-red-200 to-indigo-100 w-1/2 max-md:w-full h-screen overflow-scroll p-4">
        <div className='w-full flex flex-col h-full'>

        <div className='flex justify-between items-center w-full border-b-[1px] border-black pb-2'>
            <div className="flex items-center gap-2">
                <h1 className="font-['Inter']  uppercase font-xl tracking-widest font-bold">my Cart</h1>
                <p className="font-['Inter']  uppercase font-xl  font-medium text-red-500">({totalQuantities})</p>
            </div>
            <button onClick={()=>setShowCart(false)}><ImCancelCircle className='w-6 h-6' /></button>
        </div>

        <div className='h-full overflow-scroll px-5 bg-white border-b-[1px] border-black shadow-lg rounded-b-xl'>
            {cartItems.length > 0 ? (
                <div>
                    {cartItems.map((item, index) => (
                    <div key={index} className='w-full rounded-xl flex justify-between gap-2 bg-gray-200 my-5 p-5 shadow-xl'>
                        <div className=''>
                            <img src={item.image} alt={item.title} className='w-16 h-20'/>
                        </div>
                    <div className="w-full font-['Inter']">
                        <div className="text-indigo-900 text-lg font-semibold font-['Inter'] leading-tight">{item.title}</div>
                        <div className='flex gap-5 items-center'>
                            <div className='text-indigo-900 '> ${item.price}</div>
                            <div className='text-red-500 font-semibold italic'>x{item.quantity}</div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between items-end'>
                        <button onClick={()=>removeItemFromCart(item.id)}><ImCancelCircle className='w-4 h-4' /></button>
                        <div className="font-['Inter'] text-indigo-900 font-semibold text-lg ">${item.price*item.quantity}</div>
                    </div>
                </div>
            ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center w-full h-full font-['Inter']">
                    <div className='flex items-center justify-center'><AiOutlineShoppingCart className='w-40 h-40' /></div>
                    <h1 className="text-xl my-2 tracking-wide font-medium text-gray-500">Your Cart is Empty</h1>
                    <a href="/store" className='bg-red-500 text-white rounded-full p-4 hover:scale-110 my-2 tracking-widest text-xl'>Explore our Book Store</a>
                </div>
            )}
            
        </div>

        <div className='pt-5 px-10 h-1/4 w-full'>
            <div className=" flex w-full justify-between text-2xl font-['Inter'] text-indigo-900 font-medium ">
                <div className='uppercase'>Total:</div>
                <div>${totalPrice}</div>
            </div>
            <div className='flex w-full justify-center'>
                <button onClick={(handlePayment)} className='bg-red-500 w-2/3 my-2 text-2xl rounded-full text-white p-2'>Pay Now</button>
            </div>
        </div>
        </div>

    </div>
    )
}

export default Cart