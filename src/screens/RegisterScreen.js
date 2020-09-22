import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { Text, Button } from '../components'
import {
  logoWhite, message, passIcon,
} from '../../assets/images'
import {
  TypoGrayphy, mainPaddingH, Colors, calWidth,
} from '../../assets/styles'

const { width } = Dimensions.get('window')

const RegisterScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.viewWrapper}>
          <Image
            source={logoWhite}
            style={styles.logoWhite}
          />
          <Text style={styles.labelLetStart}>Let’s Get Started</Text>
          <Text style={styles.labelNewAccount}>Create an new account</Text>
        </View>
        <View style={styles.viewBody}>
          <View style={styles.viewInput}>
            <Image
              source={message}
              style={styles.iconImage}
              resizeMode="contain"
            />
            <TextInput placeholder="Full name" />
          </View>
          <View style={styles.viewInput}>
            <Image
              source={message}
              style={styles.iconImage}
              resizeMode="contain"
            />
            <TextInput placeholder="Email" />
          </View>
          <View style={styles.viewInput}>
            <Image
              source={passIcon}
              style={styles.iconImage}
              resizeMode="contain"
            />
            <TextInput placeholder="Password" />
          </View>
          <View style={styles.viewInput}>
            <Image
              source={passIcon}
              style={styles.iconImage}
              resizeMode="contain"
            />
            <TextInput placeholder="Password again" />
          </View>
          <View style={{ marginTop: mainPaddingH }}>
            <Button>
              Sign In
            </Button>
          </View>
          <View style={{
            flexDirection: 'row',
            marginTop: 24 * calWidth,
            justifyContent: 'center',
            marginBottom: 20 * calWidth,
          }}
          >
            <Text style={{ ...TypoGrayphy.captionLargeTextBold12, color: Colors.neutralGrey }}>Have a account?</Text>
            <TouchableOpacity>
              <Text style={{ ...TypoGrayphy.linkLargeTextBold12, marginLeft: 4 }}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  iconImage: {
    width: 24 * calWidth,
    height: 24 * calWidth,
    paddingLeft: 4 * calWidth,
    marginRight: 10 * calWidth,
  },
  viewBody: {
    marginTop: 28 * calWidth,
    width,
    paddingHorizontal: mainPaddingH,
  },
  labelNewAccount: { marginTop: mainPaddingH / 2 },
  labelLetStart: { ...TypoGrayphy.heading4, marginTop: mainPaddingH },
  viewInput: {
    borderRadius: 5 * calWidth,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.neutralLine,
    borderWidth: StyleSheet.hairlineWidth,
    padding: 12 * calWidth,
    marginTop: 8 * calWidth,
  },
  logoWhite: {
    width: 72 * calWidth,
    height: 72 * calWidth,
    marginTop: 68 * calWidth,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  viewWrapper: { alignItems: 'center' },
})

export default RegisterScreen
