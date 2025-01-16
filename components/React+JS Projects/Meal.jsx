import axios from "axios";
import { useState, useEffect } from "react";

import React from 'react'

const Meal = () => {

    const [items, setItems] = useState([])

    useEffect(()=>{
        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res) => {
            setItems(res.data.meals)
        })
    },[])
  return (
    <div>
        {
            items.map(({idMeal, strMeal, strMealThumb})=>(
                <ul key={idMeal}>
                   <img src={strMealThumb} alt="" width={100}/>
                    <li>
                        <span>{strMeal}---</span>
                        <span>---{idMeal}</span>
                    </li>
                </ul>
            ))
        }
    </div>
  )
}

export default Meal