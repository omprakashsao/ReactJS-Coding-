import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Timer = () => {

    const [count , setCount ] = useState(0)

    const intervalRef = useRef(null);

    useEffect(()=>{

        intervalRef.current = setInterval(()=>{
            setCount(count => count +1)
        },1000)

        return ()=>{
            clearInterval(intervalRef.current);
        }
    },[])
  return (
    <div>
        <h1>Timer: {count} seconds</h1>
        <button onClick={()=> clearInterval(intervalRef.current)}>stop</button>
    </div>
  )
}

export default Timer