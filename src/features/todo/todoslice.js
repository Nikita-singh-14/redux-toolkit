import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos:[{id:1, text:"hello world"}]
};


function sayhello(){
    console.log("hello guys...")
}
export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state, action) => {
            const todo = {
                id:nanoid(), 
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const{id, text} = action.payload;
            const existingTodo = state.todos.find((todo) => todo.id === id);
            if(existingTodo){
                existingTodo.text = text;
            }
            state.todos = state.todos.find((todo) => todo.id == action.payload)
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
});

export const {addTodo, removeTodo, updateTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer