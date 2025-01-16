import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import React from 'react'
import ToggleBackgroundColor from "./ToggleBackgroundColor";

const HiddenSearchBar = () => {

    const [ bgColor, setBgColor] = useState('white')
    const [ showInput, setShowInput ] = useState(false)

    const clickHandler = (e) => {
        setBgColor('#1a1a1a')

        if(e.target.className = "abc"){

            setBgColor('white')
            setShowInput(false)
        }
    }

  return (
    <section style={{backgroundColor: bgColor, height:'100vh'}} onClick={clickHandler} className="abc">

        { showInput ? (
                <input type="text"  />
        ): (
            <FaSearch onClick={()=>{
                setShowInput(true)
            }}/>
        )
        }
        
    </section>
  )
}

export default HiddenSearchBar