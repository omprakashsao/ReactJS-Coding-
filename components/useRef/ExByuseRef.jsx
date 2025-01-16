import React from 'react'
import { useRef } from 'react'

const ExByuseRef = () => {

  const inputElement = useRef(null);

  const clickHandler = () => {
    inputElement.current.focus()

    inputElement.current.value = 'Om Prakash'
  }
   console.log(inputElement)
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={clickHandler}>focus & name</button>
    </div>
  )
}

export default ExByuseRef