import React from 'react'
import { Data } from './Sender'

const Consumer = () => {
  return (
    <div>
        <Data.Consumer>
            {
                (fn)=>{
                    return(
                        <h1>full name : {fn}</h1>
                    )
                }
            }
        </Data.Consumer>
    </div>
  )
}

export default Consumer