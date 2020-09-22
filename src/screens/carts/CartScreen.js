import React from 'react'
import {
  View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, FlatList,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { Text, ProductCartHorizontal, ButtonComponent } from '../../components'
import {
  TypoGrayphy, Colors, calWidth, mainPaddingH,
} from '../../../assets/styles'
import { shoesImage, shoes_2 } from '../../../assets/images'

const products = [
  { image: shoesImage },
  { image: shoes_2 },
  { image: shoesImage },
]

const CartScreen = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.viewHeader}>
        <Text style={styles.titleHeader}>Your Cart</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.viewWapper}>
          <FlatList
            data={products}
            keyExtractor={(item, index) => `list cart -${index}`}
            renderItem={({ item }) => <View style={{ marginTop: mainPaddingH }}>
              <ProductCartHorizontal item={item} />
            </View>}
          />
          <View style={styles.viewCoupon}>
            <TextInput style={styles.inputCoupon} placeholder="Enter Cupon Code" />
            <TouchableOpacity>
              <View style={styles.viewApply}>
                <Text style={styles.titleApply}>Apply</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewTotalPrice}>
            <View style={styles.viewTotalItem}>
              <Text style={styles.labelTotal}>Items(3)</Text>
              <Text>$598.86</Text>
            </View>
            <View style={styles.viewLabel}>
              <Text style={styles.labelTotal}>Shipping</Text>
              <Text>$40</Text>
            </View>
            <View style={[styles.viewLabel, { paddingBottom: 12 * calWidth }]}>
              <Text style={styles.labelTotal}>Import changes</Text>
              <Text>$128.00</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.viewLabel}>
              <Text style={styles.totalPrice}>Total Price</Text>
              <Text style={[styles.totalPrice, { color: Colors.primaryBlue }]}>$128.00</Text>
            </View>
          </View>

        </View>
      </ScrollView>
      <View style={{ marginBottom: 20 }}>
        <ButtonComponent name="Checkout" handleClick={() => navigation.navigate('ShipTo')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  totalPrice: { ...TypoGrayphy.heading6 },
  divider: {
    borderColor: Colors.neutralLine,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'dashed',
  },
  viewLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12 * calWidth,
  },
  labelTotal: { color: Colors.neutralGrey },
  viewTotalItem: { flexDirection: 'row', justifyContent: 'space-between' },
  viewTotalPrice: {
    borderRadius: 5 * calWidth,
    marginTop: mainPaddingH,
    padding: mainPaddingH,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
  },
  titleApply: { ...TypoGrayphy.bodyNormalTextBold, color: Colors.backgroudWhite },
  viewApply: {
    backgroundColor: Colors.primaryBlue,
    width: 87,
    height: 56 * calWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5 * calWidth,
    borderBottomRightRadius: 5 * calWidth,
  },
  inputCoupon: { color: Colors.neutralGrey, marginLeft: mainPaddingH },
  viewCoupon: {
    marginTop: 2 * mainPaddingH,
    borderWidth: StyleSheet.hairlineWidth,
    height: 56 * calWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5 * calWidth,
    borderColor: Colors.neutralLine,
  },
  viewWapper: { paddingHorizontal: mainPaddingH },
  titleHeader: { ...TypoGrayphy.heading4, marginLeft: mainPaddingH },
  container: {
    flex: 1,
  },
  viewHeader: {
    paddingVertical: 16 * calWidth,
    borderBottomWidth: 2 * StyleSheet.hairlineWidth,
    borderBottomColor: Colors.borderColor,
  },
})

export default CartScreen
