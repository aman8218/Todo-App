import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';


//creating the store

export const store = configureStore({
    reducer: todoReducer,
})