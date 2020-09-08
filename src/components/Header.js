import React from 'react'
import {
  View, TouchableOpacity, SafeAreaView, StyleSheet, Image,
} from 'react-native'

import {
  Colors, mainPaddingH, calWidth, TypoGrayphy,
} from '../../assets/styles'
import { back } from '../../assets/images'
import Text from './Text'

const Header = (props) => {
  const { navigation, title } = props
  return (
    <View>
      <SafeAreaView />
      <View style={{
        // paddingVertical: 26 * calWidth,
        paddingVertical: 26,
        borderBottomWidth: 2 * StyleSheet.hairlineWidth,
        borderBottomColor: Colors.borderColor,
        // marginLeft: mainPaddingH,
      }}
      >
        <View style={{ flexDirection: 'row', marginLeft: mainPaddingH, alignItems: 'center' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={back} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={{ ...TypoGrayphy.heading4, marginLeft: 12 * calWidth }}>{title}</Text>
        </View>
      </View>
    </View>
  )
}

export default Header
