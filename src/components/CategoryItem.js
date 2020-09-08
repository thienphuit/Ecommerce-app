import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import {
  Colors, TypoGrayphy, calWidth,
} from '../../assets/styles'
import Text from './Text'

const CategoryItem = (props) => {
  const { category, style } = props
  return (
    <View style={{
      width: 70 * calWidth, alignItems: 'center', marginLeft: 16 * calWidth, ...style,
    }}
    >
      <View style={{
        width: 70 * calWidth,
        height: 70 * calWidth,
        borderRadius: 35 * calWidth,
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        borderColor: Colors.neutralLine,
        alignItems: 'center',
        marginBottom: 8 * calWidth,
      }}
      >
        <Image source={category.image} style={{ width: 24 * calWidth, height: 24 * calWidth }} resizeMode="contain" />
      </View>
      <Text style={{ ...TypoGrayphy.captionLargeTextRegular10, color: Colors.neutralGrey }}>{category.title}</Text>
    </View>
  )
}

export default CategoryItem
