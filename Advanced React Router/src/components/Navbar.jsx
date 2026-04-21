import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='px-4 py-4 bg-amber-400 items-center flex justify-between '>
        <h2 className='text-white text-xl font-semibold px-10'>Aditya Shop's</h2> 
      <div className='flex gap-6 text-white text-xl font-semibold px-4'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'> Contact</Link>
        <Link to='/Product'> Products</Link>        
      </div>
      
    </div>
  )
}

export default Navbar
