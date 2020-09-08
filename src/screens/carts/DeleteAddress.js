import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, Dimensions,
} from 'react-native'
import { Text, ButtonComponent } from '../../components'
import {
  mainPaddingH, calWidth, TypoGrayphy, Colors,
} from '../../../assets/styles'
import {
  alterIcon,
} from '../../../assets/images'

const { width } = Dimensions.get('window')

const DeleteAddress = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Image source={alterIcon} style={styles.image} resizeMode="contain" />
      <Text style={{ ...TypoGrayphy.heading2 }}>Confirmation</Text>
      <Text>Are you sure wanna delete address</Text>

      <ButtonComponent name="Cancel" style={{ width: width - 32, marginVertical: 16 }} />
      <ButtonComponent
        name="Delete"
        style={styles.customImage}
        color={Colors.neutralGrey}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 72 * calWidth,
    height: 72 * calWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  shipto: {
    padding: mainPaddingH,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5 * calWidth,
    marginHorizontal: mainPaddingH,
    marginTop: mainPaddingH,
  },
  customImage: {
    width: width - 32,
    backgroundColor: '#FFF',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
    opacity: 0.9,
    shadowRadius: 3,

  },
})

export default DeleteAddress
