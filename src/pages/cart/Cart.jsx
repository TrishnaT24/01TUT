import React , {useContext }from 'react'
import {vendors} from '../../vendors';
import {ShopContext} from '../.././context/shop-context';
import {CartItem} from "./cart-item"
import "./cart.css";
import { Shop } from '../shop/Shop';
import {useNavigate} from 'react-router-dom'
import { JPRODUCTS } from '../shop/Jewellery-products';
export const Cart = () => {
    const {cartItems,getTotalAmount}=useContext(ShopContext);
    const totalAmount= getTotalAmount();
    const navigate = useNavigate();
    const allProducts = vendors.concat(JPRODUCTS);

  return (
    <div className="cart">
      <div>Your Cart Items</div>
      <div className="cartItems">
        {allProducts.map((product)=> {
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