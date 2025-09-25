'use client'

import {useEffect, useState} from 'react'
import Loading from '../laoding';

interface ProductData {
  id: number;
  title: string
  category: string
  image: string
  price: number

}

export default function Home() {
  const [productsList, setProductsList] = useState<ProductData[]>([])
  const [isLoadData, setIsLoadData] = useState(true)

  useEffect(() => {
    console.log(productsList)

    const getListfromAPi = async() => {
      const api = 'https://fakestoreapi.com/products'

      try {
        const res = await fetch(api)
        const data = await res.json()

        console.log('products List: ', data)
        setTimeout(() => {
          console.log('3 sec later')
          setProductsList(data)
          setIsLoadData(false)

        }, 3000)

      } 

      catch (error: unknown) {
        if (error instanceof Error) {
            throw error; // Next.js error.tsx will handle this
          }
          throw new Error("Unknown error occurred");
      }

    }

    getListfromAPi()

    return () => { // pake arrow function, so the return not immediately run the cleaned console.log
      console.log('cleaned state')
    }
  }, [])


  // if(isLoadData) {
  //   return <h2 className="font-xl text-blue-500">Loading API DATA...</h2>
  // }

  return (
    <div>
      <h1 className="font-2xl font-semibold">This is Product with CSR Component</h1>


        <ul>
          {
            isLoadData && <Loading/>
          }
            {
            productsList.length !== 0 && 
              productsList.map((product: ProductData) => (
              <li key={product.id}> {product.id}. {product.title}</li>
              ))
            }
        </ul>
    </div>
  );
}
