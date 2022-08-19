import React from 'react'
import TodoItem from './TodoItem'

function TodoList({deleteItem, itemList}) {
  return (
    <div style={{marginTop:50}}>
        {
            itemList.map((item, index) => <TodoItem 
                key={index}
                index={index}
                item={item}
                deleteItem={deleteItem}
            />)
        }
    </div>
  )
}

export default TodoList