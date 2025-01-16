import React, { useState } from 'react'

const ToggleBackgroundColor = () => {

    const [backgroundColor, setBackgroundColor ] = useState('white')
    const [textColor , setTextColor  ] = useState("#1b1b1b")
    const [buttonStyle , setButtonStyle] = useState("white")

    const clickHandler = () =>{
        setBackgroundColor(bg=>bg == 'white'? '#1b1b1b' : 'white')
        setTextColor(tx=>tx == '#1b1b1b' ? 'orange' : '#1b1b1b')
        setButtonStyle(bs=>bs=='white'? '#1b1b1b' : 'white')
    }
    
    return (
    <div style={{backgroundColor: backgroundColor, color: textColor, height:'100vh'}}>
           <h1>Hi Om , How are you?</h1>
           <button style={{backgroundColor: buttonStyle, color: textColor, border: `2px solid ${textColor}`}} onClick={clickHandler}>change theme</button>
    </div>
  )
}

export default ToggleBackgroundColor