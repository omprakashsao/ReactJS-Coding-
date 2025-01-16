import React from 'react'
import { createPortal } from 'react-dom'

const PopupContent = ({copy}) => {
   
  return createPortal (
    <section>
       {copy && <h1 style={{position: 'absolute', bottom: '3rem'}}>The content is copied</h1>} 
    </section>, 

    document.querySelector("#my_id_for_Portal_Concept")
  )
}

export default PopupContent