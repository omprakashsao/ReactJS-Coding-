import React, { useState } from 'react'
import RetriveStateComponentOne from './RetriveStateComponentOne';
import RetriveStateComponentTwo from './RetriveStateComponentTwo';

const PassingStateToAnotherComponent = () => {

    const [count, setCount] = useState(0);


  return (
    <div>
        <RetriveStateComponentOne count = {count}  handleCount = {()=>setCount(count +1)}/>
        <RetriveStateComponentTwo count = {count}  handleCount = {()=>setCount(count +1)} />
    </div>
  )
}

export default PassingStateToAnotherComponent