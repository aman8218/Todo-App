//reducers

import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos:[{id:"abc", task: "demo-task", isDone: false, isView: false}],
}

export const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const newTodo={
                id: nanoid(),
                task: action.payload,
                isDone: false
            };
            state.todos.push(newTodo); //direct mutation
        },
        deleteTodo: (state, action)=>{
            // action.payload
            state.todos=state.todos.filter((todo)=>todo.id!=action.payload);
        },
        markAsDone: (state,action)=>{
            //action.payload
            state.todos=state.todos.map((todo)=>{
                if(todo.id===action.payload)
                {
                    todo.isDone = true;
                }
                return todo; //return the modified todo
            })
        },
        viewAllTasks: (state, action)=>{
            state.todos[0].isView = true; // Update isView flag of the first todo
        },
    }
});

export const {addTodo, deleteTodo, markAsDone, viewAllTasks} = todoSlice.actions;
export default todoSlice.reducer;
