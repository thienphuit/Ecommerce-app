import {
  View, StyleSheet, SafeAreaView, FlatList,
} from 'react-native'
import React from 'react'
import { NotificationItem, Header } from '../../components'
import { transaction } from '../../../assets/images'

const listItem = [
  {
    id: 1,
    title: 'The Best Title',
    content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    image: transaction,
  },
  {
    id: 2,
    title: 'SUMMER OFFER 98% Cashback',
    content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    image: transaction,
  },
  {
    id: 3,
    title: 'Special Offer 25% OFF',
    content: 'Culpa cillum consectetur labore nulla nulla magna irure. Id veniam culpa officia aute dolor amet deserunt ex proident commodo',
    image: transaction,
  },
]
const NotficationOffer = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Activity" navigation={navigation} />
      <View>
        <FlatList
          data={listItem}
          renderItem={({ item }) => <NotificationItem item={item} isIcon />}
          keyExtractor={(item) => `List notift ${item.id}`}
        />

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
