import React from 'react'
import {
  View, TouchableOpacity, StyleSheet, Image,
} from 'react-native'
import { Text, ButtonComponent } from '.'
import {
  TypoGrayphy, calWidth, mainPaddingH, Colors,
} from '../../assets/styles'
import {
  trash,
} from '../../assets/images'

const CartAddress = (props) => {
  const {
    handleFocus, colorFocus, navigation, itemCart, handleDelete,
  } = props
  console.tron.log({ navigation })
  return (
    <TouchableOpacity onPress={() => handleFocus(itemCart)}>
      <View style={[styles.shipto, { borderColor: colorFocus ? Colors.primaryBlue : Colors.neutralLine }]}>
        <Text style={{ ...TypoGrayphy.heading5 }}>Priscekila</Text>
        <Text style={{ color: Colors.neutralGrey }}>3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States</Text>
        <Text style={{ color: Colors.neutralGrey, paddingVertical: 16 }}>+99 1234567890</Text>
        <View style={{
          flexDirection: 'row', alignItems: 'center',
        }}
        >
          <ButtonComponent
            name="Edit"
            style={{
              width: 77 * calWidth,
              marginLeft: 0,
              marginRight: 24 * calWidth,
            }}
            handleClick={() => navigation()}
          />
          <TouchableOpacity
            onPress={() => handleDelete()}
          >
            <Image source={trash} style={{ width: 24 * calWidth, height: 24 * calWidth }} resizeMode="contain" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  shipto: {
    padding: mainPaddingH,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    // borderColor: Colors.neutralLine,
    marginHorizontal: mainPaddingH,
    marginTop: mainPaddingH,
  },
})
export default CartAddress
