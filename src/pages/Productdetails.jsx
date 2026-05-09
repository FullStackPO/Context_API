import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProContext } from '../context/ProductContext'

const Productdetails = () => {

  const { id } = useParams()
  const { item } = useContext(ProContext)

  const product = item.find((p) => p.id === Number(id))

  return (
    <div>
      <h1>Product Details</h1>
       {product && (
        <>
          <img src={product.image} alt="" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
        </>
      )}
    </div>
  )
}

export default Productdetails
