import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, TouchableOpacity,
} from 'react-native'
import { Text } from '../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../assets/styles'
import {
  userBlue, bag, location, card,
} from '../../assets/images'
import { Screen } from '../constants'

const AccountScreen = ({ navigation }) => {
  console.tron.log({ navigation })
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{
        paddingVertical: 26 * calWidth,
        borderBottomWidth: 2 * StyleSheet.hairlineWidth,
        borderBottomColor: Colors.borderColor,
      }}
      >
        <Text style={styles.headerTitle}>Account</Text>
      </View>
      <View style={styles.viewWapper}>
        <TouchableOpacity onPress={() => navigation.navigate(Screen.Profile)}>
          <View style={styles.acountView}>
            <Image source={userBlue} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Screen.Order)}>
          <View style={styles.acountView}>
            <Image source={bag} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Other</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Screen.Address)}>
          <View style={styles.acountView}>
            <Image source={location} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Address</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(Screen.Payment)}>
          <View style={styles.acountView}>
            <Image source={card} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Payment</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewWapper: { flex: 1 },
  container: {
    flex: 1,
  },
  headerTitle: {
    ...TypoGrayphy.heading4,
    marginLeft: mainPaddingH,
  },
  acountView: {
    padding: mainPaddingH,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...TypoGrayphy.heading6,
    marginLeft: mainPaddingH,
  },
  image: {
    width: 24 * calWidth,
    height: 24 * calWidth,
    tintColor: Colors.primaryBlue,
  },
})

export default AccountScreen
