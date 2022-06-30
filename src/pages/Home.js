import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as ACTIONS from '../redux/actions'
import GamesGrid from '../components/home/GamesGrid'
import GameShow from '../components/home/GameShow'

export default function Home() {
    const dispatch = useDispatch()
    const newGames = useSelector(state=>state.gamesReducer.newGames)
    const gamesToShow = useSelector(state=>state.gamesReducer.gamesToShow)
    useEffect(() => {
        dispatch({type:ACTIONS.FETCH_NEW_GAMES})
        dispatch({type:ACTIONS.FETCH_SHOWCASE})
    }, [])
  return (
    <>
        <GamesGrid title="New Games" games={newGames}/>
        <GameShow gamesToShow={gamesToShow}/>
    </>
  )
}
