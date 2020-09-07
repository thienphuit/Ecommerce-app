import React from 'react'
import {
  View, Image, Dimensions, StyleSheet,
} from 'react-native'
import PropTypes from 'prop-types' // ES6
import Text from './Text'
import {
  Colors, mainPaddingH, calWidth, TypoGrayphy,
} from '../../assets/styles'

const { width } = Dimensions.get('window')

const SaleOffComponent = (props) => {
  const {
    content, image, time, topic,
  } = props
  return (
    <View style={{
      marginTop: mainPaddingH,
    }}
    >
      <Image source={image} resizeMode="cover" style={{ height: 206 * calWidth, width: width - 32 * calWidth }} />
      <View style={{ position: 'absolute', marginLeft: 40 * calWidth }}>
        <Text style={{
          ...TypoGrayphy.heading2,
          width: 169 * calWidth,
          height: 72 * calWidth,
          // marginVertical: 48 * calWidth,
          marginTop: 48 * calWidth,
          marginBottom: 24 * calWidth,
          color: Colors.backgroudWhite,
        }}
        >
          {topic}
        </Text>
        {content && content ? <Text style={{ color: Colors.backgroudWhite }}>{content}</Text>
          : <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.cartTime}>
              <Text style={{ ...TypoGrayphy.heading4 }}>{time[0]}</Text>
            </View>
            <Text style={{ paddingHorizontal: 4 * calWidth, ...TypoGrayphy.heading5, color: Colors.backgroudWhite }}>:</Text>
            <View style={styles.cartTime}>
              <Text style={{ ...TypoGrayphy.heading4 }}>{time[1]}</Text>
            </View>
            <Text style={{ paddingHorizontal: 4 * calWidth, ...TypoGrayphy.heading5, color: Colors.backgroudWhite }}>:</Text>
            <View style={styles.cartTime}>
              <Text style={{ ...TypoGrayphy.heading4 }}>{time[2]}</Text>
            </View>
          </View>}

      </View>
    </View>
  )
}

SaleOffComponent.prototype = {
  content: PropTypes.string,
  image: PropTypes.any.isRequired,
  time: PropTypes.string,
  topic: PropTypes.string.isRequired,
}
const styles = StyleSheet.create({
  cartTime: {
    width: 42 * calWidth,
    height: 42 * calWidth,
    borderRadius: 5,
    backgroundColor: Colors.backgroudWhite,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default SaleOffComponent
