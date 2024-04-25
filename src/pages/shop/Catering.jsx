import React from "react";
import { CPRODUCTS } from "../shop/Catering-products";
import { Product } from "./Product";
import './shop.css';

 const Catering = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Catering</h1>
      </div>

      <div className="products">
        {CPRODUCTS.map((product) => (
          <Product key={product.id} data={product} isJewellery={true} />
        ))}
      </div>
    </div>
  );
};
export default Catering;
