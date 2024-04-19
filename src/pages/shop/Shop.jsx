import React from 'react'
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
}

