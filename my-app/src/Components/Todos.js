import React, {useState} from 'react'
import List from './List'
const Todos = () => {
  const [inputList, setinputList] = useState("");
  const itemEvents = (e)=>{
    setinputList(e.target.value)
  }
  const [Items, setItems] = useState([]);
  const addItem = ()=>{
    setItems((oldItem)=>{
      return [...oldItem, inputList]
    })
    setinputList("")
  }
  const removeItem = (id)=>{
    setItems((oldItem)=>{
      return oldItem.filter((arrElem, index)=>{
        return index!=id;
      })
    })
}
  return (
    <div className="containerr">
      <div className="to-do">
        <h2>
          TODOs Lists <img src ="todo.png" alt='text' />
        </h2>
        <div className="rows">
          <input type="text" id="input-box" placeholder="Add you text" value={inputList} onChange={itemEvents}/>
          <button onClick={addItem} >Add</button>
        </div>
        <ol>
        {Items.map((itemValue, index) =>{
           return <List  id = {index} onSelect = {removeItem} item = {itemValue}/>
          })}
          
        </ol>
        
      </div>
    </div>
  )
}

export default Todos

