import React from 'react'

const Todo = () => {
  return (
    <div className='main'>
        <div className="whole-thing">
            <div className="form">
                <input type="text" placeholder='Add your tasks here' />
                <button>Add</button>
            </div>
            <div className="list">
                <p>Shopping</p>
            </div>
        </div>
    </div>
  )
}

export default Todo;