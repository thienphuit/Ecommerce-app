import React from 'react'
import {
  View, TouchableOpacity, StyleSheet, Image, TextInput,
} from 'react-native'
import {
  TypoGrayphy, mainPaddingH, Colors, calWidth,
} from '../../../assets/styles'
import { search, love_24, notification } from '../../../assets/images'

const SearchSreen = (props) => {
  const { navigation } = props
  return (
    <View>
      <View style={styles.header}>
        <View style={{
          flexDirection: 'row',
          borderRadius: 5 * calWidth,
          borderColor: Colors.neutralLine,
          borderWidth: StyleSheet.hairlineWidth,
          paddingVertical: 12,
          alignItems: 'center',
          flex: 1,
        }}
        >
          <Image source={search} style={{ width: mainPaddingH, height: mainPaddingH, marginLeft: 16 * calWidth }} resizeMode="contain" />
          <TextInput style={{ flex: 1, marginLeft: mainPaddingH }} placeholder="Search Product" />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image source={love_24} style={{ width: 24 * calWidth, height: 24 * calWidth, marginLeft: mainPaddingH }} resizeMode="contain" />
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
          >
            <View>
              <Image source={notification} style={{ width: 24 * calWidth, height: 24 * calWidth, marginLeft: mainPaddingH }} resizeMode="contain" />
              <View style={{
                width: 8 * calWidth,
                height: 8 * calWidth,
                borderRadius: 4 * calWidth,
                right: 3 * calWidth,
                position: 'absolute',
                backgroundColor: Colors.primaryRed,
              }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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

export default SearchSreen
