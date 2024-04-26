import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import { ShopContext } from "../../context/shop-context";
import { CPRODUCTS } from "../shop/Catering-products";
import { CartItemC } from "./cart-item-catering";


export const Cart = () => {
    const { cartitemsCatering, getTotalCartAmount, checkout } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    const navigate = useNavigate();
  
    return (
      <div className="cart">
        <div>
          <h1>Your Cart Items</h1>
        </div>
        <div className="cart">
          {CPRODUCTS.map((product) => {
            if (cartitemsCatering[product.id] !== 0) {
              return <CartItemC key={product.id} data={product} />;
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
  