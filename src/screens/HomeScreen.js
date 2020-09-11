import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Dimensions, FlatList, ScrollView,
} from 'react-native'

import {
  Text, SwiperHorizontal, ProductCart, HeaderComponent, SaleOffComponent,
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

const HomeScreen = (props) => {
  const { navigation } = props

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponent navigation={navigation} />
      <View style={styles.divider} />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{
          flex: 1,
        }}
        >
          <View style={{ width, height: 260 * calWidth }}>
            <SwiperHorizontal products={products} />
          </View>
          <View>
            <View style={styles.labelCate}>
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
              <View style={[
                styles.labelCate, { marginTop: 24 },
              ]}
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
                      <ProductCart
                        margin={calWidth * 16}
                        item={item}
                        handleChooseItem={() => navigation.navigate('ProductDetail', {
                          nameProduct: 'Nike Air Max 270 Rea...',
                        })}
                      />

                    )
                  }}
                  keyExtractor={(item, index) => `Productline list ${index}`}
                />
              </View>
              <View style={[
                styles.labelCate, { marginTop: 24 },
              ]}
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
                      <ProductCart
                        item={item}
                        margin={calWidth * 16}
                        handleChooseItem={() => navigation.navigate('ProductDetail', {
                          nameProduct: 'Nike Air Max 270 Rea...',
                        })}
                      />

                    )
                  }}
                  keyExtractor={(item, index) => `List product -${index}`}
                />
              </View>
              {/*   */}
              <View style={{ marginHorizontal: 16 * calWidth }}>
                <SaleOffComponent content="We recomended the best for you" image={promotionImage} topic="Recomended Product" />
              </View>
              <View style={{ paddingTop: mainPaddingH, paddingHorizontal: mainPaddingH }}>
                <FlatList
                  data={productLikes}
                  numColumns={2}
                  renderItem={({ item }) => {
                    return (
                      <ProductCart
                        item={item}
                        handleChooseItem={() => navigation.navigate('ProductDetail')}
                        style={{
                          width: 165 * calWidth,
                          height: 282 * calWidth,
                          sImage: 133 * calWidth,
                        }}
                      />

                    )
                  }}
                  columnWrapperStyle={{
                    justifyContent: 'space-between',
                    marginBottom: 12 * calWidth,
                  }}
                  keyExtractor={(item, index) => `ProductLike list ${index}`}
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

const styles = StyleSheet.create({
  labelCate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mainPaddingH,
    marginBottom: 12,
  },
  divider: {
    marginBottom: 16,
    borderTopColor: Colors.neutralLine,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
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
