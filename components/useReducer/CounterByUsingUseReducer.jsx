import React, { useState } from 'react'
import { useReducer } from 'react'
import { IntialState, ReducerFunction } from './CounterReducer'





const CounterByUsingUseReducer = () => {
    const [ state , dispatch ] = useReducer(ReducerFunction, IntialState)
    const [ input , setInput ] = useState(0)
    

  return (
    <div>
        <h1>Count : {state.count}</h1>
        <button onClick={()=>{dispatch({type: "Increment"})}}>+</button>
        <button onClick={()=>{dispatch({type: "Decrement"})}}>-</button>
        <button onClick={()=>{dispatch({type: "reset"})}}>reset</button>

        
        <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>
       
        <button onClick={()=>{dispatch({type: "IncrementByAmount", payload: Number(input)})}}>add</button>
        <button onClick={()=>{dispatch({type: "DecrementByAmount", payload: Number(input)})}}>subtract</button>
        
    </div>
  )
}

export default CounterByUsingUseReducer