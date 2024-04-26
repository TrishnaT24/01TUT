import React,{useContext} from 'react'
import { ShopContextJewellery } from '../../context/shop-context-jewellery';

export const CartItemJ = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartitemsJewellery, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const cartItemCount = cartitemsJewellery[id];
  
    return (
        <div className='cartItem'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>Rs.{price}</p>
                <div className='countHandler'>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItemCount} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}>+</button>
                </div>
            </div>
        </div>
    );
}
