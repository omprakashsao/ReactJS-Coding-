import React from 'react'
import { Data } from './Sender1'
import { useContext } from 'react'


const Consumer1 = () => {
    
    const fullName = useContext(Data);
  return (
    <div>
        <h1>fullName is : {fullName}</h1>
    </div>
  )
}

export default Consumer1