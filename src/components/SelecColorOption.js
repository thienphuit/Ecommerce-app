import React, { Component } from 'react'
import {
  View, StyleSheet, Dimensions, TouchableOpacity,
} from 'react-native'
import { TypoGrayphy, Colors } from '../../assets/styles'
import Text from './Text'

const { width } = Dimensions.get('window')
const calWidth = width / 375

class SelecColorOption extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const { itemColor, isSelected, handleChooseColor } = this.props
    return (
      <TouchableOpacity onPress={() => { handleChooseColor(itemColor) }}>
        <View style={{
          width: 48 * calWidth,
          height: 48 * calWidth,
          borderRadius: 24 * calWidth,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: itemColor,
          marginRight: 16 * calWidth,
        }}
        >
          {isSelected ? <View style={{
            width: 16, height: 16, borderRadius: 8, backgroundColor: 'white',
          }}
          /> : null}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  circleColor: {

  },
})

export default SelecColorOption
