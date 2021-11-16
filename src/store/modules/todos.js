import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'todos',
    initialState: {
        todos: null
    },
    reducers: {
        setTodos: (state, action) => {
            state.todos = action.payload.data
        }
    }
})

export const { setTodos } = slice.actions

export const addTodo = () => async(dispatch) => {

}

export const getTodos = state => state.todos.todos

export default slice.reducer