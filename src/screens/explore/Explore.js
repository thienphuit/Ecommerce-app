import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList,
} from 'react-native'
import PropTypes from 'prop-types'
import {
  shirt, dress, womanBag, womanShoes, tshirt,
} from '../../../assets/images'
import { Text, HeaderComponent, CategoryItem } from '../../components'
import {
  calWidth, mainPaddingH, TypoGrayphy, Colors,
} from '../../../assets/styles'

const categoryList = [
  { image: shirt, title: 'Man shirt' },
  { image: dress, title: 'Dress' },
  { image: womanBag, title: 'Women Bag' },
  { image: womanShoes, title: 'Woman Shoest' },
  { image: tshirt, title: 'Man shirt' },
  { image: tshirt, title: 'Man shirt' },
]
const Explore = (props) => {
  const {
    navigation,
  } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderComponent navigation={navigation} />
      <View style={{
        flex: 1, borderTopColor: Colors.neutralLine, borderTopWidth: 1, paddingTop: 12,
      }}
      >

        <View>
          <Text style={{
            ...TypoGrayphy.heading5,
            paddingHorizontal: mainPaddingH,
            marginBottom: 12,
          }}
          >
            Category
          </Text>
          <View>
            <FlatList
              numColumns={4}
              data={categoryList}
              columnWrapperStyle={{ marginBottom: 16 * calWidth }}
              renderItem={({ item }) => {
                return (
                  <CategoryItem category={item} style={{ marginRight: 5 * calWidth }} />
                )
              }}
              keyExtractor={(item, index) => `List category ${index}`}
            />
          </View>

          <Text style={{
            ...TypoGrayphy.heading5,
            paddingHorizontal: mainPaddingH,
            marginBottom: 12,
          }}
          >
            Woman Fashion
          </Text>
          <View>
            <FlatList
              numColumns={4}
              data={categoryList}
              columnWrapperStyle={{ marginBottom: 16 * calWidth }}
              renderItem={({ item }) => {
                return (
                  <CategoryItem category={item} style={{ marginRight: 5 * calWidth }} />
                )
              }}
              keyExtractor={(item, index) => `List category ${index}`}
            />
          </View>
        </View>
      </View>
    </View>
  )
}

Explore.prototype = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any,
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Explore
