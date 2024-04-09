import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: 'Add your todos',
        completed: false,
        editable: false
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleCompleted: (state,action) => {
            state.todos = state.todos.map( todo => todo.id === action.payload? {...todo, completed: !todo.completed} : todo)
        },
        isEditable: (state, action) => {
            state.todos = state.todos.map( todo => todo.id === action.payload? {...todo, editable: !todo.editable}: todo)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map( todo => todo.id === action.payload.id ? {...todo, text: action.payload.todoMsg}: todo )
        }

    }
})

export const {addTodo, removeTodo, toggleCompleted, updateTodo, isEditable} = todoSlice.actions
export default todoSlice.reducer