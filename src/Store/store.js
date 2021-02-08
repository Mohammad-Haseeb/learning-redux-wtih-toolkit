import { configureStore } from "@reduxjs/toolkit";
import countReducer from './reducer';

export let store =configureStore({
    reducer:{
            values:countReducer
    }
})