import React from 'react'
import '../../assets/css/components/home/gamesGrid.css'
import GridCard from './GridCard'

export default function GamesGrid({title,games}) {
  return (
    <div className='gamesGrid'>
        <h3>{title}</h3>
        <div className='gamesGrid__cards flex'>
          {
            games[0] && games[0].map(game=>{
              return(
                <GridCard game={game} key={game.id}/>
              )
            })
          }
            
        </div>
    </div>
  )
}
