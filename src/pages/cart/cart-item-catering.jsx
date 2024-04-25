import React,{useContext} from 'react'
import { ShopContext} from '../../context/shop-context';

export const CartItemC = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartitemsCatering, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const cartItemCount = cartitemsCatering[id];
  
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
