import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NotificationItem } from '../../components'
import { productLike, shoes_2, shoesImage } from '../../../assets/images'

const listItems = [
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
]
const NotificationFeed = () => {
  return (
    <View style={styles.container}>
      <View>
        <NotificationItem title={listItems[0].title} content={listItems[0].content} image={listItems[0].image} />
        <NotificationItem title={listItems[1].title} content={listItems[1].content} image={listItems[1].image} />
        <NotificationItem title={listItems[2].title} content={listItems[2].content} image={listItems[2].image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default NotificationFeed
