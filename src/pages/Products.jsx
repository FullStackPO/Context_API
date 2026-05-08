import React from 'react'
import { useContext } from 'react'
import { ProContext } from '../context/ProductContext'

const Products = () => {

  const {item} = useContext(ProContext)

  return (
   <div>
    {item.map((elem, idx) => {
      return <div key={idx}>
        <img src={elem.image}/>
        <h1>{elem.title}</h1>
        <h1>{elem.description}</h1>
        <h1>{elem.price}</h1>
      </div>
    })}
   </div>
  )
}

export default Products
