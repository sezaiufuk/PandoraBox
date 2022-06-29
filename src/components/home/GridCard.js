import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/components/home/gridCard.css'
export default function GridCard({game}) {
    const {title,thumbnail,short_description,genre,id} = game
  return (
    <Link to={`/game/${id}`} className='gridCard'>
        <img src={thumbnail}></img>
        <div className='gridCard__overlay'></div>
        <div className='gridCard__details flex'>
            <h3>{title}&nbsp;&nbsp;<span>-&nbsp;{genre}</span></h3>
            <h4 className='gridCard__description'>{short_description}</h4>
        </div>
    </Link>
  )
}
