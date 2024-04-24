import React from "react";
import { JPRODUCTS } from "../shop/Jewellery-products";
import { Product } from "./Product";
import './shop.css';

export const Jewellery = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Jewellery</h1>
      </div>

      <div className="products">
        {JPRODUCTS.map((product) => (
          <Product key={product.id} data={product} isJewellery={true} />
        ))}
      </div>
    </div>
  );
};
