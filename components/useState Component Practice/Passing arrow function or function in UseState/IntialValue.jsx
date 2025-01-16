import React, { useState } from 'react'

const IntialValue = () => {

    const [count , setCount] = useState(()=>{
        const intialValue = 10;
        return intialValue;
    })

    const clickHandler = () => {
        setCount(count+1);
    }

  return (
    <div>
         <h1>{count}</h1>
         <button onClick={clickHandler}>click</button>
    </div>
  )
}

export default IntialValue