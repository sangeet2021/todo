import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
    const[data, setData] = useState('');
    const[items, setItems] = useState([]);

    //FUNCTION TO ADD ITEMS
    const addItem = () =>{
        if(!data){
            window.alert('Write something to add!')
        }else{
            setItems([...items, data]);
            setData('');
        }
    }

    //FUNCTION TO DELETE ITEM
    const deleteItem = (id) =>{
        const updatedItem = items.filter((elem, ind)=>{
            return(
                ind!==id 
            )
        });
        setItems(updatedItem);
    }

    // FUNCTION TO DELETE ALL ITEMS
    const deleteAll = () =>{
        setItems([]);
    }

 return (
    <div className='main'>
        <div className="whole-thing">
            <div className="form">
                <input type="text" placeholder='Write your tasks here' value={data} onChange={(e)=>setData(e.target.value)}/>
                <button onClick={addItem}>Add</button>
            </div>
            {items.map((elem, ind)=>{
                return(
                    <div className="list" key={ind}>
                        <p>{elem}</p>
                        <FontAwesomeIcon className='icon' icon={faTrash} onClick={()=>deleteItem(ind)}/>
                     </div>
                )
            })}
            <div className="delete-all">
                <button className='btn' onClick={deleteAll}>Delete All</button>
            </div>
            
        </div>
    </div>
  )
}

export default Todo;