import React, { useState } from 'react'
import {
  View, Image, Dimensions, SafeAreaView, TouchableOpacity,
} from 'react-native'
import { creditCard, debitCard } from '../../../assets/images'
import { calWidth } from '../../../assets/styles'
import { ButtonComponent, Header } from '../../components'

const { width } = Dimensions.get('window')
const CreditCard = (props) => {
  const [chooseCard, setChooseCard] = useState('')

  const { navigation } = props
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView />
      <Header title="CreditCard" navigation={navigation} />
      <View style={{ alignItems: 'center', padding: 16, flex: 1 }}>
        <TouchableOpacity onPress={() => setChooseCard('creditcard')}>
          <Image source={creditCard} style={{ width: width - 32 * calWidth, marginBottom: 16 }} resizeMode="cover" />

        </TouchableOpacity>
        <Image source={debitCard} style={{ width: width - 32 * calWidth, marginBottom: 16 }} resizeMode="cover" />
      </View>
      <View style={{ marginBottom: 16 }}>
        <ButtonComponent
          name="Add Card"
          creditCard={chooseCard}
          handleClick={() => props.navigation.navigate('AddCard', {
            card: chooseCard,
          })}
        />
      </View>
      <SafeAreaView />
    </View>
  )
}
export default CreditCard
