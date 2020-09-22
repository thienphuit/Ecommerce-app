import React, { useState } from 'react'
import {
  View, Image, Dimensions, SafeAreaView, TouchableOpacity, StyleSheet,
} from 'react-native'
import { creditCard, debitCard } from '../../../assets/images'
import { calWidth, mainPaddingH } from '../../../assets/styles'
import { ButtonComponent, Header } from '../../components'
import { Screen } from '../../constants'

const { width } = Dimensions.get('window')
const CreditCard = (props) => {
  const [chooseCard, setChooseCard] = useState('')

  const { navigation } = props
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <Header title="CreditCard" navigation={navigation} />
      <View style={styles.viewWrapper}>
        <TouchableOpacity onPress={() => setChooseCard('creditcard')}>
          <Image source={creditCard} style={styles.imageCard} resizeMode="cover" />
        </TouchableOpacity>
        <Image source={debitCard} style={styles.imageCard} resizeMode="cover" />
      </View>
      <View style={styles.viewButtonSubmit}>
        <ButtonComponent
          name="Add Card"
          creditCard={chooseCard}
          handleClick={() => props.navigation.navigate(Screen.AddCard, {
            card: chooseCard,
          })}
        />
      </View>
      <SafeAreaView />
    </View>
  )
}
const styles = StyleSheet.create({
  viewButtonSubmit: { marginBottom: mainPaddingH },
  viewWrapper: {
    alignItems: 'center',
    padding: mainPaddingH,
    flex: 1,
  },
  imageCard: {
    width: width - 32 * calWidth,
    marginBottom: mainPaddingH,
    borderRadius: 5 * calWidth,
  },
})
export default CreditCard
