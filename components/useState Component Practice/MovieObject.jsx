import React, { useState } from 'react'
import { Lia500Px } from 'react-icons/lia';

const MovieObject = () => {

    let MovieObject = {id: 121, name: "The King Lion", rating: 6}

    const [movie, setMovie] = useState(MovieObject);

    const ratingHandler = () => {
        setMovie({...movie, rating: Math.floor(Math.random()*10)})
    }




  return (
    <div>
       {
        Object.entries(movie).map(([key , value]) => (
            <li key={key}> {key} : {value}</li>
        ))
       }

        <button onClick={ratingHandler}>Latest Rating</button>
    </div>
  )
}

export default MovieObject