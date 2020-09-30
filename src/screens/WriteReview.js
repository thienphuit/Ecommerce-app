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
  // const [enter, setEnter] = useState(false)
  return (
    <View>
      <SafeAreaView />
      <Header title="Write Review" navigation={navigation} />
      <View style={styles.viewWrapper}>
        <Text style={styles.titleLabel}>Please write Overall level of satisfaction with your shipping / Delivery Service</Text>
        <View style={styles.viewRating}>
          <Rating rating="8" />
          <Text style={styles.numberRating}>4/5</Text>
        </View>
        <View style={{ paddingTop: mainPaddingH }}>
          <Text style={styles.titleLabel}>Write Your Review</Text>
          <View style={styles.viewInput}>
            <TextInput placeholder="Write Your Review" multiline />
          </View>
        </View>
        <View style={styles.viewWrapperPhoto}>
          <Text style={styles.titleLabel}>Write Your Review</Text>
          <View style={styles.viewPhoto}>
            <Image source={plus} style={styles.photo} resizeMode="contain" />
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  viewWrapperPhoto: {
    marginTop: 24 * calWidth,
    marginBottom: 12 * calWidth,
  },
  photo: {
    width: 24 * calWidth,
    height: 24 * calWidth,
  },
  viewPhoto: {
    width: 72 * calWidth,
    height: 72 * calWidth,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.neutralLine,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5 * calWidth,
    marginTop: 12 * calWidth,
  },
  viewInput: {
    padding: 16 * calWidth,
    paddingBottom: 122 * calWidth,
    borderColor: Colors.neutralLine,
    borderRadius: 5 * calWidth,
    borderWidth: 2,
    marginTop: 12 * calWidth,
  },
  numberRating: {
    ...TypoGrayphy.heading5,
    color: Colors.neutralGrey,
    marginLeft: mainPaddingH,
  },
  viewRating: { flexDirection: 'row', alignItems: 'center' },
  titleLabel: { ...TypoGrayphy.heading5 },
  viewWrapper: { margin: mainPaddingH },
})
export default WriteReview
