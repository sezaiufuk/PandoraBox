import React from 'react'
import { Routes as Switch , Route }  from 'react-router-dom'
import Home from './src/pages/Home'
import GamePage from './src/pages/GamePage'
import LoginPage from './src/pages/LoginPage'
import Navbar from './src/components/Navbar'
import BuyPandoraBoxPage from './src/pages/BuyPandoraBoxPage'
import { useSelector } from 'react-redux'
import AuthCheck from './AuthCheck'

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
            <AuthCheck/>
            <Navbar/>,
            <GamePage/>
          </>
        }/>

        <Route exact path='/buyPandoraBox' element={
          <>
            <AuthCheck/>
            <Navbar/>,
            <BuyPandoraBoxPage/>
          </>
        }/>
    </Switch>
  )
}
