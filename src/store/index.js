import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./modules/todos"

export default configureStore({
    reducer: {
        todos: todosReducer
    }
})