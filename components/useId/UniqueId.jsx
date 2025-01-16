import React from 'react'
import { useId } from 'react'

const UniqueId = () => {
    const id = useId();

  return (
    <div>
        <label htmlFor={`${id}-email`}> Email: 
            <input type="email" id={`${id}-email`}  />
        </label>
        <br/>
        <label htmlFor={`${id}-password`}> Password :
            <input type="text" id={`${id}-password`} />
        </label>
    </div>
  )
}

export default UniqueId