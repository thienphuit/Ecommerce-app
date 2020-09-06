import React, { Component } from 'react'
import {
  View, TouchableOpacity, Image, StyleSheet,
} from 'react-native'

import { calWidth, Colors } from '../../assets/styles'
import { plus_16, minus_16 } from '../../assets/images'
import Text from './Text'

class InputNumber extends Component {
  constructor(props) {
    super(props)
    this.state = {
      number: 1,
    }
  }

  render() {
    const { number } = this.state
    return (
      <View style={{
        width: 104 * calWidth,
        height: 24 * calWidth,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 6 * calWidth,
        borderWidth: StyleSheet.hairlineWidth,
        alignItems: 'center',
        borderColor: Colors.borderColor,
      }}
      >
        <TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding: 8 * calWidth }}>
            <Image source={plus_16} style={{ width: 16 * calWidth, height: 16 * calWidth }} />
          </View>
        </TouchableOpacity>
        <View style={{
          backgroundColor: Colors.neutralLine, width: 40 * calWidth, height: 24 * calWidth, justifyContent: 'center', alignItems: 'center',
        }}
        >
          <Text>{number}</Text>
        </View>
        <TouchableOpacity>
          <View style={{ justifyContent: 'center', alignItems: 'center', padding: 8 * calWidth }}>
            <Image source={minus_16} style={{ width: 16 * calWidth, height: 16 * calWidth }} />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default InputNumber
