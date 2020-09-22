import { searchTypes } from '../types'

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
    case searchTypes.SEARCH_TYPE:
      return {
        ...state, listSearch: [...state.listSearch],
      }
    case searchTypes.SEARCH_TYPE_SUCCESS: {
      const { data } = action.payload
      return {
        ...state, ...data,
      }
    }

    default:
      return state
  }
}
export default searchReducer
