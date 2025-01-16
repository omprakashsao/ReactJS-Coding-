import React from 'react'
import { createContext } from 'react'
import Consumer1 from './Consumer1';


export const Data =  createContext();

const Sender1 = () => {

    const fullName = "Om Prakash Sao"
  return (
    <div>
        <Data.Provider value={fullName}>
            <Consumer1/>
        </Data.Provider>

    </div>
  )
}

export default Sender1