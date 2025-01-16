import React, { useState } from 'react'

const ExampleTwo = () => {

    const [ randomNumber, setRandomNumber ] = useState(()=>Math.floor(Math.random()*10))

    const clickHandler = ()=>{
      setRandomNumber(Math.floor(Math.random()*10))
    }
    
  return (
    <div>
        <h1>{randomNumber}</h1>
        <button onClick={clickHandler}>generate random no.</button>
    </div>
  )
}

export default ExampleTwo