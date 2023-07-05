
import './navbar.scss'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='main'>
       Navbar
       <div className='nav-menu'>
        <Link className='list-item' to={'/'}>Home</Link>
        <Link className ='list-item' to={'/cart'}>Cart</Link>
        <span className='list-item'>items : 0</span>
       </div>
    </div>
  )
}

export default Navbar
