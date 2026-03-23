import React, { useState } from 'react'


export default function Input() {
    let [name, setName] = useState("")

    function getInputData(e){
       setName(e.target.value)
    }
    function postSubmit(){
        alert(`hello ${name}`)
    }
  return (
   <>
   <div className="main">
    <div className="center">
    <h2>this is function component input</h2>
    <h2>Name : {name} </h2>
   <input type="text" name='name' onChange={getInputData} placeholder='Full Name' />
   <button onClick={postSubmit}>Submit</button>
    </div>
   </div>
   
   </>
  )
}
