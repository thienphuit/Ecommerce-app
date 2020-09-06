import React from 'react'
import {
  View, Dimensions, Image, StyleSheet,
} from 'react-native'
import Text from './Text'
import { TypoGrayphy, Colors } from '../../assets/styles'

const { width } = Dimensions.get('window')
const calWidth = width / 375
const ProductCart = (props) => {
  const { item } = props
  return (
    <View style={{
      padding: 16 * calWidth, borderColor: Colors.borderColor, borderRadius: 5 * calWidth, width: 141 * calWidth, justifyContent: 'center', marginRight: 16, borderWidth: StyleSheet.hairlineWidth,
    }}
    >
      <Image resizeMode="contain" source={item.image} style={{ width: 109 * calWidth, height: 109 * calWidth, borderRadius: 5 * calWidth }} />
      <Text style={{ ...TypoGrayphy.heading6, paddingVertical: 8 * calWidth }}>FS - Nike Air Max 270 React...</Text>
      <Text style={{ color: Colors.primaryBlue, ...TypoGrayphy.bodyNormalTextBold }}>$299,43</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{
          paddingVertical: 8 * calWidth, ...TypoGrayphy.captionLargeTextRegular10, ...TypoGrayphy.captionLargeTextLine, color: Colors.neutralGrey,
        }}
        >
          $534,33
        </Text>
        <Text style={{
          color: Colors.primaryRed, marginLeft: 8, ...TypoGrayphy.captionLargeTextRegular10,
        }}
        >
          24% off
        </Text>
      </View>
    </View>
  )
}

export default ProductCart
