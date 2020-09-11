import React from 'react'
import {
  View, TextInput, SafeAreaView, StyleSheet, ScrollView,
} from 'react-native'

import { Text, ButtonComponent, Header } from '../../components'
import {
  TypoGrayphy, Colors, mainPaddingH, calWidth,
} from '../../../assets/styles'

const AddCard = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="AddCard" navigation={navigation} />
      <ScrollView>
        <View style={{ flex: 1, paddingHorizontal: mainPaddingH }}>
          <View style={{ marginTop: mainPaddingH }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>Card Number</Text>
            <TextInput style={styles.input} placeholder="Enter Card Number" />
          </View>
          <View style={{ marginTop: 24 * calWidth, flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ width: 165 * calWidth }}>
              <Text style={{ ...TypoGrayphy.heading5 }}>Expiration Date</Text>
              <TextInput style={styles.input} placeholder="Expiration Date" />
            </View>
            <View style={{ width: 165 * calWidth }}>
              <Text style={{ ...TypoGrayphy.heading5 }}>Expiration Date</Text>
              <TextInput style={styles.input} placeholder="Expiration Date" />
            </View>
          </View>
          <View style={{ marginTop: mainPaddingH }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>Card Holder</Text>
            <TextInput style={styles.input} placeholder="Enter Card Number" />
          </View>
        </View>
      </ScrollView>
      <ButtonComponent name="Save" handleClick={() => { }} />
      <SafeAreaView />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: mainPaddingH,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: 12 * calWidth,
  },
})
export default AddCard
