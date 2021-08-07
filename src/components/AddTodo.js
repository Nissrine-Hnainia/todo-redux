import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {Form, Button} from "react-bootstrap"
import { add } from './../redux/actions/todoActions';

const AddTodo = () => {
    const [input, setInput] = useState("")
    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const dispatch = useDispatch()
    return (
        <Form className="form">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="add something to do" value={input} onChange={handleInput}/>
            </Form.Group>
            <Button onClick={() => dispatch(
                add({id: Math.random(), description: input}),
                setInput("")
                )}>
                Add
            </Button>
        </Form>
    )
}

export default AddTodo
