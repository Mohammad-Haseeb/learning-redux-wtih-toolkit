import React from 'react';
import { useDispatch } from 'react-redux';
import {increment,decrement,incrementWIthAction} from './../Store/reducer';

export default function CounterValue(){
    const dispatch = useDispatch();
  return(
      <>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      <button onClick={()=>{
        dispatch(incrementWIthAction(Number(40)))
      }}>Increment with Action</button>
      </>
  )
}