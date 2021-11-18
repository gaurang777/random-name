console.log("Redux!!!")
const redux = require('redux')
const createStore = redux.createStore;

//Type
const BUY_BOOK = "BUY_BOOK"
const BUY_PEN = "BUY_PEN"


const initialState = {
    numberOfBook:250,
    numberOfPen:1000
}

const action1 = {
    type:BUY_BOOK
}
const action2 = {
    type:BUY_PEN
}

//WRAPPING ACTION
function buy_Book(){
    return action1
}
function buy_Pen(){
    return action2
}

//create reducer
const Reducer = (state=initialState,action)=>{
    switch(action.type){
        case BUY_BOOK:return {
            ... state,
            numberOfBook:state.numberOfBook - 1
        }
        case BUY_PEN:return {
            ... state,
            numberOfPen:state.numberOfPen- 1
        }
        default: return state
    }
}

const store = createStore(Reducer);
console.log("InitialState:",store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log("Update State Value:",store.getState())
})
store.dispatch(buy_Book())
unsubscribe()