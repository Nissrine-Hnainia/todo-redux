import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo';

const TodoList = () => {
    const todos = useSelector(state => state)
    return (
        <div>
            {todos && todos.map(el => <Todo key={el.id} el={el} />)}
        </div>
    )
}

export default TodoList
