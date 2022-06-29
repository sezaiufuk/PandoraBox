import React from 'react'
import { Routes as Switch , Route }  from 'react-router-dom'
import Home from './src/pages/Home'
import GamePage from './src/pages/GamePage'
export default function Routes() {
  return (
    <Switch>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/game/:id' element={<GamePage/>}/>
    </Switch>
  )
}
