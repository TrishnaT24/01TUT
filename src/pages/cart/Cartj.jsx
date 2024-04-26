import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { ShopContextJewellery } from "../../context/shop-context-jewellery";
import { JPRODUCTS } from "../shop/Jewellery-products";
import { CartItemJ } from "./cart-item-jewellery";


export const Cart = () => {
    const { cartitemsJewellery, getTotalCartAmount, checkout } = useContext(ShopContextJewellery);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
  
    return (
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {JPRODUCTS.map((product) => {
            if (cartitemsJewellery[product.id] !== 0) {
              return <CartItemJ key={product.id} data={product} />;
            }
            return null;
          })}
        </div>
  
        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: ${totalAmount} </p>
            <button onClick={() => navigate("/")}> Continue Shopping </button>
            <button
              onClick={() => {
                checkout();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </div>
        ) : (
          <h1>Your Shopping Cart is Empty</h1>
        )}
      </div>
    );
  };
  