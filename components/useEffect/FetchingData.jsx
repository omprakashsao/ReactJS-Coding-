import React, { useEffect, useState } from 'react'

const FetchingData = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        
        async function getData() {
            
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const value = await response.json();
            if(value && value.length ) setData(value)
           
        }
      
       getData()
    },[])

  return (
    <div>
        <h1>Fetching Data Information</h1>
        {
            data.map((obj)=>(
             <li key={Math.random()}> {obj.title} </li>
            ))

        }
    </div>
  )
}

export default FetchingData