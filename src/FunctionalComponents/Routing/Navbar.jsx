import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
   <>
   <div className='navbar navbar-expand-lg bg-primary'>
   <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
    <li className="nav-item "><NavLink className='nav-link text-light' to=''>Home</NavLink></li>
    <li className="nav-item "><NavLink className='nav-link text-light' to='/About'>About</NavLink></li>
    <li className="nav-item "><NavLink className='nav-link text-light' to='/Contact?name=kajal tiwari&salary=150000&dsg=trainer'>Contact</NavLink></li>
    <li className="nav-item "><NavLink className='nav-link text-light' to='/Profile/kajal tiwari/150000/trainer'>Profile</NavLink></li>
   </ul>
   </div>
   </>
  )
}
