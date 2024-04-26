import React from "react";
import { CPRODUCTS } from "../shop/Catering-products";
import { Product } from "./Product";
import './shop.css';
import { useState } from "react";
import BudgetFilter from "../../budget";
 const Catering = () => {
  const [filteredProducts, setFilteredProducts] = useState(CPRODUCTS);

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Catering</h1>
      </div>
      <BudgetFilter products={CPRODUCTS} setFilteredProducts={setFilteredProducts} />

      <div className="products">
        {filteredProducts.map((product) => (
          <Product key={product.id} data={product} isJewellery={true} />
        ))}
      </div>
    </div>
  );
};
export default Catering;
