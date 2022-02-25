import React from 'react'
import { Link } from 'react-router-dom'

function Dropdown({ isOpen, toggle }) {
  return (
    <div 
      className={isOpen ? 'grid gird-rows justify-center text-center bg-yellow-500 items-center': 'hidden'}
      onClick={toggle}
    >
      <Link className='p-4' to='/'>Home</Link>
      <Link className='p-4' to='/menu'>Menu</Link>
      <Link className='p-4' to='/about'>About</Link>
      <Link className='p-4' to='/contact'>Contact</Link>
    </div>
  )
}

export default Dropdown