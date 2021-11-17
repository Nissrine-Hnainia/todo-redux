import { ADD_TASK, EDIT_TASK } from './../constants/todoTypes';

export const addTask = (payload) => { //{id: Math.random() , text: "hello"} /  {id: Math.random() , text: "test"}
    return {
        type: ADD_TASK,
        payload
    }
}

export const editTask = (payload) => { //{id,text: "updated hello" }
    return {
        type: EDIT_TASK,
        payload
    }
}