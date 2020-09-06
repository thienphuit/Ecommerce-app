import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { Text, Button } from '../components'
import {
  logoWhite, message, password,
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
        <View style={{ alignItems: 'center' }}>
          <Image source={logoWhite} style={{ width: 72 * calWidth, height: 72 * calWidth, marginTop: 68 * calWidth }} />
          <Text style={{ ...TypoGrayphy.heading4, marginTop: mainPaddingH }}>Let’s Get Started</Text>
          <Text style={{ marginTop: mainPaddingH / 2 }}>Create an new account</Text>
        </View>
        <View style={{ marginTop: 28 * calWidth, width, paddingHorizontal: mainPaddingH }}>
          <View style={{
            borderRadius: 5 * calWidth,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: Colors.neutralLine,
            borderWidth: StyleSheet.hairlineWidth,
            padding: 12 * calWidth,
          }}
          >
            <Image
              source={message}
              style={{
                width: 24 * calWidth, height: 24 * calWidth, paddingLeft: 4 * calWidth, marginRight: 10 * calWidth,
              }}
              resizeMode="contain"
            />
            <TextInput placeholder="Full name" />
          </View>
          <View style={{
            borderRadius: 5 * calWidth,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: Colors.neutralLine,
            borderWidth: StyleSheet.hairlineWidth,
            padding: 12 * calWidth,
            marginTop: 8 * calWidth,
          }}
          >
            <Image
              source={message}
              style={{
                width: 24 * calWidth, height: 24 * calWidth, paddingLeft: 4 * calWidth, marginRight: 10 * calWidth,
              }}
              resizeMode="contain"
            />
            <TextInput placeholder="Email" />
          </View>
          <View style={{
            borderRadius: 5 * calWidth,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: Colors.neutralLine,
            borderWidth: StyleSheet.hairlineWidth,
            padding: 12 * calWidth,
            marginTop: 8 * calWidth,
          }}
          >
            <Image
              source={password}
              style={{
                width: 24 * calWidth, height: 24 * calWidth, paddingLeft: 4 * calWidth, marginRight: 10 * calWidth,
              }}
              resizeMode="contain"
            />
            <TextInput placeholder="Password" />
          </View>
          <View style={{
            borderRadius: 5 * calWidth,
            flexDirection: 'row',
            alignItems: 'center',
            borderColor: Colors.neutralLine,
            borderWidth: StyleSheet.hairlineWidth,
            padding: 12 * calWidth,
            marginTop: 8 * calWidth,
          }}
          >
            <Image
              source={password}
              style={{
                width: 24 * calWidth, height: 24 * calWidth, paddingLeft: 4 * calWidth, marginRight: 10 * calWidth,
              }}
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
            flexDirection: 'row', marginTop: 24 * calWidth, justifyContent: 'center', marginBottom: 20 * calWidth,
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
  container: {
    flex: 1,
    justifyContent: 'center',
  },
})

export default RegisterScreen
