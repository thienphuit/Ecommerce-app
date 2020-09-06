import React, { Component } from 'react'
import {
  View, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native'
import { TypoGrayphy, Colors } from '../../assets/styles'
import Text from './Text'

const { width } = Dimensions.get('window')
const calWidth = width / 375

class SelecSizeOption extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { itemSize, handleChooseOptionSize, isSelected } = this.props
    return (
      <TouchableOpacity onPress={() => handleChooseOptionSize(itemSize)}>
        <View style={{
          width: 48 * calWidth,
          height: 48 * calWidth,
          borderRadius: 24 * calWidth,
          borderColor: isSelected ? Colors.primaryBlue : Colors.borderColor,
          borderWidth: StyleSheet.hairlineWidth * 2,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: Colors.backgroudWhite,
          marginRight: 16 * calWidth,
        }}
        >
          <Text style={{ ...TypoGrayphy.heading5 }}>{itemSize}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

export default SelecSizeOption
