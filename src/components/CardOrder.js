import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './Text'
import {
  Colors, TypoGrayphy, mainPaddingH, calWidth,
} from '../../assets/styles'

const CardOrder = () => {
  return (
    <View style={styles.container}>
      <Text style={{ ...TypoGrayphy.heading5 }}>LQNSU346JK</Text>
      <Text style={styles.labelOrder}>Order at Lafyuu : August 1, 2017</Text>
      <View style={{
        borderWidth: 1, borderColor: 'red', borderStyle: 'dashed', borderRadius: 2,
      }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    // padding: mainPaddingH,
    marginHorizontal: mainPaddingH,
    marginTop: mainPaddingH,
    borderRadius: 5 * calWidth,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    padding: mainPaddingH,
  },
  labelOrder: {
    marginTop: 12,
    paddingBottom: 12 * calWidth,
    // backgroundColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'red',
    borderStyle: 'dotted',
  },
})
export default CardOrder
