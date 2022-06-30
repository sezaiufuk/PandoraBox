import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import '../assets/css/components/navbar.css';

export default function Navbar() {
  const username = useSelector(state=>state.authReducer.userName)
  return (
    <nav className='flex spaceBetweenItems'>
        <h2 className='logo'>
            <Link to='/'>
                <span>Pandora</span>
                <span>Box</span>
            </Link>
        </h2>
        <ul className='flex spaceBetweenItems'>
            <li><Link to='/buyPandoraBox'>Buy a Pandora Box</Link></li>
            <li id='profileListItem'><Link to='/'>{username} - 1265PC</Link></li>
            <li id='logoutListItem'><Link to='/'>Logout</Link></li>
        </ul>
    </nav>
  )
}
