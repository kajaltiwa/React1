import React, { useState } from 'react'

export default function InputExample() {
    let [ name , setName] = useState("")
    let [email, setEmail] = useState("")
    let [phone, setPhone] = useState("")
    let [designation, setDesignation] = useState("")
    let [salary, setSalary] = useState("")
    let [city, setCity] = useState("")
    let [state, setState] = useState("")

    function postSubmit(){
        alert(`
            Name    :    ${name}
            Email   :    ${email}
            Phone   :    ${phone}
            designation : ${designation}
            Salary     :   ${salary}
            City    :    ${city}
            State   :  ${state}
            `)
    }
  return (
   <>
   <div className="main">
    <div className="center">
        <h2>Functional component input example</h2>
        <h2>Name  : {name}</h2>
        <h2>Email  :  {email}</h2>
        <h2>Phone  :  {phone}</h2>
        <h2>Designation :{designation}</h2>
        <h2>Salary  :  {salary}</h2>
        <h2>City  :  {city}</h2>
        <h2>State : {state}</h2>
        <input type="text" name='name' onChange={(e) => setName(e.target.value)} placeholder='Full Name'/>
        <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email Address'/>
        <input type="text" name='phone' onChange={(e) => setPhone(e.target.value)} placeholder='Phone Number'/>
        <input type="text" name='designation' onChange={(e) => setDesignation(e.target.value)} placeholder='Designation'/>
        <input type="number" name='salary' onChange={(e) => setSalary(e.target.value)} placeholder='Salary'/>
        <input type="text" name='city' onChange={(e) => setCity(e.target.value)} placeholder='City'/>
        <input type="text" name='state' onChange={(e) => setState(e.target.value)} placeholder='State'/>
        <button onClick={postSubmit}>Submit</button>
    </div>
   </div>
   </>
  )
}
