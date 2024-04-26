import { useState } from "react";
import React from "react";
import { JPRODUCTS } from "../shop/Jewellery-products";
import { Product } from "./Product";
import './shop.css';
import BudgetFilter from "../../budget";

export const Jewellery = () => {
  const [filteredProducts, setFilteredProducts] = useState(JPRODUCTS);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Jewellery</h1>
      </div>
      <BudgetFilter products={JPRODUCTS} setFilteredProducts={setFilteredProducts} />
      <div className="products">
        {filteredProducts.map((product) => (
          <Product data={product} key={product.id}  isJewellery={true} />
        ))}
      </div>
    </div>
  );
};
