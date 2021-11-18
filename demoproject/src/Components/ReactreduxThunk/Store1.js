// import {Reducer} from './Reducer'
// import {createStore} from 'redux';
// const store1 = createStore(Reducer);
// export default store1;






//==========================================================================

import {Reducer} from './Reducer'
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//npm install redux-persist

import logger from 'redux-logger'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['Reducer'] //When you reload a web page data will not removed
    //whitelist:['Reducer'] used when we navigate from one component to another
}

const persistedReducer = persistReducer(persistConfig, Reducer, applyMiddleware(logger))
export const store = createStore(persistedReducer)
export const persistor = persistStore(store)
export default store;
