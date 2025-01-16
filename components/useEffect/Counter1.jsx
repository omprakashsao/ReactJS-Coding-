import React, { useEffect, useState } from 'react'


const Counter1 = () => {

    const [value , setValue] = useState(0)
    const [anotherState, setAnotherState] = useState(0)
    
    useEffect(()=>{
       if(value>0){
         console.log("use-effect");
         // i don't why write this line
         document.title(`Increment ${value}`)
        }
     },[value])


  return (
    <div>
        <h1>{value}</h1>
        <button onClick={()=>setValue(value+1)}>increment</button>
        <h1>{anotherState}</h1>
        <button onClick={()=>setAnotherState(anotherState+1)}>increment-another</button>
        
    </div>
  )
}

export default Counter1