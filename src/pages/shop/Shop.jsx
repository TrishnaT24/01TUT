import React, { useState } from "react";
import { vendors } from "../../vendors";
import { Product } from "./Product";
import BudgetFilter from "../../budget.js"; // Assuming BudgetFilter component exists
import "./shop.css";
export const Shop = () => {
  // State for filtered products based on budget
  const [filteredProducts, setFilteredProducts] = useState(vendors);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Decor</h1>
      </div>

      {/* Budget filter component */}
      <BudgetFilter products={vendors} setFilteredProducts={setFilteredProducts} />

      <div className="products">
        {/* Render products based on filtered products */}
        {filteredProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
