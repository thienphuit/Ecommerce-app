import React, { Component } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import {
  Colors, TypoGrayphy, mainPaddingH, calWidth,
} from '../../assets/styles'
import Text from './Text'
import {
  message, love_24, search, notification, shoesImage, shoes_2, promotionImage, tshirt,
} from '../../assets/images'

class CategoryItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { category } = this.props
    return (
      <View style={{
        width: 70 * calWidth, alignItems: 'center', marginLeft: 16 * calWidth,
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
}

export default CategoryItem
