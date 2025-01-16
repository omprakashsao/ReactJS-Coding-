import { useState } from "react";
import React from 'react'

const Testimonial = () => {

    const [ currentIndex, setCurrentIndex] = useState(0)

    const testimonial = [
        {
            text: "This is first para",
            author: "Neeraj Gupta"
        },
        {
            text: "This is second para",
            author: "Om Prakash Sao"
        },
        {
            text: "This is 3rd para",
            author: "Deepanshu Netam"
        },
    ]

  return (
    <div>
        <h1>{testimonial[currentIndex].text}</h1>
        <h3>{testimonial[currentIndex].author}</h3>
        <span onClick={()=>setCurrentIndex((currentIndex+testimonial.length-1)% testimonial.length)}>prev</span>
        <p>-------------------</p>
        <span onClick={()=> setCurrentIndex((currentIndex+1)%testimonial.length)}>next</span>        
    </div>
  )
}

export default Testimonial