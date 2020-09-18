import { combineReducers } from 'redux'
import searchReducer from './searchReducer'
import productReducer from './productReducer'

const reducer = combineReducers({
  search: searchReducer, products: productReducer,
})
export default reducer
