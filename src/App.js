import Header from './Header';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppingList')));
  

  const [newItem,setNewItem]=useState('')
  const [search,setSearch]=useState('')

  const setAndSaveItems=(newItems)=>{
    setItems(newItems);
    localStorage.setItem('shoppingList', JSON.stringify(newItems));

  }
  const addItem =(item)=>{
    const id=items.length? items[items.length-1].id +1 :1 ;
    const myNewItem ={ id,checked :false, item};
    const listItems =[...items,myNewItem];
    setAndSaveItems(listItems);
    
  }


  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? {
      ...item,
      checked: !item.checked
    } : item);
    setAndSaveItems(listItems);
    
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setAndSaveItems(listItems);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }


  return (
    <div className="App">
      <p>welcome to us.love meets innovation</p>
      <Header title="Jodi Junction" />
      <AddItem
      newItem ={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit} 
      />
      <SearchItem
      search={search}
      setSearch={setSearch}
       />
      <Content
        items={items.filter(item =>((item.item).toLowerCase().includes
        (search.toLowerCase())))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />

    </div>
  );
}


export default App;



/*import { people } from './vendors.js';
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
      {/* Input field for budget filter}
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
      
      

      {/* Render the list}
      <ul>{listItems}</ul>
    </div>
  );
}
export default List;
*/


