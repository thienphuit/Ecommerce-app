/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, TouchableOpacity,
} from 'react-native'
import { Text, ProfileItem, Header } from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'
import {
  userBlue, avatar, messageBlue, dateBlue, phoneBlue,
} from '../../../assets/images'

const Profile = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Profile" {...props} />
      <View style={{ flex: 1, paddingHorizontal: mainPaddingH }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center', paddingTop: 24 * calWidth, marginBottom: 32 * calWidth,
        }}
        >
          <Image source={avatar} style={{ width: 72, height: 72 }} />
          <TouchableOpacity
            onPress={() => { navigation.navigate('ChangeName') }}
          >
            <View style={{ marginLeft: 16 * calWidth }}>
              <Text style={{ ...TypoGrayphy.heading5 }}>Maximus Gold</Text>
              <Text style={{ ...TypoGrayphy.bodyNormalTextRegular, color: Colors.neutralGrey }}>@Maximus Gold</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ProfileItem image={userBlue} label="Gender" value="Male" nextScreen={() => navigation.navigate('Gender')} />
        <ProfileItem
          image={dateBlue}
          label="Birthday"
          value="12-12-2000"
          nextScreen={() => navigation.navigate('BirthDay', {
            itemId: 1,
            date: '2000-12-12',
          })}
        />
        <ProfileItem
          image={messageBlue}
          label="Email"
          value="Derlaxy@yahoo.com"
          nextScreen={() => navigation.navigate('Email', {
            email: 'Derlaxy@yahoo.com',
          })}
        />
        <ProfileItem
          image={phoneBlue}
          label="Phone Number"
          value="(307) 555-0133"
          nextScreen={() => navigation.navigate('Phone', {
            phone: '(307) 555-0133',
          })}
        />
        <ProfileItem
          image={userBlue}
          label="Change Password"
          value="•••••••••••••••••"
          nextScreen={() => navigation.navigate('ChangePass', {
            password: '•••••••••••••••••',
          })}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile
