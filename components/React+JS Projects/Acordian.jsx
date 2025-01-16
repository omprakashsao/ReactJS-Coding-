import React, { useState } from 'react'

const Acordian = ({title, content}) => {
    const [ value , setValue ] = useState(false)

  return (
    <div >
        <div >
            <h1>{title}</h1>
            <button onClick={()=>setValue(!value)}>
             {
                value ? "-" : "+"
             }
            </button>
        </div>
        <div>
            {
                value && content
            }
        </div>

        
    </div>
  )
}

export default Acordian