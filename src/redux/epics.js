import { combineEpics, ofType } from 'redux-observable'
import * as ACTIONS from './actions'
import {from, ignoreElements, map, mergeAll,mergeMap,switchMap, take, toArray} from 'rxjs';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b00079d48amsh592f2f2ceedbbe6p1aac5fjsnd404879203ab',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
};

const fetchNewGamesEpic = action$ => action$.pipe(
    ofType(ACTIONS.FETCH_NEW_GAMES),
    switchMap((action)=>from(
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=release-date',options)
        .then(res=>{
            if(res.ok){
                return res.json()
            }
            return ignoreElements()
        }).then(games=>{
            return games
        })
    )),
    mergeAll(),
    take(4),
    toArray(),
    map(games=>({type:ACTIONS.SAVE_NEW_GAMES,payload:games}))
);

const fetchShowCaseEpic = action$ => action$.pipe(
    ofType(ACTIONS.FETCH_SHOWCASE),
    switchMap(action=>from(
        fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc',options)
        .then(res=>{
            if(res.ok){
                return res.json()
            }
            return ignoreElements()
        }).then(game=>{
            return game
        })
    )),
    mergeAll(),
    take(6),
    toArray(),
    map(game=>({type:ACTIONS.SAVE_SHOWCASE,payload:game}))
)

const authEpic = action$ => action$.pipe(
    ofType(ACTIONS.LOGGED_IN),
    map(action=>{
        const username = action.payload
        return ({type:ACTIONS.SAVE_USER,payload:username})
    })
)

const rootEpic = combineEpics(fetchNewGamesEpic,fetchShowCaseEpic,authEpic)
export default rootEpic

// https://www.freetogame.com/api/game?id=452