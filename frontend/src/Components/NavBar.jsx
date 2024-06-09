import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='fixed flex flex-row w-full justify-between'>
      <div>
        LOGO
      </div>
      <ul className='flex flex-row gap-2'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/event'}>Event</Link></li>
        <li><Link to={'/scrims'}>Scrims List</Link></li>
        <li><Link to={'/server'}>Server List</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar
