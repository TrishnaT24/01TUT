import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";
import { MPRODUCTS } from "../shop/Bridal-products";
import { CartItemB } from "./cart-item-bridal";


export const Cart = () => {
    const { cartitemsBridal, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
  
    return (
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {MPRODUCTS.map((product) => {
            if (cartitemsBridal[product.id] !== 0) {
              return <CartItemB key={product.id} data={product} />;
            }
            return null;
          })}
        </div>
  
        {totalAmount > 0 ? (
          <div className="checkout">
            <p> Subtotal: Rs.{totalAmount} </p>
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
  