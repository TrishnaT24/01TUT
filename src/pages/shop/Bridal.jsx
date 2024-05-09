import React from "react";
import {MPRODUCTS }from "./Bridal-products";
import { Product } from "./Product";
import './shop.css';
import BudgetFilter from "../../budget";
import { useState } from "react";
//displays bridal wear
export const Bridal = () => {
  const [filteredProducts, setFilteredProducts] = useState(MPRODUCTS);
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>BRIDAL WEAR</h1>
      </div>
      <BudgetFilter products={MPRODUCTS} setFilteredProducts={setFilteredProducts} />

      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} isJewellery={true} />
        ))}
      </div>
    </div>
  );
};