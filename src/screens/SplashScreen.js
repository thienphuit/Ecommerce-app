import React, { useEffect } from 'react'
import { View, Image } from 'react-native'
import SplashScreenLib from 'react-native-splash-screen'
import { logo } from '../../assets/images'

import { Colors } from '../../assets/styles'
import { Screen } from '../constants'

const SplashScreen = (props) => {
  const { navigation } = props
  useEffect(() => {
    SplashScreenLib.hide()
    navigation.navigate(Screen.Login)
  }, [])
  return (
    <View style={{
      flex: 1,
      backgroundColor: Colors.primaryBlue,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <Image source={logo} style={{ width: 72, height: 72 }} resizeMode="contain" />
    </View>
  )
}
export default SplashScreen
