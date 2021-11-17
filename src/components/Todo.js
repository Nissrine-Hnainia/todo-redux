import React from 'react'
import { Button } from 'react-bootstrap'
import EditTodo from './EditTodo'

const Todo = ({el}) => {
    return (
        <div style={{display:"flex"}}>
            <h2> {el.text} </h2>
            <EditTodo el={el} />
        </div>
    )
}

export default Todo
