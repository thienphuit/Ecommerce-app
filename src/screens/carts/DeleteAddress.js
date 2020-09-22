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
      <Text style={styles.titleDelete}>Confirmation</Text>
      <Text>Are you sure wanna delete address</Text>
      <ButtonComponent name="Cancel" style={styles.buttonCancel} />
      <ButtonComponent
        name="Delete"
        style={styles.customImage}
        color={Colors.neutralGrey}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  buttonCancel: {
    width: width - 32 * calWidth,
    marginVertical: 16 * calWidth,
  },
  titleDelete: { ...TypoGrayphy.heading2 },
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
    width: width - 32 * calWidth,
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
