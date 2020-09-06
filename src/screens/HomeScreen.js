import React, { Component } from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, Dimensions, FlatList, ScrollView,
} from 'react-native'

import {
  Text, SwiperHorizontal, ProductCart, HeaderComponent,
} from '../components'
import {
  Colors, TypoGrayphy, mainPaddingH, calWidth,
} from '../../assets/styles'
import {
  shirt, shoesImage, shoes_2, promotionImage, tshirt, womanBag, dress,
  womanShoes, productLike, phoduct2,
} from '../../assets/images'
import CategoryItem from '../components/CategoryItem'

const { width } = Dimensions.get('window')
const products = [
  { image: promotionImage },
  { image: shoes_2 },
  { image: shoesImage },
]
const categoryList = [
  { image: shirt, title: 'Man shirt' },
  { image: dress, title: 'Dress' },
  { image: womanBag, title: 'Women Bag' },
  { image: womanShoes, title: 'Woman Shoest' },
  { image: tshirt, title: 'Man shirt' },
  { image: tshirt, title: 'Man shirt' },
]
const productLikes = [
  { image: productLike },
  { image: shoes_2 },
  { image: phoduct2 },
]

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <HeaderComponent />
        <View style={{ marginBottom: 16, borderTopColor: Colors.neutralLine, borderTopWidth: StyleSheet.hairlineWidth }} />
        <ScrollView>
          <View style={{
            flex: 1,

          }}
          >
            <View style={{ width, height: 260 * calWidth }}>
              <SwiperHorizontal products={products} />
            </View>
            <View>
              <View style={{
                flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: mainPaddingH, marginBottom: 12,
              }}
              >
                <Text style={{ ...TypoGrayphy.heading5 }}>Category</Text>
                <Text style={{ ...TypoGrayphy.linkLargeTextBold14 }}>More Category</Text>
              </View>
              <View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={categoryList}
                  renderItem={({ item }) => {
                    return (
                      <CategoryItem category={item} />
                    )
                  }}
                  keyExtractor={(item, index) => `List category ${index}`}
                />
              </View>
              <View>
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: mainPaddingH, marginBottom: 12, marginTop: 24,
                }}
                >
                  <Text style={{ ...TypoGrayphy.heading5 }}>Flash Sale</Text>
                  <Text style={{ ...TypoGrayphy.linkLargeTextBold14 }}>See More</Text>
                </View>
                <View style={{ marginLeft: 16 * calWidth }}>
                  <FlatList
                    data={productLikes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <ProductCart item={item} />

                      )
                    }}
                    keyExtractor={(item, index) => `Productline list ${index}`}
                  />
                </View>
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: mainPaddingH, marginBottom: 12, marginTop: 24,
                }}
                >
                  <Text style={{ ...TypoGrayphy.heading5 }}>Mega Sale</Text>
                  <Text style={{ ...TypoGrayphy.linkLargeTextBold14 }}>See More</Text>
                </View>
                <View style={{ marginLeft: 16 * calWidth }}>
                  <FlatList
                    data={productLikes}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => {
                      return (
                        <ProductCart item={item} />

                      )
                    }}
                    keyExtractor={(item, index) => `List product ${index}`}
                  />
                </View>
                <View style={{
                  marginTop: mainPaddingH,
                }}
                >
                  <Image source={promotionImage} resizeMode="contain" style={{ height: 206 * calWidth, width }} />
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
                      Recomended Product
                    </Text>
                    <Text style={{ color: Colors.backgroudWhite }}>We recomended the best for you</Text>
                  </View>
                </View>
                <View style={{ paddingTop: mainPaddingH, paddingHorizontal: mainPaddingH }}>
                  <FlatList
                    data={productLikes}
                    numColumns={2}
                    renderItem={({ item }) => {
                      return (
                        <View style={{
                          padding: 16 * calWidth, borderColor: Colors.borderColor, borderRadius: 5 * calWidth, width: 165 * calWidth, justifyContent: 'center', borderWidth: StyleSheet.hairlineWidth,
                        }}
                        >
                          <Image resizeMode="contain" source={item.image} style={{ width: 133 * calWidth, height: 133 * calWidth, borderRadius: 5 * calWidth }} />
                          <Text style={{ ...TypoGrayphy.heading6, paddingVertical: 8 * calWidth }}>FS - Nike Air Max 270 React...</Text>
                          <Text style={{ color: Colors.primaryBlue, ...TypoGrayphy.bodyNormalTextBold }}>$299,43</Text>
                          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{
                              paddingVertical: 8 * calWidth, ...TypoGrayphy.captionLargeTextRegular10, ...TypoGrayphy.captionLargeTextLine, color: Colors.neutralGrey,
                            }}
                            >
                              $534,33
                            </Text>
                            <Text style={{
                              color: Colors.primaryRed, marginLeft: 8, ...TypoGrayphy.captionLargeTextRegular10,
                            }}
                            >
                              24% off
                            </Text>
                          </View>
                        </View>
                      )
                    }}
                    keyExtractor={(item, index) => `List category ${index}`}
                    columnWrapperStyle={{
                      justifyContent: 'space-between',
                      marginBottom: (12 / 375) * width,
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ height: 100 }} />
          </View>
        </ScrollView>

        <SafeAreaView />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: mainPaddingH,
    alignItems: 'center',
    height: 46 * calWidth,
    marginHorizontal: mainPaddingH,
  },
})
export default HomeScreen
