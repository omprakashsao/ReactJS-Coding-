import { useFetch } from './useFetch';
import React from 'react';

const Cmp = () => {

   const [data] = useFetch('https://jsonplaceholder.typicode.com/todos');

    
  return (
    <div>
        {
            data && data.map((item)=>(
              <li key={Math.random()}>{item.title}</li>
            ))
        }
    </div>
  )
}

export default Cmp