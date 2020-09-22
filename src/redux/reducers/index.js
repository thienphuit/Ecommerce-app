import { combineReducers } from 'redux'
import searchReducer from './search'
import productReducer from './product'
import notificationReducer from './notify'

const rootReducer = combineReducers({
  search: searchReducer, products: productReducer, notify: notificationReducer,
})
export default rootReducer
