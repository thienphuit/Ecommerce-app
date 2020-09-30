import { productTypes } from '../types'
import {
  productLike,
  shoes_2,
  phoduct2,
  shirt,
  dress,
  womanBag,
  womanShoes,
  tshirt,
  promotionImage, shoesImage,
} from '../../../assets/images'

const init = {
  listShoes: [
    { id: 1, title: 'Nike Air Max 97 Utility', image: productLike },
    { id: 2, title: 'Nike Air Vapormax 360', image: shoes_2 },
    { id: 3, title: 'Nike Air Max 270 React ENG', image: phoduct2 },
    { id: 4, title: 'Nike Air Max 270 React', image: productLike },
    { id: 5, title: 'Nike Air VaporMax Flyknit 3', image: phoduct2 },
  ],
  productLikes: [
    { id: 1, title: 'Nike Air Max 97 Utility', image: productLike },
    { id: 2, title: 'Nike Air Vapormax 360', image: shoes_2 },
    { id: 3, title: 'Nike Air Max 270 React ENG', image: phoduct2 },
    { id: 4, title: 'Nike Air Max 270 React ENG', image: phoduct2 },
  ],
  categorys: [
    { id: 1, image: shirt, title: 'Man shirt' },
    { id: 2, image: dress, title: 'Dress' },
    { id: 3, image: womanBag, title: 'Women Bag' },
    { id: 4, image: womanShoes, title: 'Woman Shoest' },
    { id: 5, image: tshirt, title: 'Man shirt' },
    { id: 6, image: tshirt, title: 'Man shirt' },
  ],
  swipperList: [
    { image: promotionImage },
    { image: shoes_2 },
    { image: shoesImage },
  ],
}
const productReducer = (state = init, action) => {
  switch (action.type) {
    case productTypes.PRODUCT_TYPE:
      return { ...state, products: [...state.listShoes] }
    case productTypes.PRODUCT_LIKE:
      return { ...state, productLikes: [...state.productLikes] }
    case productTypes.CATEGORY:
      return { ...state, categorys: [...state.categorys] }
    case productTypes.SWIPPERS:
      return { ...state, swipperList: [...state.swipperList] }
    default:
      return state
  }
}
export default productReducer
