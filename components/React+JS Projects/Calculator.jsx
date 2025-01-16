import { useState } from "react";

import React from 'react'

const Calculator = () => {

    const [input , setInput ] = useState('')

    const clear = () => setInput('')
    const display = (value) =>{
            setInput(input+value)
    }
    console.log(eval(""))

  return (
    <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />

        <button onClick={()=>clear()}>c</button>

        <button onClick={()=>display("0")}>0</button>
        <button onClick={()=>display("9")}>9</button>
        <button onClick={()=>display("8")}>8</button>
        <button onClick={()=>display("7")}>7</button>
        <button onClick={()=>display("6")}>6</button>   
        <button onClick={()=>display("5")}>5</button>
        <button onClick={()=>display("4")}>4</button>
        <button onClick={()=>display("3")}>3</button>
        <button onClick={()=>display("2")}>2</button>
        <button onClick={()=>display("1")}>1</button>
        <button onClick={()=>display("/")}>/</button>
        <button onClick={()=>display("*")}>*</button>
        <button onClick={()=>display("+")}>+</button>
        <button onClick={()=>display("-")}>-</button>
        <button onClick={()=>display("00")}>00</button>

        <button onClick={()=>setInput(eval(input))}>=</button>
    </div>
  )
}

export default Calculator