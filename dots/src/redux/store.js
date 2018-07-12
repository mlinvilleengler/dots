import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

const middlewares = [thunk]

export const store = createStore(reducer, null, applyMiddleware(...middlewares))

export default { store }
