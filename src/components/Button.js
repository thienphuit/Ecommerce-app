import React from 'react'
import {
  View, TouchableOpacity, StyleSheet, Text,
} from 'react-native'
import {
  TypoGrayphy, mainPaddingH, Colors, calWidth,
} from '../../assets/styles'
// import Text from './Text'

const Button = (props) => {
  const { style, children } = props
  return (
    <TouchableOpacity>
      <View style={{ ...styles.container, ...style }}>
        <Text style={{ ...TypoGrayphy.bodyMediumTextBold, color: Colors.backgroudWhite, ...style }}>{children}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryBlue,
    padding: mainPaddingH,
    borderRadius: 5 * calWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    ...TypoGrayphy.bodyMediumTextBold,
  },
})

export default Button
