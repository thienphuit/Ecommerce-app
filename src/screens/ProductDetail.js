import React, { useState } from 'react'
import {
  View, StyleSheet, Image, Dimensions, FlatList, ScrollView, TouchableOpacity, SafeAreaView, Alert,
} from 'react-native'
import Swiper from 'react-native-swiper'
import {
  shoesImage, shoes_2, iconFavorite, avatar, reviews, phoduct2, productLike, plus,
} from '../../assets/images'
import Rating from '../components/Rating'
import {
  Text, SelecColorOption, ButtonComponent, Header,
} from '../components'
import { TypoGrayphy, Colors } from '../../assets/styles'
import SelecSizeOption from '../components/SelecSizeOption'
import ProductCart from '../components/ProductCart'

const { width } = Dimensions.get('window')
const calWidth = width / 375
const Fonts = {
  fontPoppins: {
    fontFamily: 'Poppins-Regular',
  },
  fontPoppinsBold: {
    fontFamily: 'Poppins-Bold',
  },
}
const products = [
  { image: shoesImage },
  { image: shoes_2 },
  { image: shoesImage },
]
const productLikes = [
  { image: productLike },
  { image: shoes_2 },
  { image: phoduct2 },
]
const colorData = [
  Colors.primaryYellow,
  Colors.primaryBlue,
  Colors.primaryRed,
  Colors.primaryGreen,
  Colors.primaryPurple,
  Colors.neutralDark,
]
const nums = [
  '6', '6.5', '7', '7.5', '8', '8.5',
]

