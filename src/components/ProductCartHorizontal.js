import React from 'react'
import {
  View, Dimensions, StyleSheet, Image,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Colors, TypoGrayphy } from '../../assets/styles'
import { love_24, trash } from '../../assets/images'
import { Text, InputNumber } from '.'
import { cartActions } from '../redux/actions'

const { width } = Dimensions.get('window')
const calWidth = width / 375
const ProductCartHorizontal = (props) => {
  const { item } = props
  const dispatch = useDispatch()

  return (
    <View style={styles.viewCard}>
      <Image resizeMode="contain" source={item.image} style={styles.imageCard} />
      <View style={styles.viewWapper}>
        <View style={styles.viewRow}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.flexRow}>
            <Image source={love_24} style={[styles.iconImage, { marginRight: 10 * calWidth }]} resizeMode="contain" />
            <TouchableOpacity onPress={() => dispatch(cartActions.cartDeleteAction(item.id))}>
              <Image source={trash} style={styles.iconImage} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewRow}>
          <Text style={{
            color: Colors.primaryBlue, ...TypoGrayphy.heading6,
          }}
          >
            {`$${item.price}`}
          </Text>
          <InputNumber
            number={item.quantity}
            increate={() => dispatch(cartActions.cartIncreateAndDecreateAction(item.id, true))}
            decreate={() => dispatch(cartActions.cartIncreateAndDecreateAction(item.id, false))}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  iconImage: { width: 24 * calWidth, height: 24 * calWidth },
  flexRow: { flexDirection: 'row' },
  title: { width: 158 * calWidth, ...TypoGrayphy.heading6 },
  viewRow: { flexDirection: 'row', justifyContent: 'space-between' },
  viewWapper: { marginLeft: 12 * calWidth, justifyContent: 'space-between', flex: 1 },
  imageCard: { width: 72 * calWidth, height: 72 * calWidth, borderRadius: 5 * calWidth },
  viewCard: {
    padding: 16 * calWidth,
    borderColor: Colors.borderColor,
    borderRadius: 5 * calWidth,
    alignContent: 'center',
    flexDirection: 'row',
    height: 104 * calWidth,
    borderWidth: StyleSheet.hairlineWidth,
    width: width - 32 * calWidth,
    marginRight: 8 * calWidth,
  },
})

export default ProductCartHorizontal
