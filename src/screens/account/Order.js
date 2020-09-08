import {
  View, StyleSheet, ScrollView, SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import { CardOrder } from '../../components'
import {
  mainPaddingH, calWidth,
} from '../../../assets/styles'

const listAddress = [
  { id: 1, title: 'Priscekila' },
  { id: 2, title: 'Priscekila' },
]
const Order = ({ navigation }) => {
  const [indexCart, setIndexCart] = useState(0)
  const handleFocus = (item) => {
    setIndexCart(item.id)
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
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
