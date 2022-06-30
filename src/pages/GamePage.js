import React, { useEffect, useLayoutEffect, useState} from 'react'
import { useParams } from 'react-router'
import '../assets/css/components/gamePage/gamePageCard.css'
import { Navigate } from 'react-router'
import { useSelector } from 'react-redux'

export default function GamePage() {
    const gameID = useParams().id
    const [gameInfo, setGameInfo] = useState({})
    const isLoggedIn = useSelector(state=>state.authReducer.isLoggedIn)

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b00079d48amsh592f2f2ceedbbe6p1aac5fjsnd404879203ab',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    useLayoutEffect(() => {
      scrollTo({top:0})
    }, [])

    useEffect(() => {
        fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameID}`,options)
        .then(res=>{
            if(res.ok){
                return res.json()
            }
            return ignoreElements()
        }).then(gameInfo=>{
            return setGameInfo(gameInfo)
        })
        
    }, [])
    
  return (
    <>
    {
        isLoggedIn || <Navigate to="/"/>
    }
    <div className='gamePageCard__container'>
        <div className='gamePageCard flex'>
            <img src={gameInfo.thumbnail}></img>
            <div className='gamePageCard__details flex'>
                <h1>
                    {gameInfo.title} - {gameInfo.id} PC
                    <hr></hr>
                </h1>
                <p><span>Genre:&nbsp;</span> {gameInfo.genre}</p>
                <p><span>Developer:&nbsp;</span> {gameInfo.developer}</p>
                <p><span>Publisher:&nbsp;</span> {gameInfo.publisher}</p>
                <p><span>Release Date:&nbsp;</span> {gameInfo.release_date}</p>
                <p><span>Platform:&nbsp;</span> {gameInfo.platform}</p>
                <p><span>Description:</span><br></br>{gameInfo.short_description}</p>
                <button>Purchase</button>
            </div>
        </div>
    </div>
    </>
  )
}
