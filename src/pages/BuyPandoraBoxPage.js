import React from 'react'
import '../assets/css/components/buyPandoraBoxPage/buyPandoraBox.css'
import pandoraBox from '../assets/images/pandoraBox.png'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'

export default function BuyPandoraBoxPage() {
    const isLoggedIn = useSelector(state=>state.authReducer.isLoggedIn)

  return (
      <>
        {
            isLoggedIn || <Navigate to="/"/>
        }
        <div id='buyPandoraBox__container' className='flex'>
          <img src={pandoraBox}></img>
          <div id='buyPandoraBox__details' className='flex'>
            <h2>Buy a Pandora Box</h2>
            <p>
                You can buy a Pandora Box for earning random,
                popular computer games and start to play with other players!
                Unlimited access, lifetime ownership of the purchased games.
            </p>
            <h3>What can you earn ?</h3>
            <ul>
                <li>Online Games</li>
                <li>Offline Games</li>
                <span id='withText'>with</span>
                <li>DLC</li>
                <li>In-game Equipments</li>
            </ul>
            <div id='purchase_container' className='flex'>
                <input id="pandoraBoxButton" type="button" value="Purchase"></input>
                <span>- 250 PC</span>
            </div>
          </div>
      </div>
      </>
  )
}
