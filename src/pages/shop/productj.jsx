import React, { useContext } from 'react';
//import './Jewellery.css';
import './shop.css';
import { ShopContextJewellery } from '../../context/shop-context-jewellery';

const Productj = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { addToCart, cartitemsJewellery } = useContext(ShopContextJewellery);
    const cartItemCount = cartitemsJewellery[id];

    return (
        <div className='product'>
            <img src={productImage} alt={productName} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>Rs.{price}</p>
            </div>
            <button className='addToCartBttn' onClick={() => addToCart(id)}>
                Add to cart{cartItemCount > 0 && ` (${cartItemCount})`}
            </button>
        </div>
    );
};

export default Productj;
