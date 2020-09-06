import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Image, TextInput, Dimensions, TouchableOpacity, ScrollView,
} from 'react-native'
import { Text, Button } from '../components'
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
        <View style={{ alignItems: 'center' }}>
          <Image source={logoWhite} style={{ width: 72 * calWidth, height: 72 * calWidth, marginTop: 68 * calWidth }} />
          <Text style={{ ...TypoGrayphy.heading4, marginTop: mainPaddingH }}>Welcome to Lafyuu</Text>
          <Text style={{ marginTop: mainPaddingH / 2 }}>Sign in to continue</Text>
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
            <TextInput placeholder="Your Email" />
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
            <TextInput placeholder="Your Email" />
          </View>
          <View style={{ marginTop: mainPaddingH }}>
            <Button>
              Sign In
            </Button>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20 * calWidth, alignItems: 'center' }}>
            <View style={{ height: 1 * calWidth, flex: 1, backgroundColor: Colors.neutralLine }} />
            <Text style={{
              ...TypoGrayphy.bodyMediumTextBold, color: Colors.neutralGrey, marginLeft: 23 * calWidth, marginRight: 23 * calWidth,
            }}
            >
              Or
            </Text>
            <View style={{ height: 1 * calWidth, flex: 1, backgroundColor: Colors.neutralLine }} />
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: mainPaddingH,
            borderRadius: 5 * calWidth,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: Colors.neutralLine,
            marginTop: mainPaddingH,

          }}
          >
            <Image source={iconGoogle} style={{ width: 24 * calWidth, height: 24 * calWidth }} resizeMode="contain" />
            <Text style={{
              textAlign: 'center',
              flex: 1,
              ...TypoGrayphy.bodyMediumTextBold,
              color: Colors.neutralGrey,
            }}
            >
              Login with google
            </Text>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: mainPaddingH,
            borderRadius: 5 * calWidth,
            borderWidth: StyleSheet.hairlineWidth,
            borderColor: Colors.neutralLine,
            marginTop: mainPaddingH,

          }}
          >
            <Image source={iconFB} style={{ width: 24 * calWidth, height: 24 * calWidth }} resizeMode="contain" />
            <Text style={{
              textAlign: 'center',
              flex: 1,
              ...TypoGrayphy.bodyMediumTextBold,
              color: Colors.neutralGrey,
            }}
            >
              Login with facebook
            </Text>
          </View>
          <TouchableOpacity>
            <Text style={{ textAlign: 'center', marginTop: mainPaddingH, ...TypoGrayphy.linkLargeTextBold12 }}>Forget password</Text>
          </TouchableOpacity>
          <View style={{
            flexDirection: 'row', marginTop: 8 * calWidth, justifyContent: 'center', marginBottom: 20 * calWidth,
          }}
          >
            <Text style={{ ...TypoGrayphy.captionLargeTextBold12, color: Colors.neutralGrey }}>Don`t have a account?</Text>
            <TouchableOpacity>
              <Text style={{ ...TypoGrayphy.linkLargeTextBold12, marginLeft: 4 }}>Forget password</Text>
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

export default LoginScreen
