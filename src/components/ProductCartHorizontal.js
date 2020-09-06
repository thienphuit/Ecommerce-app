import React from 'react'
import {
  View, Dimensions, StyleSheet, Image,
} from 'react-native'
import { Colors, TypoGrayphy } from '../../assets/styles'
import { love_24, trash } from '../../assets/images'
import { Text, InputNumber } from '.'

const { width } = Dimensions.get('window')
const calWidth = width / 375
const ProductCartHorizontal = (props) => {
  const { item } = props
  return (
    <View style={{
      padding: 16 * calWidth,
      borderColor: Colors.borderColor,
      borderRadius: 5 * calWidth,
      alignContent: 'center',
      flexDirection: 'row',
      height: 104 * calWidth,
      borderWidth: StyleSheet.hairlineWidth,
      width: width - 32,
      marginRight: 8,
    }}
    >
      <Image resizeMode="contain" source={item.image} style={{ width: 72 * calWidth, height: 72 * calWidth, borderRadius: 5 * calWidth }} />
      <View style={{ marginLeft: 12, justifyContent: 'space-between', flex: 1 }}>
        <View style={{
          flexDirection: 'row', justifyContent: 'space-between',
        }}
        >
          <Text style={{ width: 158 * calWidth, ...TypoGrayphy.heading6 }}>Nike Air Zoom Pegasus 36 Miami</Text>
          <View style={{ flexDirection: 'row' }}>
            <Image source={love_24} style={{ width: 24, height: 24, marginRight: 10 }} resizeMode="contain" />
            <Image source={trash} style={{ width: 24, height: 24 }} resizeMode="contain" />
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{
            color: Colors.primaryBlue, ...TypoGrayphy.heading6,
          }}
          >
            $534,33
          </Text>
          <InputNumber />
        </View>
      </View>
    </View>
  )
}

export default ProductCartHorizontal
