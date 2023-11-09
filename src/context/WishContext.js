import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-hot-toast';

const Context = createContext();

export const WishListContext = ({ children }) => {
    const [showWish, setShowWish] = useState(false);
    const [WishListItems, setWishListItems] = useState([]);
    const [totalWishQuantities, setTotalWishQuantities] = useState(0);

    const onAddWishList = (product) => {
        // Retrieve the existing cart + info from local storage
        const storedwishListData = localStorage.getItem('wishListData');
        let wishListData = [];
        let updateQuantity = 0

        
        if (storedwishListData) {
            wishListData = JSON.parse(storedwishListData);
            updateQuantity = parseInt(localStorage.getItem('wishListQuantity'));
        }
        
        // Check if the product already exists in the cart
        const existingProduct = wishListData.find((item) => item.id === product.id);
        
        if (existingProduct) {
            toast.success(`${product.title} already in your wishlist.`);
        } else {
            // update the total quantity
            setWishListItems(wishListData);
            updateQuantity += 1
            setTotalWishQuantities(updateQuantity)

            // If the product is not in the cart, add it with a quantity of 1
            wishListData.push(product);
            toast.success(`${product.title} added to the wishlist.`);
        }
        

        // Update the cart, price and quantity in local storage
        localStorage.setItem('wishListData', JSON.stringify(wishListData));
        localStorage.setItem('wishListQuantity', updateQuantity.toString());


        
    };

    const removeItemFromWishList = (productId) => {
        // Find the index of the product with the given id in the cart
        const productIndex = WishListItems.findIndex((item) => item.id === productId);

        if (productIndex !== -1) {
            // Remove the product from the cart
            const updatedWishList = [...WishListItems];
            const removedProduct = updatedWishList.splice(productIndex, 1)[0]


            const updatedQuantities = totalWishQuantities - 1;

            setTotalWishQuantities(updatedQuantities);
            setWishListItems(updatedWishList);

            // Update the cart, price, and quantities in local storage
            localStorage.setItem('wishListData', JSON.stringify(updatedWishList));
            localStorage.setItem('wishListQuantity', updatedQuantities.toString());

        }
    };


    return (
        <Context.Provider
            value={{
                showWish,
                setShowWish,
                WishListItems,
                setWishListItems,
                totalWishQuantities,
                setTotalWishQuantities,
                onAddWishList,
                removeItemFromWishList,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const useWishListContext = () => useContext(Context);
