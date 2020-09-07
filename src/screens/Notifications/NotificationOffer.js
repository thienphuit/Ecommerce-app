import React from 'react'
import { View, StyleSheet } from 'react-native'
import { NotificationItem } from '../../components'

const listItem = [
  {
    title: 'The Best Title',
    content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    image: 'tag',
  },
  {
    title: 'SUMMER OFFER 98% Cashback',
    content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    image: 'tag',
  },
  {
    title: 'Special Offer 25% OFF',
    content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    image: 'tag',
  },
]
const NotficationOffer = () => {
  return (
    <View style={styles.container}>
      <View>
        <NotificationItem title={listItem[0].title} content={listItem[0].content} image={listItem[0].image} />
        <NotificationItem title={listItem[1].title} content={listItem[1].content} image={listItem[1].image} />
        <NotificationItem title={listItem[2].title} content={listItem[2].content} image={listItem[2].image} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default NotficationOffer
