import React, { useState } from 'react'
import {
  View, Image, TouchableOpacity, SafeAreaView, StyleSheet,
} from 'react-native'

import { Text, Header } from '../../components'
import { love_24 } from '../../../assets/images'
import { TypoGrayphy, Colors, mainPaddingH } from '../../../assets/styles'

const listBank = [
  { id: 1, title: 'Credit Card Or Debit' },
  { id: 2, title: 'Paypal' },
  { id: 3, title: 'Bank Transfer' },
]
const PaymentMethod = (props) => {
  const [selected, setSelected] = useState(0)
  const handleChoose = (item) => {
    const { navigation } = props
    setSelected(item.id)
    switch (item.id) {
      case 1:
        navigation.navigate('Credit')

        break
      case 2:
        navigation.navigate('Credit')
        break
      case 3:
        navigation.navigate('AddCard')
        break
      default:
        console.log('============================')
        console.log('result')
        console.log('============================')
    }
  }
  const { navigation } = props
  return (
    <View>
      <SafeAreaView />
      <Header title="Payment" navigation={navigation} />
      {listBank.map((item) => {
        return (
          <TouchableOpacity onPress={() => handleChoose(item)} key={`List idnex ${item.id}`}>
            <View
              style={[styles.itemPayment, { backgroundColor: selected === item.id ? Colors.neutralLine : 'transparent' }]}
            >
              <Image source={love_24} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  title: { marginLeft: mainPaddingH, ...TypoGrayphy.heading6 },
  itemPayment: {
    padding: mainPaddingH,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
export default PaymentMethod
