import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { debounceTime, fromEvent,map } from 'rxjs';
import '../assets/css/components/navbar.css';
import * as ACTIONS from '../redux/actions'

export default function Navbar() {
  const username = useSelector(state=>state.authReducer.userName)
  const logoutButton = useRef()
  const dispatch = useDispatch()
  useEffect(()=>{
    fromEvent(logoutButton.current,'click').pipe(
      debounceTime(300),
      map(()=>dispatch({type:ACTIONS.LOGGED_OUT}))
    ).subscribe()
  },[])
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
            <li id='logoutListItem'><Link to='#' ref={logoutButton}>Logout</Link></li>
        </ul>
    </nav>
  )
}
