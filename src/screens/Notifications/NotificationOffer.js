import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList,
} from 'react-native'
import { NotificationItem, Header } from '../../components'
import { offer } from '../../../assets/images'

const listItem = [
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
]
const NotficationOffer = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Offer" navigation={navigation} />
      <FlatList
        data={listItem}
        renderItem={({ item }) => <NotificationItem item={item} isIcon />}
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

export default NotficationOffer
