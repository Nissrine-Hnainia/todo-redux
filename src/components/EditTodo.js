import React, { useState } from "react";
import {Button, Modal, Form} from "react-bootstrap"
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions/todoActions";

const EditTodo = ({el}) => {
    const [show, setShow] = useState(false);

    const [description, setDescription] = useState(el.text)
    const handleText = (e) => {
        setDescription(e.target.value)
    }
    const handleshow = () => setShow(!show);
    const dispatch = useDispatch()
    return (
        <>
            <Button variant="primary" onClick={handleshow}>
                edit
            </Button>

            <Modal show={show} onHide={handleshow}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Form style={{display:"flex", width:"70%", margin:"150px auto"}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="add todo ..." value={description} onChange={handleText}  />
                </Form.Group>
            </Form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleshow}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => dispatch(editTask({id:el.id, text:description }))}>
                        save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default EditTodo;
