// BudgetFilter.js
import React, { useState } from 'react';

function BudgetFilter({ products, setFilteredProducts }) {
  const [filterBudget, setFilterBudget] = useState(0);

  const handleFilterChange = (event) => {
    const budget = parseInt(event.target.value, 10);
    setFilterBudget(budget);
    if (event.target.value === '') {
      setFilteredProducts(products);
    }
    else
    {
      setFilteredProducts(products.filter(product => product.price === budget));

    }
    
  };

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
    </div>
  );
}

export default BudgetFilter;
