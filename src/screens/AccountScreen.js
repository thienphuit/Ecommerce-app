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
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <View style={styles.acountView}>
            <Image source={userBlue} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Order')}>
          <View style={styles.acountView}>
            <Image source={bag} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Other</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ShipTo')}>
          <View style={styles.acountView}>
            <Image source={location} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>Address</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
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
