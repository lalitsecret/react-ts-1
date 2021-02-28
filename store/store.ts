// import 
import thunk from 'redux-thunk'
import reducer from './reducer'
import {createStore,applyMiddleware(thunk)}
const store=createStore(reducer,applyMiddleware(thunk))
export default store