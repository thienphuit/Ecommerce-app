import {
  View, StyleSheet, SafeAreaView, FlatList, Dimensions,
} from 'react-native'
import React, { useState } from 'react'
import { CartAddress, ButtonComponent, Header } from '../../components'
import {
  mainPaddingH, calWidth,
} from '../../../assets/styles'
import {
  plus,
} from '../../../assets/images'
import { Screen } from '../../constants'

const { width } = Dimensions.get('window')

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
      <View style={styles.listAdrress}>
        <FlatList
          data={listAddress}
          keyExtractor={(item, index) => `list shipto ${index}`}
          renderItem={({ item }) => {
            return (
              <View key={item.id}>
                <CartAddress
                  itemCart={item}
                  handleFocus={(itemCart) => handleFocus(itemCart)}
                  colorFocus={item.id === indexCart}
                  navigation={() => navigation.navigate(Screen.Address)}
                  handleDelete={() => navigation.navigate(Screen.DeleteAddress)}
                />
              </View>
            )
          }}
        />
      </View>
      <View style={styles.buttonPayment}>
        <ButtonComponent name="Next" handleClick={() => navigation.navigate(Screen.Payment)} />
      </View>
      <SafeAreaView />
    </View>
  )
}

const styles = StyleSheet.create({
  listAddress: {
    flex: 1,
  },
  buttonPayment: {
    bottom: 20 * calWidth,
    position: 'absolute',
    width,
    backgroundColor: 'transparent',
  },
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
