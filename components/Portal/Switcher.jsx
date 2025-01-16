import React, { useState } from 'react'

const Switcher = () => {
    const [sw , setSw] = useState(false)

   

    
    return (
    <div>
        { sw ? ("dark") : ("light")}
        <input type="text" key={sw ? "dark" : "light"}/>
        <button onClick={()=> setSw( sw => !sw)}>Switcher</button>
        
    </div>
  )
}

export default Switcher