import { combineReducers } from 'redux'
import * as ACTIONS from './actions'
const games={
    newGames:[],
    gamesToShow:[],
}
const gamesReducer = function(state=games,action){
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

const authReducer = function(state={userName:"",isLoggedIn:false},action){
    switch(action.type){
        case ACTIONS.SAVE_USER:
            return{
                ...state,
                userName:action.payload
            }
        case ACTIONS.LOGGED_IN:
            return{
                ...state,
                isLoggedIn:true
            }
        case ACTIONS.LOGGED_OUT:
            return{
                ...state,
                userName:"",
                isLoggedIn:false
            }
        default:
            return state
    }
}
export default combineReducers({authReducer,gamesReducer})

