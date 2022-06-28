import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/components/navbar.css';

export default function Navbar() {
  return (
    <nav className='flex spaceBetweenItems'>
        <h2 className='logo'>
            <Link to='/'>
                <span>Pandora</span>
                <span>Box</span>
            </Link>
        </h2>
        <ul className='flex spaceBetweenItems'>
            <li><Link to='/'>Buy a Pandora Box</Link></li>
            <li><Link to='/'>Daily Reward</Link></li>
            <li id='profileListItem'><Link to='/'>Sezai Ufuk Oral</Link></li>
            <li id='logoutListItem'><Link to='/'>Logout</Link></li>
        </ul>
    </nav>
  )
}
