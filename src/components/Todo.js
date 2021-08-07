import React from 'react'
import { Button } from 'react-bootstrap' 
import { FcTodoList } from 'react-icons/fc';
import EditTodo from './EditTodo';

const Todo = ({todo}) => {
    return (
        <div className="todo">
            <FcTodoList size={30}/>
            <h2> {todo.description} </h2>
            <EditTodo todo={todo}/>
        </div>
    )
}

export default Todo
