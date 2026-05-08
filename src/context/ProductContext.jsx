import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const ProContext = createContext()

export function ProductContext({children}){

    const [item , setItem] = useState([])

    const url = 'https://fakestoreapi.com/products'

    const getData = async() => {
        const response = await axios.get(url);
        setItem(response.data)
    }

    useEffect(()=>{
        getData()
    }, [])

    return <ProContext.Provider value={{item}}>
        {children}
    </ProContext.Provider>
}
