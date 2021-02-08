import React from 'react';
import { useSelector } from 'react-redux';


export default function Display(){
    const valueGetter= useSelector((state)=>{
         console.log("Checker",state)
               return state.values.value;
    })
    return(
        <>
        <h1>Value : {valueGetter}</h1>
        </>
    );
}