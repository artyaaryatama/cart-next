'use client'

import {Button} from "@/components/ui/button"
import {useState, useMemo}  from 'react'
import DummyArray from "@/lib/dummyArray";

export default function CartPage(){

  const [counter, setCounter] = useState(0);
  const [dummyArr] = useState(DummyArray())
  
  const lastItem =  useMemo(() => {

    return dummyArr.find((i)=> i.isLast === false) 
  }, [dummyArr])

  
  return (
    <div>
      <h1>This is cart page</h1>
      <h2>Counter: {counter}</h2>

      <h3>
        {lastItem && <p>which arr is last {lastItem.id} - {String(lastItem.isLast)}</p>}
      </h3>

      <Button
      className="mt-3"
        onClick={() => setCounter(counter+1)}
      >Test</Button>

    </div>
  )
}