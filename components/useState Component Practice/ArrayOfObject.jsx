import React, { useState } from 'react'

const ArrayOfObject = () => {

    const movieList = [
        {id: 121, name: "The King Lion", rating: 7},
        {id: 122, name: "The CAT", rating: 4},
        {id: 123, name: "Lucky Bhaskar", rating: 6},

    ]
    const [movie, setMovie] = useState(movieList);

    const updateHandler = () =>{
        setMovie(movie.map((m) => m.id==121 ? {...m, name: "the King"} : m ))
        
    }



  return (
    <div>
        {
            movie.map(({id, name, rating})=>(
                <ul key={Math.random()}>
                    <li>{id}</li>
                    <li>{name}</li>
                    <li>{rating}</li>
                </ul>
            ))
        }
        <button onClick={updateHandler}>Update Rating</button>
    </div>
  )
}

export default ArrayOfObject