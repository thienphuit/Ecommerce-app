import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList,
} from 'react-native'
import { Header, ProductCart } from '../components'
import { productLike, shoes_2, phoduct2 } from '../../assets/images'
import { calWidth } from '../../assets/styles'

const productLikes = [
  { image: productLike },
  { image: shoes_2 },
  { image: phoduct2 },
]
const FavoriteProduct = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Favorite" navigation={navigation} />
      <View style={{ marginHorizontal: 16, marginTop: 16 }}>
        <FlatList
          data={productLikes}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <ProductCart
                item={item}
                handleChooseItem={() => navigation.navigate('ProductDetail')}
                style={{
                  width: 165 * calWidth, height: 282 * calWidth, sImage: 133 * calWidth,
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
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default FavoriteProduct
