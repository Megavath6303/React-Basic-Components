import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const NavStyles =({isActive}) =>{
    return{
       fontWeight: isActive? 'bold' : 'normal',
       textDecoration: isActive? 'none' : 'none',
       backgroundColor: isActive? 'orange' : '',
       padding:isActive? '8px 10px' : '',
       transition:isActive? '0.4s' : ''
    }
  }
  return (
    <nav>
        <NavLink style={NavStyles} to='/'>Home</NavLink>
        <NavLink style={NavStyles} to='/About'>About</NavLink>
        <NavLink style={NavStyles} to='/Services'>Services</NavLink>
    </nav>
    )
}

export default Navbar