import React, { useState } from 'react'
import {
  View, Image, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  Colors, mainPaddingH, calWidth,
} from '../../../assets/styles'
import {
  search,
  iconX,
  filter,
  short,
} from '../../../assets/images'

const HeaderComponent = (props) => {
  const {
    navigation, iconMic, handeChangeText,
  } = props
  const [onFocus, setOnFocus] = useState(false)
  return (
    <View style={styles.header}>
      <View style={styles.viewWapper}>
        <View style={[styles.search, { borderColor: onFocus ? Colors.primaryBlue : Colors.neutralLine }]}>
          <Image
            source={search}
            style={styles.iconSearch}
            resizeMode="contain"
          />
          <TextInput
            style={styles.inputSearch}
            placeholder="Search Product"
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            autoFocus
            onChangeText={(text) => handeChangeText(text)}
          />
          {onFocus && onFocus ? <Image
            source={iconX}
            style={styles.imageInput}
            resizeMode="contain"
          /> : null}
        </View>
      </View>
      {iconMic && iconMic ? <View style={styles.imicView}><Image source={iconMic} style={styles.imicIcon} resizeMode="contain" /></View>
        : <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
            <Image
              source={short}
              style={styles.image}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
          >
            <View>
              <Image
                source={filter}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </TouchableOpacity>
        </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  inputSearch: { flex: 1, marginLeft: mainPaddingH },
  viewWapper: { flex: 1 },
  imicView: {
    marginLeft: mainPaddingH,
  },
  iconMic: {
    marginLeft: mainPaddingH,
    width: 24 * calWidth,
    height: 24 * calWidth,

  },
  imageInput: {
    width: mainPaddingH,
    height: mainPaddingH,
    marginRight: mainPaddingH,
    tintColor: Colors.primaryBlue,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: mainPaddingH,
    alignItems: 'center',
    height: 46 * calWidth,
    marginHorizontal: mainPaddingH,
  },
  image: {
    width: 24 * calWidth,
    height: 24 * calWidth,
    marginLeft: mainPaddingH,
  },
  search: {
    flexDirection: 'row',
    borderRadius: 5 * calWidth,
    borderColor: Colors.neutralLine,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12 * calWidth,
    alignItems: 'center',
    // width: 291 * calWidth,
  },
  iconSearch: {
    width: mainPaddingH,
    height: mainPaddingH,
    marginLeft: 16 * calWidth,
    tintColor: Colors.primaryBlue,
  },
  dotNotification: {
    width: 8 * calWidth,
    height: 8 * calWidth,
    borderRadius: 4 * calWidth,
    right: 3 * calWidth,
    position: 'absolute',
    backgroundColor: Colors.primaryRed,
  },
})
HeaderComponent.propTypes = {
  // handleFocus: PropTypes.func.isRequired,
  // onFocus: PropTypes.bool.isRequired,
  handeChangeText: PropTypes.func.isRequired,
}
export default HeaderComponent
