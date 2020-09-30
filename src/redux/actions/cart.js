import { cartTypes } from '../types'

const cartAction = (data) => {
  return {
    type: cartTypes.CART_TYPE,
    payload: { data },
  }
}
const cartDeleteAction = (productCode) => {
  return {
    type: cartTypes.CART_TYPE_DELETE,
    payload: { productCode },
  }
}
const cartIncreateAndDecreateAction = (productCode, status) => {
  return {
    type: cartTypes.CART_INCREATE_DECREATE,
    payload: { productCode, status },
  }
}

export {
  cartAction, cartIncreateAndDecreateAction, cartDeleteAction,
}
