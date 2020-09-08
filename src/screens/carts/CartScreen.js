import React from 'react'
import {
  View, SafeAreaView, StyleSheet, TextInput, TouchableOpacity,
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
      <View style={{
        paddingVertical: 16 * calWidth,
        borderBottomWidth: 2 * StyleSheet.hairlineWidth,
        borderBottomColor: Colors.borderColor,

      }}
      >
        <Text style={{ ...TypoGrayphy.heading4, marginLeft: mainPaddingH }}>Your Cart</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ paddingHorizontal: mainPaddingH }}>
          <View style={{ marginTop: mainPaddingH }}>
            <ProductCartHorizontal item={products[1]} />
          </View>
          <View style={{ marginTop: mainPaddingH }}>
            <ProductCartHorizontal item={products[1]} />
          </View>
          <View style={{
            marginTop: 2 * mainPaddingH,
            borderWidth: StyleSheet.hairlineWidth,
            height: 56 * calWidth,
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: 5 * calWidth,
            borderColor: Colors.neutralLine,
          }}
          >
            <TextInput style={{ color: Colors.neutralGrey, marginLeft: mainPaddingH }} placeholder="Enter Cupon Code" />
            <TouchableOpacity>
              <View style={{
                backgroundColor: Colors.primaryBlue,
                width: 87,
                height: 56 * calWidth,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopRightRadius: 5 * calWidth,
                borderBottomRightRadius: 5 * calWidth,
              }}
              >
                <Text style={{ ...TypoGrayphy.bodyNormalTextBold, color: Colors.backgroudWhite }}>Apply</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{
            borderRadius: 5 * calWidth,
            marginTop: mainPaddingH,
            padding: mainPaddingH,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: Colors.neutralLine,
          }}
          >
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: Colors.neutralGrey }}>Items(3)</Text>
              <Text>$598.86</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 12 * calWidth,
            }}
            >
              <Text style={{ color: Colors.neutralGrey }}>Shipping</Text>
              <Text>$40</Text>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 12 * calWidth,

            }}
            >
              <Text style={{ color: Colors.neutralGrey }}>Import changes</Text>
              <Text>$128.00</Text>
            </View>
            <View style={{
              borderColor: Colors.neutralLine,
              borderWidth: StyleSheet.hairlineWidth,
              borderStyle: 'dashed',
            }}
            />
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 12 * calWidth,

            }}
            >
              <Text style={{ ...TypoGrayphy.heading6 }}>Total Price</Text>
              <Text style={{ ...TypoGrayphy.heading6, color: Colors.primaryBlue }}>$128.00</Text>
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
  container: {
    flex: 1,
  },
})

export default CartScreen
