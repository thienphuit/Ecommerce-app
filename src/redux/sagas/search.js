import { call, put, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { searchTypes } from '../types'

function* getSearchSaga() {
  try {
    const search = yield call(() => axios.get('http://api.openweathermap.org/data/2.5/weather?q=Ho Chi Minh&appid=5a946fa5e49dfe52dca7c9e3e78e9463&units=metric'))
    yield put({ type: searchTypes.SEARCH_TYPE_SUCCESS, payload: { data: search.data } })
  } catch (error) {
    console.log('============================')
    console.log('tronssss', 'erro')
    console.log('============================')
    yield put({ type: searchTypes.SEARCH_TYPE_FAIL, payload: { error } })
  }
}

function* searchSaga() {
  yield takeLatest(searchTypes.SEARCH_TYPE, getSearchSaga)
}

export default searchSaga
