/*the value of state that comes into a function remains the same throughout the function even though it is updated*/
import ItemList from "./ItemList";
const Content = ({items,handleCheck,handleDelete}) => {
 return (
      
       <>
        {items.length ?(
            <ItemList
            items={items}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
            />
        
        ) : (
            <p style ={{marginTop :'2rem'}}>Your list is empty</p>
        )}
       </>
    )
}

export default Content


 /*const[count, setCount]=useState(0)*/
    /*const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }
    const handleclick=()=>{
        setCount(count+1);
        setCount(count+1);
        console.log(count)
        
    }
    const handleclick2=(name)=>{
        console.log(count)
        
    }*/

     /*<main>

        <p onDoubleClick={handleclick}>
                Hello {name}!
            </p>
            <button onClick={handleNameChange}>Change name</button>
            <button onClick={handleclick}>you pressed me {count} times</button>
            <button onClick={handleclick2}>you pressed me {count} times</button>
        </main>
        
                    <MdDelete>
                        role="button"
                        tabindex="0"
                    </MdDelete>
                    <FaTrashAlt 
                    role="button" 
                    tabIndex="0"
        */