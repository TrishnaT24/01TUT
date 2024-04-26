import './additem.css';
import './additem.css'
import { MdAddShoppingCart } from "react-icons/md";
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
    <label htmlFor='addItem'>Add Item</label>
    <input
    autoFocus
    id='addItem'
    type='text'
    placeholder="Add Item"
    required
    value={newItem}
    onChange={(e) => setNewItem(e.target.value)}
    />
    <button
    type='submit'
    aria-label="Add Item"
    >
        <MdAddShoppingCart />

    </button>
    </form>
  )
}

export default AddItem