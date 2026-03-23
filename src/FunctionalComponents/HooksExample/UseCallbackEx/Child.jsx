import React from 'react'

export default function Child({num1,num2}) {
    console.log("child component is Rendering")
  return (
    <>
      <h1>this is child component</h1>
      <h2>num1={num1} | num2={num2}</h2>
    </>
  )
}
