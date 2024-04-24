import React,{createContext, useState} from 'react'
import { JPRODUCTS } from '../pages/shop/Jewellery-products';

export const ShopContextJewellery=createContext(null);
const getDefaultCartJewellery = () => {
    let cartj={}
    for (let i=7; i<JPRODUCTS.length+7 ;i++){
        cartj[i]=0;
    }
    return cartj;
}

export const ShopContextProviderJewellery = (props) => {
    const [cartitemsJewellery, setCartItemsJewellery] = useState(getDefaultCartJewellery());

    const getTotalAmount = () => {
        let totalAmount =0;
        for(const item in cartitemsJewellery){
            if(cartitemsJewellery[item]>0){
                let itemInfo =JPRODUCTS.find((product) => product.id === Number(item));
                totalAmount += cartitemsJewellery[item] * itemInfo.price
            }
        }

        return totalAmount;
      };

    const addToCart = (itemId) => {
        setCartItemsJewellery((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItemsJewellery((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    };

    const updateCartItemCount =(newAmount , itemId) => {
        setCartItemsJewellery((prev) => ({...prev,[itemId]: newAmount}));
      };

    const contextValue= {cartitemsJewellery,addToCart,removeFromCart,updateCartItemCount ,getTotalAmount}

  return <ShopContextJewellery.Provider value={contextValue}>{props.children}</ShopContextJewellery.Provider>;

}


