import React from 'react'

const ProductList = () => {
    const Products= [
        {
            pId: 123,
            pName: "smart phone",
            price: 1023    
        },
        {
            pId: 124,
            pName: "smart TV",
            price: 10000    
        },
        {
            pId: 125,
            pName: "Washing Machine",
            price: 12000   
        }
    ]
  return (
    <div>
        {Products.map(({pId, pName, price})=>(
            <ul key={Math.random()}>
                <li>{pId}</li>
                <li>{pName}</li>
                <li>{price}</li>
            </ul>
        ))}
    </div>
  )
}

export default ProductList;