import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Contact() {
  let [searchParams, setSearchParams] = useSearchParams()
  let name = searchParams.get("name")
  let salary = searchParams.get("salary")
  let dsg = searchParams.get("dsg")
  return (
   <>
   <h1>this is Contact page</h1>
    {name ? <h2>Name : {name}</h2> : null}
   {salary ? <h2>Salary : {salary}</h2> : null}
    {dsg ? <h2>Designation : {dsg}</h2> : null}
   <img src="/images/img2.jpg"  alt="" /> 
   <img src="/images/img3.jpg" alt="" />
   <img src="/images/img4.jpg" alt="" />
   <img src="/images/img1.jpg" alt="" />
   </>
  )
}
