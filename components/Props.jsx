import React from 'react'

const Props = () => {
  return (
    <div>
        <ChildComponent
        name = "Om Prakash"
        age = {34}
        hobbies= {["Coding", "Meditation", "Murli"]}
        />
    </div>
  )
}

export default Props;


export const ChildComponent = ({name, age , hobbies}) => {
  return (
    <div>
        <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Hobbies: {hobbies}</li>
           
        </ul>
    </div>
  )
}

