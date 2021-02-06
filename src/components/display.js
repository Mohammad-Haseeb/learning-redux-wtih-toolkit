import React from 'react';
import { useSelector } from 'react-redux';


export default function Display(){
    const valueGetter= useSelector((state)=>{
               return state.counter.count;
    })
    return(
        <>
        <h1>Value : {valueGetter}</h1>
        </>
    );
}