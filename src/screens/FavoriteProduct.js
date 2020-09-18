import React from 'react'
import { useSelector } from 'react-redux'
import {
  View, StyleSheet, SafeAreaView, FlatList,
} from 'react-native'
import { Header, ProductCart } from '../components'
import { calWidth } from '../../assets/styles'
import { Screen } from '../constants'

const FavoriteProduct = (props) => {
  const { navigation } = props

  const productLikes = useSelector((state) => state.products.productLikes)
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={Screen.Favorite} navigation={navigation} />
      <View style={styles.viewFlatlist}>
        <FlatList
          data={productLikes}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <ProductCart
                item={item}
                handleChooseItem={() => navigation.navigate(Screen.ProductDetail, {
                  nameProduct: item.title,
                })}
                style={{
                  width: 165 * calWidth,
                  height: 282 * calWidth,
                  sImage: 133 * calWidth,
                }}
              />

            )
          }}
          columnWrapperStyle={styles.conlumnWrapper}
          keyExtractor={(item, index) => `ProductLike list ${index}`}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  conlumnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12 * calWidth,
  },
  container: {
    flex: 1,
  },
  viewFlatlist: {
    marginHorizontal: 16, marginTop: 16,
  },
})
export default FavoriteProduct
