import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTask } from '../redux/actions/todoActions';

const AddTodo = () => {
    const [input, setInput] = useState("")
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const dispatch = useDispatch()
    return (
            <Form style={{display:"flex", width:"70%", margin:"150px auto"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="add todo ..." value={input} onChange={(e) => handleInput(e)} />
                </Form.Group>
                <Button onClick={() => dispatch(addTask({id: Math.random(), text:input})) } 
                style={{width:"150px", height:"40px"}}>
                    Add
                </Button>
            </Form>
    );
};

export default AddTodo;
