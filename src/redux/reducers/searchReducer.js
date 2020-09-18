import * as searchType from '../types'

const init = {
  listSearch: [
    { id: 1, title: 'Nike Air Max 97 Utility' },
    { id: 2, title: 'Nike Air Vapormax 360' },
    { id: 3, title: 'Nike Air Max 270 React ENG' },
    { id: 4, title: 'Nike Air Max 270 React' },
    { id: 5, title: 'Nike Air VaporMax Flyknit 3' },
  ],
}

const searchReducer = (state = init, action) => {
  switch (action.type) {
    case searchType.SEARCH_TYPE:
      return {
        ...state, ...state.listSearch,
      }

    default:
      return state
  }
}
export default searchReducer
