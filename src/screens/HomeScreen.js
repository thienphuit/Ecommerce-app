import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import SplashScreen from 'react-native-splash-screen'
import {
  View, StyleSheet, SafeAreaView, Dimensions, FlatList, ScrollView,
} from 'react-native'

import {
  Text, SwiperHorizontal, ProductCart, HeaderComponent, SaleOffComponent,
} from '../components'
import {
  Colors, TypoGrayphy, mainPaddingH, calWidth,
} from '../../assets/styles'
import { promotionImage } from '../../assets/images'
import CategoryItem from '../components/CategoryItem'
import { Screen } from '../constants/index'
// import { searchActions } from '../redux/actions'

const { width } = Dimensions.get('window')

const HomeScreen = (props) => {
  const { navigation } = props
  const [onFocus, setOnFocus] = useState(false)
  // const dispatch = useDispatch()
  const handleFocus = () => {
    setOnFocus(true)
  }
  const productLikes = useSelector((state) => state.products.productLikes)
  const categoryList = useSelector((state) => state.products.categorys)
  const swipperList = useSelector((state) => state.products.swipperList)
  // const getData = async () => {
  //   dispatch(searchActions.getSearchAction())
  // }
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponent navigation={navigation} handleFocus={handleFocus} onFocus={onFocus} handleClick={() => navigation.navigate(Screen.SearchScreen)} />
      <View style={styles.divider} />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.swipperWrapper}>
            <SwiperHorizontal products={swipperList} handleChooseSwipper={() => navigation.navigate(Screen.SubperSale)} />
          </View>
          <View>
            <View style={styles.labelCate}>
              <Text style={styles.titleCategory}>Category</Text>
              <Text style={styles.moreCategory}>More Category</Text>
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
              <View style={[styles.labelCate, { marginTop: 24 * calWidth }]}>
                <Text style={styles.titleCategory}>Flash Sale</Text>
                <Text style={styles.moreCategory}>See More</Text>
              </View>
              <View style={{ marginLeft: mainPaddingH }}>
                <FlatList
                  data={productLikes}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => {
                    return (
                      <ProductCart
                        margin={mainPaddingH}
                        item={item}
                        handleChooseItem={() => navigation.navigate(Screen.ProductDetail, {
                          nameProduct: 'Nike Air Max 270 Rea...',
                        })}
                      />
                    )
                  }}
                  keyExtractor={(item, index) => `Productline list ${index}`}
                />
              </View>
              <View style={[styles.labelCate, { marginTop: 24 * calWidth }]}>
                <Text style={styles.titleCategory}>Mega Sale</Text>
                <Text style={styles.moreCategory}>See More</Text>
              </View>
              <View style={{ marginLeft: mainPaddingH }}>
                <FlatList
                  data={productLikes}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item }) => {
                    return (
                      <ProductCart
                        item={item}
                        margin={mainPaddingH}
                        handleChooseItem={() => navigation.navigate(Screen.ProductDetail, {
                          nameProduct: 'Nike Air Max 270 Rea...',
                        })}
                      />
                    )
                  }}
                  keyExtractor={(item, index) => `List product -${index}`}
                />
              </View>
              <View style={{ marginHorizontal: mainPaddingH }}>
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
                        handleChooseItem={() => navigation.navigate(Screen.ProductDetail, { nameProduct: 'Nike Air Max 270 Rea...' })}
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
  moreCategory: { ...TypoGrayphy.linkLargeTextBold14 },
  titleCategory: { ...TypoGrayphy.heading5 },
  swipperWrapper: {
    width, height: 260 * calWidth,
  },
  labelCate: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: mainPaddingH,
    marginBottom: 12 * calWidth,
  },
  divider: {
    marginBottom: 16 * calWidth,
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
