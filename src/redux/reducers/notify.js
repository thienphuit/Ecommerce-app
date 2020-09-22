import { notifyTypes } from '../types'
import {
  offer, productLike, shoes_2, shoesImage,
} from '../../../assets/images'

const initState = {
  notifyOffers: [
    {
      title: 'The Best Title',
      content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
      image: offer,
    },
    {
      title: 'SUMMER OFFER 98% Cashback',
      content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
      image: offer,
    },
    {
      title: 'Special Offer 25% OFF',
      content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
      image: offer,
    },
  ],
  notifyFeeds: [
    {
      title: 'The Best Title',
      content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
      image: productLike,
    },
    {
      title: 'SUMMER OFFER 98% Cashback',
      content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
      image: shoes_2,
    },
    {
      title: 'Special Offer 25% OFF',
      content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
      image: shoesImage,
    },
  ],
}
const notifyReducer = (state = initState, action) => {
  switch (action.type) {
    case notifyTypes.NOTIFY_OFFER:
      return {
        ...state, notifyOffers: [...state.notifyOffers],
      }
    case notifyTypes.NOTIFY_FEED:
      return {
        ...state, notifyFeeds: [...state.notifyFeeds],
      }

    default:
      return state
  }
}

export default notifyReducer
