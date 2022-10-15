import React from 'react'
import './header.css'
import Logo from '../../assets/logo.png'
const header = () => {
  return (
   <div className="header">
    <img src={Logo} alt="" className='logo' />
   
   <ul className='header-menu'>
    <li>Home</li>
    <li>Programs</li>
    <li>Why Us</li>
    <li>Plans</li>
    <li>Blogs</li>
    <li>About</li>
   </ul>
  
   </div>
  )
}

export default header