const ProducDetail = ({ navigation, route }) => {
  const [currentSize, setCurrentSize] = useState('6')
  const [currentColor, setCurrentColor] = useState(Colors.primaryYellow)

  const handleAddToCart = () => {
    Alert.alert('Add to cart success')
  }

  const handleChooseOptionSize = (item) => {
    setCurrentSize(item)
  }

  const handlePagination = (index, total) => {
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

  const { nameProduct } = route.params
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={nameProduct} navigation={navigation} icon={plus} />
      <ScrollView>
        <View>
          <View style={{ width, height: 260 * calWidth }}>
            <Swiper
              showsPagination
              loop={false}
              renderPagination={handlePagination}
            >
              {products.map((item) => {
                return (
                  <Image key={`List Image ${Math.random()}`} source={item.image} style={styles.image} resizeMode="cover" />
                )
              })}
            </Swiper>
          </View>

          <View style={{ flex: 1, paddingLeft: 16 * calWidth }}>
            <View style={{ paddingRight: 16 * calWidth }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.nameProduct}>Nike Air Zoom Pegasus 36 Miami</Text>
                <Image source={iconFavorite} style={{ width: 24 * calWidth, height: 24 * calWidth }} resizeMode="contain" />
              </View>
              <Rating rating="8" />
              <Text style={styles.price}>
                $299,43
              </Text>
            </View>
            <View style={{ paddingTop: 24 * calWidth }}>
              <Text style={styles.titleHeaderContent}>
                Select Size
              </Text>
              <FlatList
                data={nums}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <SelecSizeOption
                      itemSize={item}
                      handleChooseOptionSize={handleChooseOptionSize}
                      isSelected={item === currentSize}
                    />
                  )
                }}
                keyExtractor={(item, index) => `List nums ${index}`}
              />
            </View>
            <View style={{ paddingTop: 24 * calWidth }}>
              <Text style={styles.titleHeaderContent}>
                Select Color
              </Text>
              <FlatList
                data={colorData}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (

                    <SelecColorOption
                      itemColor={item}
                      handleChooseColor={(color) => {
                        // this.setState({
                        //   currentColor: color,
                        // })
                        setCurrentColor(color)
                      }}
                      isSelected={item === currentColor}
                    />

                  )
                }}
                keyExtractor={(item, index) => `List Color ${index}`}
              />
            </View>
            <View style={{ paddingTop: 24 * calWidth, paddingRight: 16 * calWidth }}>
              <Text style={{
                ...TypoGrayphy.heading5, marginBottom: 12 * calWidth,
              }}
              >
                Specification
              </Text>
              <View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text>Shown:</Text>
                  <View>
                    <Text style={{
                      textAlign: 'right', color: Colors.neutralGrey,
                    }}
                    >
                      Laser
                      {'\n'}
                      Blue/Anthracite/Watermel
                      {'\n'}
                      on/White
                    </Text>
                  </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 * calWidth }}>
                  <Text>Style:</Text>
                  <Text style={{
                    textAlign: 'right', color: Colors.neutralGrey,
                  }}
                  >
                    CD0113-400
                  </Text>
                </View>
              </View>
            </View>
            <View style={{ paddingTop: 24 * calWidth, paddingRight: 16 * calWidth }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{
                  ...TypoGrayphy.heading5, marginBottom: 12 * calWidth,
                }}
                >
                  Review Product
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate('WriteReview')}>
                  <Text style={{ ...TypoGrayphy.linkLargeTextBold14 }}>See More</Text>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Rating rating="9" />
                <Text style={{ marginLeft: 8 * calWidth, ...Fonts.fontPoppinsBold, color: '#9098B1' }}>4.5 (5 Review)</Text>
              </View>
              <View style={styles.contentReview}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Image source={avatar} style={{ width: 48 * calWidth, height: 48 * calWidth, marginTop: 8 * calWidth }} />
                  <View style={{
                    justifyContent: 'space-between', height: 48 * calWidth, marginLeft: 16 * calWidth,
                  }}
                  >
                    <Text style={{ ...TypoGrayphy.heading5 }}>James Lawson</Text>
                    <Rating rating="8" />
                  </View>
                </View>
                <Text style={{ marginVertical: 16 * calWidth }}>
                  air max are always very comfortable fit, clean and just perfect in every way.
                  just the box was too small and scrunched the sneakers up a little bit,
                  not sure if the box was always this small but the 90s are and will always be one of my favorites.
                </Text>
                <FlatList
                  data={reviews}
                  horizontal
                  renderItem={({ item }) => {
                    return (
                      <Image style={{ width: 72 * calWidth, height: 72 * calWidth, marginRight: 12 * calWidth }} source={item.image} />
                    )
                  }}
                  keyExtractor={(item, index) => `List review ${index}`}
                />
                <Text style={{
                  color: '#9098B1', fontSize: 10, ...Fonts.fontPoppins, marginTop: 16 * calWidth,
                }}
                >
                  December 10, 2016
                </Text>

              </View>
            </View>
            <View style={{ paddingTop: 24 * calWidth, paddingRight: 16 * calWidth }}>
              <Text style={styles.titleHeaderContent}>You Might Also Like</Text>
              <FlatList
                data={productLikes}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => {
                  return (
                    <ProductCart item={item} margin={calWidth * 16} />

                  )
                }}
                keyExtractor={(item, index) => `List product like ${index}`}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={{
        position: 'absolute',
        bottom: 16,
        width,
        // alignItems: 'center',
      }}
      >
        <ButtonComponent name="Add To Cart" handleClick={handleAddToCart} />
      </View>
      <SafeAreaView />
    </View>
  )
}
const styles = StyleSheet.create({
  contentReview: {

  },
  titleHeaderContent: {
    ...TypoGrayphy.heading5,
    marginBottom: 12 * calWidth,
  },

  circleSelected: {
    backgroundColor: '#fff',
    width: 16 * calWidth,
    height: 16 * calWidth,
    borderRadius: 8 * calWidth,
  },
  circlePoint: {
    width: 48 * calWidth,
    height: 48 * calWidth,
    borderRadius: 24 * calWidth,
    borderColor: '#EBF0FF',
    borderWidth: StyleSheet.hairlineWidth * 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginRight: 16 * calWidth,
  },
  price: {
    ...TypoGrayphy.heading3,
    color: Colors.primaryBlue,
  },
  nameProduct: {
    ...TypoGrayphy.heading3,
    width: 275 * calWidth,
  },
  image: {
    width,
    height: 238 * calWidth,
  },
  container: {
    flex: 1,
  },
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16 * calWidth,
    paddingBottom: 28 * calWidth,
    borderBottomColor: '#EBF0FF',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: 26 * calWidth,
  },
  titleAppbar: {
    marginLeft: 12 * calWidth,
    ...TypoGrayphy.heading4,

  },
})

export default ProducDetail
