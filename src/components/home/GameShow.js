import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/components/home/gameShow.css'
export default function GameShow({gamesToShow}) {
  return (
    <div className='gameShow'>
        <h3>Showcase</h3>
        <div className='gameShow__cards flex'>
            {
                    gamesToShow[0] && gamesToShow[0].map(game=>{
                        return(
                            <Link to={"/"} className='gameShow__card'>
                            <div>
                                <img src={game.thumbnail}></img>
                                <div className='gameShow__card__details'>
                                    <span className='gameShow__card__developerName'>{game.developer}</span><br></br>
                                    <span className='gameShow__card__title'>{game.title} - {game.id} PC</span>
                                </div>
                            </div>
                            </Link>
                        )
                    })
            }
        </div>
    </div>
  )
}
