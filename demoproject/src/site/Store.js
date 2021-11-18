import {VegetableReducer} from './Reducers';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    VegetableReducer: VegetableReducer
  })

const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;






//  import VegetableReducer from './Reducer';

// import { createStore, combineReducers } from 'redux'

// const rootReducer = combineReducers({
//     VegetableReducer: VegetableReducer
//   })

// const store = createStore(rootReducer);

// export default store;









// // import {Reducer} from './Reducers'
// // import { createStore } from 'redux' 
// // const Store=createStore(Reducer)
// // export default Store