import { cartTypes } from '../types'
import {
  productLike,
  shoes_2,
  phoduct2,
} from '../../../assets/images'

const initState = {
  cartProduct: [
    {
      id: 1, title: 'Nike Air Max 97 Utility', image: productLike, quantity: 1, price: 534.33,
    },
    {
      id: 2, title: 'Nike Air Vapormax 360', image: shoes_2, quantity: 1, price: 534.33,
    },
    {
      id: 3, title: 'Nike Air Max 270 React ENG', image: phoduct2, quantity: 1, price: 234.33,
    },
    {
      id: 4, title: 'Nike Air Max 270 React ENG', image: phoduct2, quantity: 1, price: 104.33,
    },
  ],
}

const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case cartTypes.CART_TYPE:
      return { ...state }
    case cartTypes.CART_INCREATE_DECREATE: {
      const { productCode, status } = action.payload
      const cartProduct = [...state.cartProduct]
      const index = cartProduct.findIndex((item) => item.id === productCode)
      if (status) {
        cartProduct[index].quantity++
      } else if (cartProduct[index].quantity > 1) {
        cartProduct[index].quantity--
      }
      return { ...state, cartProduct }
    }
    case cartTypes.CART_TYPE_DELETE: {
      const { productCode } = action.payload
      /// const cartProduct = [...state.cartProduct]
      // const newList = cartProduct.filter((item) => item.id !== productCode)
      return {
        ...state, cartProduct: [...state.cartProduct.filter((item) => item.id !== productCode)],
      }
    }
    default:
      return state
  }
}

export default cartReducer
