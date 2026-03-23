import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export default function UseRelEx() {
    let [name, setName] = useState("")
    let email = useRef("")

    function postData(){
        alert(`
            name   :    ${name}
            Email  :  ${email.current}
        `)
    }
    console.log("component is Rendering")
  return (
    <>
    <h1>useRef Example</h1>
    <h2>Name  :  {name}</h2>
    <h2>Email  :  {email.current}</h2>
    <input type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder='Full Name'/>
    <input type="email" name="email" onChange={(e)=>email.current=e.target.value} placeholder='Email Address'/>
    <button onClick={postData}>Submit</button>
    </>
  )
}
