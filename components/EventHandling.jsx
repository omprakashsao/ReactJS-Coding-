import React from 'react'

const EventHandling = () => {
    const clickHandler = ()=> alert("are you clicked me?");
    const copyHandler = () => alert("Don't copy my content otherwise your system would be hacked")
    const moveHandler = ()=>{
        console.log("mouse move detected");
    }
    
  return (    
  <div>
    <button onClick={()=> alert("are you clicked me?")}>Click Me!</button>
    <button onClick={clickHandler}>Button 2</button>

    <p onCopy={copyHandler}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid minima nobis ut?</p>

    <p onMouseMove={moveHandler}>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
  </div>

  )
}

export default EventHandling