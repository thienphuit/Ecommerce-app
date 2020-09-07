import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import { Text, SaleOffComponent } from '../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../assets/styles'
import { promotionImage, promotionImage2 } from '../../assets/images'

const OfferScreen = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{
        paddingVertical: 26 * calWidth,
        borderBottomWidth: 2 * StyleSheet.hairlineWidth,
        borderBottomColor: Colors.borderColor,
        marginLeft: mainPaddingH,
      }}
      >
        <Text style={{ ...TypoGrayphy.heading4 }}>Offer</Text>
      </View>
      <View style={{ flex: 1, paddingHorizontal: mainPaddingH }}>
        <View style={{ backgroundColor: Colors.primaryBlue, borderRadius: 5 }}>
          <Text style={{
            padding: 16, ...TypoGrayphy.heading4, color: Colors.backgroudWhite, width: 212,
          }}
          >
            Use “MEGSL” Cupon For Get 90%off
          </Text>
        </View>
        <View>
          <SaleOffComponent topic="Super Flash Sale 50% Off" image={promotionImage} time={['08', '52', '10']} />
          <SaleOffComponent topic="90% Off Super Mega Sale" image={promotionImage2} content="Special birthday Lafyuu" />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default OfferScreen
