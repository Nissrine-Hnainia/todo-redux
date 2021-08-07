import React,{useState} from 'react'
import {useDispatch} from "react-redux"
import {Button, Form, Modal} from "react-bootstrap"
import { edit } from '../redux/actions/todoActions';

const EditTodo = ({todo}) => {
const [show, setShow] = useState(false);

const [description, setDescription] = useState(todo.description) 

const dispatch = useDispatch()

const handleEdit = (e) => {
    setDescription(e.target.value)
}

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);



    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
            edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Form className="modal-form">
                <Form.Group className="mb-3 group" controlId="formBasicEmail">
                    <Form.Label style={{marginRight:'10px'}}>Description</Form.Label>
                    <Form.Control type="text" 
                    placeholder="enter your new description" 
                    value={description} 
                    onChange={handleEdit} />
                </Form.Group>
                </Form>
                <Modal.Footer>
                <Button variant="primary" onClick={() => dispatch(edit({id: todo.id, description: description }))}>
                    Save
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EditTodo
