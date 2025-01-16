import React from 'react'


const seperateObjet = { color: 'orange', fontStyle: 'italic'};

const Style = () => {
  return (
    <div>
        {/* Inline CSS */}
        <h1 style={{color: 'blue' , backgroundColor: 'lightcyan'}}>Inline CSS style in React</h1>

        {/* Seperate Object */}
        <p style={seperateObjet}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quae repellat corrupti?</p>

        {/* style ul list using seperate file by importing index.css */}
        <ul>
            <li>Orange </li>
            <li>Mango </li>
        </ul>
    </div>
  )
}

export default Style