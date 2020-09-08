import React from 'react'
import {
  View, StyleSheet, SafeAreaView, ScrollView,
} from 'react-native'
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
        paddingVertical: 16 * calWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.borderColor,
        // marginLeft: mainPaddingH,
        // backgroundColor: 'red',
      }}
      >
        <Text style={{ ...TypoGrayphy.heading4, marginLeft: mainPaddingH }}>Offer</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ flex: 1, paddingHorizontal: mainPaddingH, paddingVertical: 16 }}>
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
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default OfferScreen
