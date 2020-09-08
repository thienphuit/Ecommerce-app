import {
  View, StyleSheet, ScrollView, SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import { CartAddress, ButtonComponent } from '../../components'
import {
  mainPaddingH, calWidth,
} from '../../../assets/styles'

const listAddress = [
  { id: 1, title: 'Priscekila' },
  { id: 2, title: 'Priscekila' },
]
const Shipto = ({ navigation }) => {
  const [indexCart, setIndexCart] = useState(0)
  const handleFocus = (item) => {
    setIndexCart(item.id)
  }
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          {listAddress.map((item) => <CartAddress
            itemCart={item}
            handleFocus={(itemCart) => handleFocus(itemCart)}
            colorFocus={item.id === indexCart}
            navigation={() => navigation.navigate('Address')}
            handleDelete={() => navigation.navigate('DeleteAddress')}
          />)}
        </View>
      </ScrollView>
      <View style={{ marginBottom: mainPaddingH }}>
        <ButtonComponent name="Next" handleClick={() => navigation.navigate('Payment')} />
      </View>
      <SafeAreaView />
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

export default Shipto
