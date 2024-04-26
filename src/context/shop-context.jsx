import React, { createContext, useState, useEffect } from 'react';
import { vendors } from '../vendors';
import { JPRODUCTS } from '../pages/shop/Jewellery-products';
import { MPRODUCTS } from '../pages/shop/Bridal-products';
import { CPRODUCTS } from '../pages/shop/Catering-products';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let maxId = 0;
  for (const product of [...vendors, ...JPRODUCTS, ...MPRODUCTS, ...CPRODUCTS]) {
    maxId = Math.max(maxId, product.id);
  }

  let cart = {};
  for (let i = 1; i <= maxId; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage on component mount
    const storedCartItems = localStorage.getItem('cartItems');
    return storedCartItems ? JSON.parse(storedCartItems) : getDefaultCart();
  });

  // Save cart items to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const getTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = vendors.find((product) => product.id === Number(item)) ||
          JPRODUCTS.find((product) => product.id === Number(item)) ||
          MPRODUCTS.find((product) => product.id === Number(item)) ||
          CPRODUCTS.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalAmount };

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  );
};
