import React from "react";
import { JPRODUCTS } from "../shop/Jewellery-products";
import { Product } from "./Product";
import "./Jewellery.css";

 const Jewellery = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Jewellery</h1>
      </div>

      <div className="products">
        {JPRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
export default Jewellery;