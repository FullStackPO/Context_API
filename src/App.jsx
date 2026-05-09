import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Products from './pages/Products'
import Productdetails from './pages/Productdetails'

const App = () => {

  const router = createBrowserRouter([
    {
    path:'/',
    element:<Layout/>,
    children:[{
      index:true,
      element:<Home />,
    }]},
    {
    path:'/products',
    element:<Products />
    },
    {
      path:'/productDetail/:id',
      element:<Productdetails />
    }
  ])

  return <RouterProvider router={router}/>
}

export default App
