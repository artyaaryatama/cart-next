import {Suspense} from 'react'
import ProductApiCall from './productApiCall'
import LoadingSpin from '@/components/loading'

export default async function ProductsPage() {
  

  return (
    <div>
      <h1 className="font-2xl font-bold">This products rendered in SSR Component</h1>

      <Suspense fallback={<LoadingSpin/>}>
        <ProductApiCall/>
      </Suspense>


    </div>
  )
}