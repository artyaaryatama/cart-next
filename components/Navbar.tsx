'use client'

import Link from 'next/link'
// import { useState } from 'react'

export default function Navbar() {
  // const [isActive, setIsActive] = useState(false)

  return (
    <div className="bg-blue-200 flex justify-between items-center p-5">
      <div>
        <h1 className="text-2xl font-bold">Cart Next</h1>
      </div>
      <div className="">
        <ul className="flex space-x-10 p-2
          [&_a]:text-blue-900
          *:font-semibold
          [&_a:hover]:underline
          [&_a:hover]:underline-offset-2
        ">
          <li>
            <Link 
              href={'/'}
            >
            Home
            </Link>
          </li>
          <li><Link href={'/products-csr'}>
          Products with CSR</Link></li>
          <li><Link href={'/product-ssr'}>
          Products with SSR</Link></li>
          <li><Link href={'/cart'}>
          Cart
          </Link></li>
        </ul>
      </div>
    </div>
  )
}