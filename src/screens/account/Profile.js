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
  avatar,
  messageBlue,
  dateBlue,
  phoneBlue,
  gender,
  passIcon,
} from '../../../assets/images'
import { Screen } from '../../constants'

const Profile = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={Screen.Profile} {...props} />
      <View style={styles.viewWrapper}>
        <View style={styles.viewProfile}>
          <Image source={avatar} style={styles.avatar} />
          <TouchableOpacity
            onPress={() => { navigation.navigate(Screen.ChangeName) }}
          >
            <View style={styles.viewAvatarName}>
              <Text style={styles.titleName}>Maximus Gold</Text>
              <Text style={styles.gmail}>@Maximus Gold</Text>
            </View>
          </TouchableOpacity>
        </View>
        <ProfileItem
          image={gender}
          label="Gender"
          value="Male"
          nextScreen={() => navigation.navigate('Gender')}
        />
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
          image={passIcon}
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
  gmail: {
    ...TypoGrayphy.bodyNormalTextRegular,
    color: Colors.neutralGrey,
  },
  titleName: { ...TypoGrayphy.heading5 },
  viewAvatarName: {
    marginLeft: mainPaddingH,
  },
  avatar: {
    width: 72 * calWidth,
    height: 72 * calWidth,
  },
  viewProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24 * calWidth,
    marginBottom: 32 * calWidth,
  },
  viewWrapper: { flex: 1, paddingHorizontal: mainPaddingH },
  container: {
    flex: 1,
  },
})

export default Profile
