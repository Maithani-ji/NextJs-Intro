"use client"
import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount]=useState(0)
    const increment=()=>setCount((prevCount)=>prevCount+1)
    const decrement=()=>setCount((prevCount)=>prevCount-1)
  return (
    <div>
         <div>Counter</div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
   
  )
}

export default Counter