import {
  View, StyleSheet, SafeAreaView,
} from 'react-native'
import React from 'react'
import { CardOrder, Header } from '../../components'
import {
  mainPaddingH, calWidth,
} from '../../../assets/styles'
import { Screen } from '../../constants'

const Order = ({ navigation }) => {
  // const handleFocus = (item) => {
  //   setIndexCart(item.id)
  // }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={Screen.Order} navigation={navigation} />
      <CardOrder />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  shipto: {
    padding: mainPaddingH,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5 * calWidth,
    marginHorizontal: mainPaddingH,
    marginTop: mainPaddingH,
  },
})

export default Order
