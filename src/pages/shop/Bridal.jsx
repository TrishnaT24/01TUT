import React from "react";
import {MPRODUCTS }from "./Bridal-products";
import { Product } from "./Product";
import './shop.css';

export const Bridal = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>BRIDAL WEAR</h1>
      </div>

      <div className="products">
        {MPRODUCTS.map((product) => (
          <Product key={product.id} data={product} isJewellery={true} />
        ))}
      </div>
    </div>
  );
};