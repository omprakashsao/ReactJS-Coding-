import React, { useState } from 'react'

const Counterr = () => {
    const [count , setCount] = useState(0);

    const clickHandler = () => setCount(count +1);
    const clickHandler2 = () => setCount(count - 1);


    return (
    <div>
        <h1>{count}</h1>
        <button onClick={clickHandler}>Increment</button>
        <button onClick={clickHandler2}>decrement</button>
        
    </div>
  )
}

export default Counterr