import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList,
} from 'react-native'
import { NotificationItem, Header } from '../../components'
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
const NotificationFeed = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Feed" navigation={navigation} />
      <FlatList
        data={listItems}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item) => `List notift ${item.id}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default NotificationFeed
