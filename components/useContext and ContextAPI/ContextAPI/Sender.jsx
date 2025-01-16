import React from 'react'
import { createContext } from 'react'
import Consumer from './Consumer';


export const Data =  createContext();

const Sender = () => {

    const fullName = "Om Prakash Sao"
  return (
    <div>
        <Data.Provider value={fullName}>
            <Consumer/>
        </Data.Provider>

    </div>
  )
}

export default Sender