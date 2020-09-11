import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, SafeAreaView,
} from 'react-native'
import {
  Text,
  ButtonComponent,
  TextInput,
  Header,
} from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
} from '../../../assets/styles'
import {
  message, messageBlue,
} from '../../../assets/images'

const Email = ({ route, navigation }) => {
  const [value, setValue] = useState('Male')
  const [isActive, setIsActive] = useState(false)
  const handleButtonSave = () => {
  }

  useEffect(() => {
    setValue(email)
  }, [])
  const handleOnFocus = () => {
    setIsActive(!isActive)
  }
  const handleOnchange = () => {
    // console.log('============================')
    // console.log('handleOnchange', event)
    // console.log('============================')
    // setIsActive(!isActive)
  }
  const { email } = route.params
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Name" navigation={navigation} />
      <View style={{ flex: 1, paddingHorizontal: mainPaddingH }}>
        <View>
          <TextInput
            iconLeft={isActive && isActive ? messageBlue : message}
            label="Change Email"
            placeholder={value}
            handleOnchange={handleOnchange}
            onFocus={handleOnFocus}
            isActive={isActive}
          />
          <Text style={{ marginTop: 8 * calWidth, color: Colors.primaryBlue }}>We Will Send verification to your New Email</Text>
        </View>

      </View>
      <ButtonComponent name="Save" handleClick={handleButtonSave} />
      <SafeAreaView />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  picker: {
    paddingHorizontal: mainPaddingH,
    paddingVertical: 12,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: 12 * calWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default Email
