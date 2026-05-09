import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <div className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-gray-900 via-slate-800 to-black flex flex-col items-center justify-center text-center px-4">

      <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-4">
        Welcome to
        <span className="text-green-400"> Shopping Mart</span>
      </h1>

      <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-8">
        Discover amazing products at the best prices.
        Shop smart, shop fast, and enjoy a seamless shopping experience.
      </p>

      <Link
        to="/products"
        className="bg-green-500 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300"
      >
        Explore Products →
      </Link>
    </div>
  )
}

export default Home
