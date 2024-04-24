import React from "react";//done
import { JPRODUCTS } from "../shop/Jewellery-products";//done
import Productj  from "./productj";
//import "./Jewellery.css";
import './shop.css';

 export const Jewellery = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Jewellery</h1>
      </div>

      <div className="products">
        {JPRODUCTS.map((product) => (
          <Productj data={product} />
        ))}
      </div>
    </div>
  );
};
