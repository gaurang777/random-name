import {BUY_BOOK,BUY_PEN} from './Type'

const initialState = {
    numberOfBook:250,
    numberOfPen:1000
}

//create reducer
export const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_BOOK: return {
            ... state,
            numberOfBook:state.numberOfBook - 1
        }
        case BUY_PEN: return {
            ... state,
            numberOfPen:state.numberOfPen - 1
        }
        default: return state
    }
}