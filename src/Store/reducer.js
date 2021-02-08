import  {createSlice} from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value: 0
    },
    reducers:{
        increment:(state)=>{++state.value},
        decrement:(state)=>{--state.value},
        incrementWIthAction:(state,action)=>{
            
          state.value+=action.payload;
        }

    }
})
export const {increment,decrement,incrementWIthAction}=counterSlice.actions;
export default counterSlice.reducer;