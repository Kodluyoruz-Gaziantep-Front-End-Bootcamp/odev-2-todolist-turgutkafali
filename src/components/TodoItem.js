import React, { useState } from 'react'
import {DeleteFilled} from '@ant-design/icons'

function TodoItem({item, deleteItem, index}) {
    const [strike, setStrike] = useState(false)
    const styles = {
        container : {
            border:'1px solid #000',
            display: 'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            paddingInline:10
        },
        checkbox:{
            marginRight:20
        },
        text:{
            textDecoration: strike && 'line-through'
        }
    }
    return (
        <div style={styles.container}>
            <p style={styles.text}>{item.title}</p>
            <span>
                <input style={styles.checkbox} 
                        type="checkbox" 
                        onChange={() => setStrike(!strike)} 
                        checked={strike}
                         />
                <DeleteFilled onClick={() => deleteItem(index)} />
            </span>
        </div>
    )
}

export default TodoItem