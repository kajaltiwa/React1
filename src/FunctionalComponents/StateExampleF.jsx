import React, { useState } from 'react'

export default function StateExampleF() {
    let [num,setNum] = useState(1)

    function decrement(){
      setNum(num-1)
      
    }
    function increment(){
       setNum(num+1)
       
    }
  return (
    <div>
      <h1 style={{
        backgroundColor: "red",
        color:"white",
        padding:10,
        textAlign:"center"
      }}>Function Component State Example</h1>
      <h2 style={{
        backgroundColor: "green",
        color:"white",
        padding:10,
        textAlign:"center"
      }}>num = {num}</h2>
      <button onClick={()=>increment()} style={{
        backgroundColor: "green",
        color:"white",
        padding:10,
        height:60,
        width: 100,
        margin: 100,
        
      }}>Increment</button>
      <button onClick={()=>decrement()} style={{
        backgroundColor: "red",
        color:"white",
        padding:10,
        textAlign:"center",
        height:60,
        width: 100,
        margin: 100,
      }}>Decrement</button>
    </div>
  )
}
