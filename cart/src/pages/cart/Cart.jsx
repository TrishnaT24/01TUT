import React , {useContext }from 'react'
import {PRODUCTS} from '../../products';
import {ShopContext} from '../../context/shop-context';
import {CartItem} from "../cart/cart-item"
import "./cart.css";
import { Shop } from '../shop/Shop';
import {useNavigate} from 'react-router-dom'

export const Cart = () => {
    const {cartItems,getTotalAmount}=useContext(ShopContext);
    const totalAmount= getTotalAmount();
    const navigate = useNavigate();
  return (
    <div className="cart">
      <div>Your Cart Items</div>
      <div className="cartItems">
        {PRODUCTS.map((product)=> {
            if(cartItems[product.id]!==0){
                return<CartItem data={product}/>;
            }
        }
        )}
      </div>
      <div className='Checkout'>
        <p>Subtotal: Rs.{totalAmount}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        <button>CheckOut</button> 
      </div> 
    </div>
  )
}

