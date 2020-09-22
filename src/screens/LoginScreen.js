import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { Text, ButtonComponent } from '../components'
import {
  logoWhite, message, iconGoogle, iconFB,
} from '../../assets/images'
import {
  TypoGrayphy, mainPaddingH, Colors, calWidth,
} from '../../assets/styles'

const { width } = Dimensions.get('window')

const LoginScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.viewHeader}>
          <Image source={logoWhite} style={styles.logo} />
          <Text style={styles.label}>Welcome to Lafyuu</Text>
          <Text style={styles.labelSignIn}>Sign in to continue</Text>
        </View>
        <View style={styles.viewWapper}>
          <View style={styles.viewInput}>
            <Image
              source={message}
              style={styles.imageLogin}
              resizeMode="contain"
            />
            <TextInput placeholder="Your Email" />
          </View>
          <View style={[styles.viewInput, { marginTop: 8 * calWidth }]}>
            <Image
              source={message}
              style={styles.imageLogin}
              resizeMode="contain"
            />
            <TextInput placeholder="Your Email" />
          </View>
          <View style={styles.viewButton}>
            <ButtonComponent name="Sign In" handleClick={() => { }} />
          </View>
          <View style={styles.viewDivider}>
            <View style={styles.divider} />
            <Text style={styles.labelDivider}>
              Or
            </Text>
            <View style={styles.divider} />
          </View>
          <View style={styles.viewLoginSocial}>
            <Image source={iconGoogle} style={styles.imageSocial} resizeMode="contain" />
            <Text style={styles.labelSocial}>
              Login with google
            </Text>
          </View>
          <View style={styles.viewLoginSocial}>
            <Image source={iconFB} style={styles.imageSocial} resizeMode="contain" />
            <Text style={styles.labelSocial}>
              Login with facebook
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.labelForgotPass}>Forget password</Text>
          </TouchableOpacity>
          <View style={styles.viewDontAccount}>
            <Text style={styles.titleDontAccount}>Don`t have a account?</Text>
            <TouchableOpacity>
              <Text style={styles.buttonRegister}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  buttonRegister: {
    ...TypoGrayphy.linkLargeTextBold12,
    marginLeft: 4 * calWidth,
  },
  titleDontAccount: {
    ...TypoGrayphy.captionLargeTextBold12,
    color: Colors.neutralGrey,
  },
  viewDontAccount: {
    flexDirection: 'row',
    marginTop: 8 * calWidth,
    justifyContent: 'center',
    marginBottom: 20 * calWidth,
  },
  labelForgotPass: {
    textAlign: 'center',
    marginTop: mainPaddingH,
    ...TypoGrayphy.linkLargeTextBold12,
  },
  labelSocial: {
    textAlign: 'center',
    flex: 1,
    ...TypoGrayphy.bodyMediumTextBold,
    color: Colors.neutralGrey,
  },
  imageSocial: {
    width: 24 * calWidth,
    height: 24 * calWidth,
  },
  viewLoginSocial: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: mainPaddingH,
    borderRadius: 5 * calWidth,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: mainPaddingH,
  },
  labelDivider: {
    ...TypoGrayphy.bodyMediumTextBold,
    color: Colors.neutralGrey,
    marginLeft: 23 * calWidth,
    marginRight: 23 * calWidth,
  },
  viewDivider: { flexDirection: 'row', marginTop: 20 * calWidth, alignItems: 'center' },
  divider: { height: 1 * calWidth, flex: 1, backgroundColor: Colors.neutralLine },
  viewButton: { marginTop: mainPaddingH },
  viewInput: {
    borderRadius: 5 * calWidth,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.neutralLine,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 12 * calWidth,
  },
  viewHeader: {
    marginTop: 28 * calWidth,
    width,
    paddingHorizontal: mainPaddingH,
    alignItems: 'center',
  },
  imageLogin: {
    width: 24 * calWidth, height: 24 * calWidth, paddingLeft: 4 * calWidth, marginRight: 10 * calWidth,
  },
  labelSignIn: { marginTop: mainPaddingH / 2 },
  label: { ...TypoGrayphy.heading4, marginTop: mainPaddingH },
  logo: {
    width: 72 * calWidth,
    height: 72 * calWidth,
    marginTop: 68 * calWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  // viewHeader: {  },
})

export default LoginScreen
