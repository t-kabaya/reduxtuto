import {combineReducers, createStore} from 'redux';
import user from './userRedux'
import superUser from './superUserRedux'

export const rootReducer = combineReducers({  
  user: user,
  superUser: superUser
})

// store.js
export const store = createStore(rootReducer)