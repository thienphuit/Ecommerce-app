import React, { Component } from 'react'
import {
  View, Image, StyleSheet, Dimensions,
} from 'react-native'
import Swiper from 'react-native-swiper'
import { Colors, calWidth, TypoGrayphy } from '../../assets/styles'
import Text from './Text'

const { width } = Dimensions.get('window')

class SwiperHorizontal extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  handlePagination = (index, total) => {
    const paginationView = []
    for (let paginationIndex = 0; paginationIndex < total; paginationIndex++) {
      paginationView.push(<View style={{
        width: 8 * calWidth,
        height: 8 * calWidth,
        borderRadius: 4 * calWidth,
        backgroundColor: paginationIndex === index ? Colors.primaryBlue : Colors.neutralGrey,
        marginRight: 8 * calWidth,
      }}
      />)
    }
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', paddingVertical: 16 * calWidth }}>
        {paginationView}
      </View>
    )
  }

  render() {
    const { products } = this.props
    return (
      <Swiper
        showsPagination
        loop={false}
        renderPagination={this.handlePagination}
      >
        {products.map((item) => {
          return (
            <View style={{ width, height: 240 * calWidth }} key={`List Image ${Math.random()}`}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />

              <View style={{ position: 'absolute', marginLeft: 24 * calWidth }}>
                <Text style={{
                  ...TypoGrayphy.heading2,
                  width: 209 * calWidth,
                  height: 72 * calWidth,
                  marginVertical: 30 * calWidth,

                  color: Colors.backgroudWhite,
                }}
                >
                  Super Flash Sale 50% Off
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{
                    width: 42 * calWidth,
                    height: 42 * calWidth,
                    borderRadius: 5,
                    backgroundColor: Colors.backgroudWhite,
                    justifyContent: 'center',
                    alignItems: 'center',

                  }}
                  >
                    <Text style={{ ...TypoGrayphy.heading4 }}>08</Text>
                  </View>
                  <Text style={{ paddingHorizontal: 4 * calWidth, ...TypoGrayphy.heading5, color: Colors.backgroudWhite }}>:</Text>
                  <View style={{
                    width: 42 * calWidth,
                    height: 42 * calWidth,
                    borderRadius: 5,
                    backgroundColor: Colors.backgroudWhite,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
                    <Text style={{ ...TypoGrayphy.heading4 }}>34</Text>
                  </View>
                  <Text style={{ paddingHorizontal: 4 * calWidth, ...TypoGrayphy.heading5, color: Colors.backgroudWhite }}>:</Text>
                  <View style={{
                    width: 42 * calWidth,
                    height: 42 * calWidth,
                    borderRadius: 5,
                    backgroundColor: Colors.backgroudWhite,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
                    <Text style={{ ...TypoGrayphy.heading4 }}>52</Text>
                  </View>
                </View>
              </View>
            </View>
          )
        })}
      </Swiper>
    )
  }
}
const styles = StyleSheet.create({
  image: {
    width,
    height: 238 * calWidth,
  },
})

export default SwiperHorizontal
