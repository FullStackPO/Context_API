import React from 'react'
import { useContext } from 'react'
import { ProContext } from '../context/ProductContext'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Products = () => {

  const {item} = useContext(ProContext)

  return (
    <>
    <Navbar />

    <div className='flex justify-between items-center p-2 bg-gray-800'>
      <p className='text-white font-bold'>Our Products</p> 
      <Link to='/' 
      className='bg-red-500 p-1 pr-2.5 pl-2.5 rounded text-white font-bold'>Back</Link>
    </div>

  <div className="flex flex-wrap justify-center gap-8 p-6 bg-gray-800 min-h-screen">
  {item.map((elem) => {
    return (
      <Link to={`/productDetail/${elem.id}`}
        className="w-[320px] bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
      >

        <div className="bg-gray-200 p-5 flex justify-center">
          <img
            className="h-60 object-contain hover:scale-105 transition duration-300"
            src={elem.image}
            alt={elem.title}
          />
        </div>

        
        <div className="p-5 flex flex-col gap-3">
          <h1 className="text-lg font-bold text-gray-800 line-clamp-2">
            {elem.title}
          </h1>

          <p className="text-sm text-gray-600 line-clamp-3">
            {elem.description}
          </p>

          <div className="flex items-center justify-between mt-3">
            <h1 className="text-2xl font-bold text-green-600">
              ${elem.price}
            </h1>

            <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </Link>
    );
  })}
</div>
   </>
  )
}

export default Products
