import React, { Component } from 'react'
import { Text, View } from 'react-native'

class ScreenShoest extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'phu',
    }
  }

  render() {
    const { name } = this.state
    return (
      <View>
        <Text>
          {`Hello ${name}`}
        </Text>
      </View>
    )
  }
}
export default ScreenShoest
