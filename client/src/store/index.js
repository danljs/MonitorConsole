import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { initial } from '../actions'

export default (()=>{
  const store = createStore(rootReducer, {}, applyMiddleware(thunk))
  store.dispatch
  store.dispatch(initial())
  //...
  return store
}())
