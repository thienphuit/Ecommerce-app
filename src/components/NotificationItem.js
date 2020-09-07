import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'
import Text from './Text'
import {
  Colors, TypoGrayphy, calWidth,
} from '../../assets/styles'

const NotificationItem = (props) => {
  const { title, content, image } = props
  console.tron.log({ image })
  return (
    <View style={styles.container}>
      {(typeof image === 'string' || image instanceof String) ? <Icon name={image} size={24 * calWidth} color={Colors.primaryBlue} />
        : <Image source={image} style={{ width: 48 * calWidth, height: 48 * calWidth }} />}
      <View style={{ marginLeft: 12 * calWidth }}>
        <Text style={{ ...TypoGrayphy.heading5 }}>{title}</Text>
        <Text style={{ color: Colors.neutralGrey }}>
          {content}
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
