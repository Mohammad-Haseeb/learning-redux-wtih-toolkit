import { configureStore } from "@reduxjs/toolkit";
import countReducer from './reducer';

export const store =configureStore({
    reducer:{
        counter: countReducer
    }
});