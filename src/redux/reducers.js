import GameShow from '../components/home/GameShow'
import * as ACTIONS from './actions'
const games={
    newGames:[],
    gamesToShow:[]
}
export default function(state=games,action){
    switch(action.type){
        case ACTIONS.SAVE_NEW_GAMES:
                return {
                    ...state,
                    newGames:[...state.newGames,action.payload]
                }
        case ACTIONS.SAVE_SHOWCASE:
            return {
                ...state,
                gamesToShow:[...state.gamesToShow,action.payload]
            }
        default:
            return state
    }
}

