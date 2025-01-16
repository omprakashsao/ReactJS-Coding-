import React, { useState } from 'react'

const ShopingList = () => {

    const [items, setItems] = useState([]) 
    const [name, setName] = useState("")
    const [quantity, setQuantity] = useState("")


  return (
    <div>
        <h1>Shoping List</h1>
        <form onSubmit={(event)=> {

event.preventDefault();

            if(!name || !quantity) return;

            const newItem = {
                name: name, quantity: parseInt(quantity)
            }

            setItems([...items, newItem])
            setName("")
            setQuantity("")
        }}   action=''>
             <div>
                <label>
                    Name : <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                </label>

                <label >
                    Quantity : <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
                </label>
             </div>

             <button type='submit'>Add Item</button>
        </form>

        <h2>Item Infomation</h2>

        {
           items.map(({name, quantity})=>(
            <li key={Math.random()}> {name} - Quantity - {quantity}</li>
           ))

       
        }
    </div>
  )
}

export default ShopingList