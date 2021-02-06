import React from 'react';
import { useDispatch } from 'react-redux';
import {increment,decrement} from './../Store/reducer';

export default function CounterValue(){
    const dispatch = useDispatch();
  return(
      <>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      </>
  )
}