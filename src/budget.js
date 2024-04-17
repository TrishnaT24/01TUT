import { people } from './vendors.js';
import { useState } from 'react';

function List() {
  const [FilterBudget, setFilterBudget] = useState(0);
  const handleFilterChange = (event) => {
    setFilterBudget(parseInt(event.target.value, 10));
  };
  let choosevendors = people;
  if (FilterBudget !== 0) {
    choosevendors = people.filter(person =>
      person.budget === FilterBudget 
    );
  }

  const listItems = choosevendors.map(person => (
    <li>
      <img
        src={person.imageUrl}
        alt={person.name}
        style={{ width: '100px', height: '100px' }}
      />
      <p>
        <b>{person.name}:</b><br />
        <span>{' ' + person.budget + ' '}</span><br />
        Profession: {person.profession}
      </p>
    </li>
  ));
  return (
    <div>
      {/* Input field for budget filter*/}
      <label htmlFor="FilterBudget">Enter a Budget: </label>
      <input
        type="number"
        id="FilterBudget"
        value={FilterBudget} // Set input value to the current filterProfession state
        onChange={handleFilterChange} // Call handleFilterChange function on input change
      />



      {/* Render the list*/}
      <ul>{listItems}</ul>
    </div>
  );
}
export default List;

