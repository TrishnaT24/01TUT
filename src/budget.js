import { people } from './vendors.js';
import { useState } from 'react';

function List() {


  const[FilterBudget, setFilterBudget]=useState(0);
  const[FilterProfession, setFilterProfession]=useState("Cateror");
  const handleFilterChange = (event) => {
    setFilterBudget(parseInt(event.target.value,10)); 
  };
  const handleFilterChange1 = (event1) => {
    setFilterProfession(event1.target.value); 
  };
let choosevendors=people;
if(FilterBudget!==0 || FilterProfession!=="Cateror")
{choosevendors = people.filter(person =>
  person.budget=== FilterBudget || person.profession.toLowerCase().startsWith(FilterProfession.toLowerCase())===FilterProfession.toLowerCase().startsWith(FilterProfession.toLowerCase())
);
}

  const listItems = choosevendors.map(person =>(
    <li key ={person.id} style={{ display: 'inline-block', marginRight: '10px', marginTop: '10px', marginLeft: '10px' }}>
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
      <label htmlFor="FilterProfession">Enter a Profession: </label>
      <input type='text'
        id="FilterProfession"
        value={FilterProfession} // Set input value to the current filterProfession state
        onChange={handleFilterChange1} // Call handleFilterChange function on input change
      /><br />
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

