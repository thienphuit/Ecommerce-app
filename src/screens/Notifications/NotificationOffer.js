import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList,
} from 'react-native'
import { useSelector } from 'react-redux'
import { NotificationItem, Header } from '../../components'

const NotficationOffer = (props) => {
  const { navigation } = props

  const listOffer = useSelector((state) => state.notify.notifyOffers)
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Offer" navigation={navigation} />
      <FlatList
        data={listOffer}
        renderItem={({ item }) => <NotificationItem item={item} isIcon />}
        keyExtractor={(item, index) => `List notify ${index}`}
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
