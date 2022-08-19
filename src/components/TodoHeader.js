import React, { useState } from 'react'

function TodoHeader({ addItem }) {
    const [todo, setTodo] = useState('')
    return (
        <div>
            <h3 style={{ textAling: 'center' }}>TodoListApp</h3>
            <span>
                <input
                    type='text'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    style={{ marginRight: 10, width: 200, height: 25 }}
                    placeholder='Enter a todo title' />
                <button
                    style={{
                        width: 100,
                        height: 30,
                        backgroundColor: 'skyblue',
                        borderWidth: 0,
                        fontWeight: 'bold',
                        color: '#fff'
                    }}
                    onClick={() => { addItem(todo); setTodo('') }}>

                    Submit
                </button>
            </span>
        </div>
    )
}

export default TodoHeader