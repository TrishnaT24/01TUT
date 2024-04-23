import React, { useState } from 'react';
import { vendors } from './vendors.js';

function Products() {
  const [filterBudget, setFilterBudget] = useState(0);

  const handleFilterChange = (event) => {
    setFilterBudget(parseInt(event.target.value, 10));
  };

  let filteredProducts = vendors;
  if (filterBudget !== 0) {
    filteredProducts = vendors.filter(product => product.price === filterBudget);
  }

  const listItems = filteredProducts.map(product => (
    <li key={product.id}>
      <img
        src={product.productImage}
        alt={product.productName}
        style={{ width: '100px', height: '100px' }}
      />
      <p>
        <b>{product.productName}:</b><br />
        <span>{' ' + product.price + ' '}</span><br />
      </p>
    </li>
  ));

  return (
    <div>
      {/* Input field for budget filter*/}
      <label htmlFor="filterBudget">Enter a Budget: </label>
      <input
        type="number"
        id="filterBudget"
        value={filterBudget}
        onChange={handleFilterChange}
      />

      {/* Render the list*/}
      <ul>{listItems}</ul>
    </div>
  );
}

export default Products;
