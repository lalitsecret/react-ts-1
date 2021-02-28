// import 
import thunk from 'redux-thunk'
import reducer from './reducer'
import {createStore,applyMiddleware(thunk)}
const reducer=createStore(reducer,applyMiddleware(thunk))
export default reducer