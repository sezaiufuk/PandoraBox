import React from 'react'
import { Routes as Switch , Route }  from 'react-router-dom'
import Home from './src/pages/Home'
import GamePage from './src/pages/GamePage'
import LoginPage from './src/pages/LoginPage'
import Navbar from './src/components/Navbar'
import BuyPandoraBoxPage from './src/pages/BuyPandoraBoxPage'
import { useSelector } from 'react-redux'

export default function Routes() {
  const isLoggedIn = useSelector(state=>state.authReducer.isLoggedIn)
  return (
    <Switch>
        {
          isLoggedIn ?
          <Route exact path='/' element={
            <>
              <Navbar/>,
              <Home/>
            </>
          }/>
          :
          <Route exact path='/' element={<LoginPage/>}/>
        }
        
        <Route exact path='/game/:id' element={
          <>
            <Navbar/>,
            <GamePage/>
          </>
        }/>

        <Route exact path='/buyPandoraBox' element={
          <>
            <Navbar/>,
            <BuyPandoraBoxPage/>
          </>
        }/>
    </Switch>
  )
}
