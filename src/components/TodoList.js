import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {
    const todos = useSelector(state => state)
    return (
        <div>
            {todos.map(todo => <Todo todo={todo} />)}
        </div>
    )
}

export default TodoList
