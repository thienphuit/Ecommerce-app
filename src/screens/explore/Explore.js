import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList,
} from 'react-native'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import {
  shirt, dress, womanBag, womanShoes, tshirt,
} from '../../../assets/images'
import { Text, HeaderComponent, CategoryItem } from '../../components'
import {
  calWidth, mainPaddingH, TypoGrayphy, Colors,
} from '../../../assets/styles'
import { Screen } from '../../constants'

const categoryList = [
  { image: shirt, title: 'Man shirt' },
  { image: dress, title: 'Dress' },
  { image: womanBag, title: 'Women Bag' },
  { image: womanShoes, title: 'Woman Shoest' },
  { image: tshirt, title: 'Man shirt' },
  { image: tshirt, title: 'Man shirt' },
]
const Explore = (props) => {
  const handleClick = () => {
    navigation.navigate(Screen.SearchScreen)
  }
  const { navigation } = props
  const categorys = useSelector((state) => state.products.categorys)
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponent
        navigation={navigation}
        handleFocus={() => navigation.navigate(Screen.SearchScreen)}
        // onFocus={onFocus}
        handleClick={handleClick}
      />
      <View style={styles.wrapperExplore}>
        <View>
          <Text style={styles.cateName}>
            Category
          </Text>
          <View>
            <FlatList
              numColumns={4}
              data={categorys}
              columnWrapperStyle={styles.columnWrapperStyle}
              renderItem={({ item }) => {
                return (
                  <CategoryItem category={item} style={styles.cateItem} />
                )
              }}
              keyExtractor={(item, index) => `List category ${index}`}
            />
          </View>
          <Text style={styles.cateName}>
            Woman Fashion
          </Text>
          <View>
            <FlatList
              numColumns={4}
              data={categoryList}
              columnWrapperStyle={styles.columnWrapperStyle}
              renderItem={({ item }) => {
                return (
                  <CategoryItem category={item} style={styles.cateItem} />
                )
              }}
              keyExtractor={(item, index) => `List category woman ${index}`}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cateItem: { marginRight: 5 * calWidth },

  columnWrapperStyle: { marginBottom: mainPaddingH },
  container: {
    flex: 1,
  },
  wrapperExplore: {
    flex: 1,
    borderTopColor: Colors.neutralLine,
    borderTopWidth: 1,
    paddingTop: 12 * calWidth,
  },
  cateName: {
    ...TypoGrayphy.heading5,
    paddingHorizontal: mainPaddingH,
    marginBottom: 12 * calWidth,
  },
})
Explore.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
}

export default Explore
