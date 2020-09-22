import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList,
} from 'react-native'
import { useSelector } from 'react-redux'
import { NotificationItem, Header } from '../../components'

const NotificationFeed = (props) => {
  const { navigation } = props
  const listFeed = useSelector((state) => state.notify.notifyFeeds)
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Feed" navigation={navigation} />
      <FlatList
        data={listFeed}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item, index) => `List notift ${index}`}
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
