import React, { useState } from 'react'
import PopupContent from './PopupContent'


const CopyInput = () => {

    const [copy , setCopy] = useState(false)
    const [input , setInput] = useState("")

    const clickHandler = () => {
        navigator.clipboard.writeText(input).then(()=>{
            setCopy(true)
            setTimeout(()=>{
             setCopy(false)  
            }, 3000)
        })
    }

  return (
    <div>
        <input type="text" value={input} onChange={(e)=> setInput(e.target.value)} />    
        <button onClick={clickHandler}>copy-content</button>
        <PopupContent copy = {copy}/>
    </div>
  )
}

export default CopyInput