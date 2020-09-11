import {
  View, StyleSheet, ScrollView, SafeAreaView,
} from 'react-native'
import React, { useState } from 'react'
import { CartAddress, ButtonComponent, Header } from '../../components'
import {
  mainPaddingH, calWidth,
} from '../../../assets/styles'
import {
  plus,
} from '../../../assets/images'

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
      <SafeAreaView />
      <Header title="Shipto" navigation={navigation} icon={plus} />
      <ScrollView>
        <View>
          {listAddress.map((item) => <View key={item.id}>
            <CartAddress
              itemCart={item}
              handleFocus={(itemCart) => handleFocus(itemCart)}
              colorFocus={item.id === indexCart}
              navigation={() => navigation.navigate('Address')}
              handleDelete={() => navigation.navigate('DeleteAddress')}
            />
          </View>)}
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
