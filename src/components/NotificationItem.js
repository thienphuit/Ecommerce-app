import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import Text from './Text'
import {
  Colors, TypoGrayphy, calWidth,
} from '../../assets/styles'

const NotificationItem = (props) => {
  const {
    isIcon, item,
  } = props
  return (
    <View style={styles.container}>
      {isIcon ? <Image source={item.image} style={{ width: 24 * calWidth, height: 24 * calWidth, tintColor: Colors.primaryBlue }} resizeMode="contain" />
        : <Image source={item.image} style={{ width: 48 * calWidth, height: 48 * calWidth }} resizeMode="contain" />}
      <View style={{ marginLeft: 12 * calWidth }}>
        <Text style={{ ...TypoGrayphy.heading5 }}>{item.title}</Text>
        <Text style={{ color: Colors.neutralGrey }}>
          {item.content}
        </Text>
        <Text style={{ ...TypoGrayphy.captionLargeTextRegular10 }}>April 30, 2014 1:01 PM</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 16 * calWidth,
    flexDirection: 'row',
    // alignItems: 'center',
  },
})
NotificationItem.prototype = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default NotificationItem
