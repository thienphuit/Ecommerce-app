import { combineReducers } from 'redux'
import searchReducer from './search'
import productReducer from './product'
import notificationReducer from './notify'
import cartReducer from './cart'

const rootReducer = combineReducers({
  search: searchReducer, products: productReducer, notify: notificationReducer, cart: cartReducer,
})
export default rootReducer
