import React from 'react'
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  FlatList,
} from 'react-native'
import { useSelector } from 'react-redux'
import {
  SaleOffComponent, Header, ProductCart,
} from '../../components'
import {
  calWidth,
  mainPaddingH,
} from '../../../assets/styles'
import { promotionImage, search } from '../../../assets/images'
import { Screen } from '../../constants'

const SupperFlashSale = (props) => {
  const { navigation } = props
  const products = useSelector((state) => state.products.listShoes)
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={Screen.SubperSale} navigation={navigation} iconRight={search} />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.viewWrapper}>
          <SaleOffComponent
            topic="Super Flash Sale 50% Off"
            image={promotionImage}
            time={['08', '52', '10']}
          />
        </View>
        <View style={styles.paddingView}>
          <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <ProductCart
                  item={item}
                  handleChooseItem={() => navigation.navigate(Screen.ProductDetail)}
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
            keyExtractor={(item, index) => `Product Supper Sale ${index}`}
          />
        </View>
      </ScrollView>
      <SafeAreaView />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewWrapper: {
    flex: 1,
    paddingHorizontal: mainPaddingH,
    marginBottom: mainPaddingH,
  },
  paddingView: {
    paddingHorizontal: mainPaddingH,
  },
})

export default SupperFlashSale
