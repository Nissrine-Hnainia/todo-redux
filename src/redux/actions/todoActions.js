import { ADD_TODO, EDIT_TODO } from "./actionTypes"


//action creator: a function that returns and object
export const add = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const edit = (payload) => {
    return {
        type: EDIT_TODO,
        payload
    }
}
