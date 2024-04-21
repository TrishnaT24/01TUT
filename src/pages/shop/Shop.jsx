/*import React from 'react'
import {Product} from './Product';
import {PRODUCTS} from '../products';
import './shop.css';

export const Shop = () => {
  return (
    <div className="Shop">
     <div className="shoptittle">
        <h1>FLOWERS</h1>
     </div>
     <div className="Product">{PRODUCTS.map((product) => (
     <Product data={product}/>
    ))}
     </div>
    </div>
  )
}*/

import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./Product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Decor</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};