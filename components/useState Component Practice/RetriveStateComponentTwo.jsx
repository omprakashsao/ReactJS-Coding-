import React from 'react'

const RetriveStateComponentTwo = ({count, handleCount}) => {
    const clickHandler = () => {
        handleCount();
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={clickHandler}>Increment</button>
    </div>
  )
}

export default RetriveStateComponentTwo