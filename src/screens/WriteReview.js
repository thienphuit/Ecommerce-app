import React from 'react'
import {
  View, SafeAreaView, TextInput, Image, StyleSheet,
} from 'react-native'
import { Text, Rating, Header } from '../components'
import {
  calWidth, TypoGrayphy, Colors, mainPaddingH,
} from '../../assets/styles'
import {
  plus,
} from '../../assets/images'

const WriteReview = ({ navigation }) => {
  return (
    <View>
      <SafeAreaView />
      <Header title="Write Review" navigation={navigation} />
      <View style={{ margin: mainPaddingH }}>
        <Text style={{ ...TypoGrayphy.heading5 }}>Please write Overall level of satisfaction with your shipping / Delivery Service</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Rating rating="8" />
          <Text style={{ ...TypoGrayphy.heading5, color: Colors.neutralGrey, marginLeft: mainPaddingH }}>4/5</Text>
        </View>
        <View style={{ paddingTop: mainPaddingH }}>
          <Text style={{ ...TypoGrayphy.heading5 }}>Write Your Review</Text>
          <View style={{
            padding: 16 * calWidth,
            paddingBottom: 122 * calWidth,
            borderColor: Colors.neutralLine,
            borderRadius: 5 * calWidth,
            borderWidth: 2,
            marginTop: 12 * calWidth,
          }}
          >
            <TextInput placeholder="Write Your Review" />
          </View>
        </View>
        <View style={{ marginTop: 24, marginBottom: 12 }}>
          <Text style={{ ...TypoGrayphy.heading5 }}>Write Your Review</Text>
          <View style={{
            width: 72 * calWidth,
            height: 72 * calWidth,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: Colors.neutralLine,
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 5,
            marginTop: 12,
          }}
          >
            <Image source={plus} style={{ width: 24 * calWidth, height: 24 * calWidth }} resizeMode="contain" />
          </View>
        </View>
      </View>
    </View>
  )
}
export default WriteReview
