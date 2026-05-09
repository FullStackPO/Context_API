import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProContext } from '../context/ProductContext'
import {Link } from 'react-router-dom'

const Productdetails = () => {

  const { id } = useParams()
  const { item } = useContext(ProContext)

  const product = item.find((p) => p.id === Number(id))

  return (
    <>
    <div className='flex justify-between items-center p-2 bg-gray-800'>
      <p className='text-white font-bold'>About Product</p> 
      <Link to='/products' 
      className='bg-red-500 p-1 pr-2.5 pl-2.5 rounded text-white font-bold'>Back</Link>
    </div>

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-black text-white">

      <div className="grid md:grid-cols-2 min-h-screen">

        <div className="flex justify-center items-center p-10 bg-white/5 backdrop-blur-lg">

          <img
            src={product.image}
            alt={product.title}
            className="h-[400px] md:h-[600px] object-contain hover:scale-105 transition duration-500"
          />
        </div>

        <div className="flex flex-col justify-center px-8 md:px-16 py-10 gap-6">

          <span className="bg-green-500/20 text-green-400 px-5 py-2 rounded-full w-fit font-semibold border border-green-500">
            Premium Product
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {product.title}
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
            {product.description}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-yellow-400 text-2xl">
              ⭐ {product.rating.rate}
            </span>

            <span className="text-gray-400">
              ({product.rating.count} Reviews)
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-green-400">
            ${product.price}
          </h2>

          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold text-lg transition duration-300 shadow-xl">
              Buy Now
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-black transition duration-300">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Productdetails