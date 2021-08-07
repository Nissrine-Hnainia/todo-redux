import { ADD_TODO, EDIT_TODO } from "../actions/actionTypes";

const initialState = []

//pure function(state, action) ==> updated state
const todoReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_TODO:
            return [...state, payload]
    
        case EDIT_TODO:
            return state.map(todo => todo.id === payload.id ? {...todo, description: payload.description} : todo)

        default:
            return state
    }
}

export default todoReducer
