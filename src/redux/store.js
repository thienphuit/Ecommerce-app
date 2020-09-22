import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import Reactotron from '../configs/ReactotronConfig'
import rootReducer from './reducers'
import rootSaga from './sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
// save local storage
const persistedReducer = persistReducer(persistConfig, rootReducer)
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// compose many middleware
const composeEnhancers = compose

const store = createStore(
  persistedReducer,
  composeEnhancers(
    Reactotron.createEnhancer(),
    applyMiddleware(sagaMiddleware)
  )
)
// then run the saga
sagaMiddleware.run(rootSaga)
persistStore(store)

export default store
