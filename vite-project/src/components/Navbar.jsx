
import './navbar.scss'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


const Navbar = () => {

 const items = useSelector((state) => state.cart)


  return (
    <div className='main'>
       My-Shoping App
       <div className='nav-menu'>
        <Link className='list-item' to={'/'}>Home</Link>
        <Link className ='list-item' to={'/cart'}>Cart</Link>
        <span className='list-item'>items :{items.length}</span>
       </div>
    </div>
  )
}

export default Navbar
