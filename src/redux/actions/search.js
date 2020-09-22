import { searchTypes } from '../types'

const searchAction = (data) => {
  return {
    type: searchTypes.SEARCH_TYPE,
    payload: data,
  }
}
const getSearchAction = () => {
  return {
    type: searchTypes.SEARCH_TYPE,
  }
}
export {
  searchAction, getSearchAction,
}
