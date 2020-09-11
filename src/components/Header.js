import React from 'react'
import {
  View, TouchableOpacity, SafeAreaView, StyleSheet, Image,
} from 'react-native'
import PropTyles from 'prop-types'
import {
  Colors, mainPaddingH, calWidth, TypoGrayphy,
} from '../../assets/styles'
import { back } from '../../assets/images'
import Text from './Text'

const Header = (props) => {
  const {
    navigation, title, icon, iconSearch,
  } = props
  return (
    <View>
      <SafeAreaView />
      <View style={{
        paddingVertical: 26 * calWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.borderColor,
      }}
      >
        <View style={{
          flexDirection: 'row', marginHorizontal: mainPaddingH, alignItems: 'center', justifyContent: 'space-between',
        }}
        >

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={back} resizeMode="contain" />
              <Text style={{ ...TypoGrayphy.heading4, marginLeft: 12 * calWidth }}>{title}</Text>
            </View>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row' }}>
            <Image source={icon} style={{ width: 24 * calWidth, hieght: 24 * calWidth, tintColor: Colors.primaryBlue }} resizeMode="contain" />
            {iconSearch && iconSearch ? <Image
              source={iconSearch}
              style={{
                width: 24 * calWidth,
                hieght: 24 * calWidth,
                paddingHorizontal: mainPaddingH,
              }}
              resizeMode="contain"
            /> : null}
          </View>

        </View>
      </View>
    </View>
  )
}

Header.propTyles = {
  title: PropTyles.string.isRequired,
  navigation: PropTyles.func,
}

export default Header
