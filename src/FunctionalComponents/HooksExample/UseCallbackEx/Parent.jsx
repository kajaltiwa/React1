import React, { useState} from 'react'
import Child from './Child'

export default function Parent() {
    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(1)

    let childComponent = useCallback(<Child num1={num1} num2={num2}/>,[num1]);
    console.log("parent component is Rendered")
  return (
    <>
      <h1> using callback and hook</h1>
      <h2>this is parent component</h2>
      <h2>num1 = {num1} | num2 = {num2}</h2>
      <button onClick={()=>setNum1(num1+1)}>Increment num1</button>
      <button onClick={()=>setNum2(num2+1)}>Increment num2</button>
      <hr />
     {childComponent}
    </>
  )
}
