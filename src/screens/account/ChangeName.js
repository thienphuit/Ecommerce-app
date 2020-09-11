import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Alert,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import {
  Text,
  ButtonComponent,
  Header,
} from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'

const ChangeName = (props) => {
  const handleButtonSave = () => {
    Alert.alert('Save success')
  }
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="Name" navigation={navigation} />
      <View style={{ flex: 1, paddingHorizontal: mainPaddingH }}>
        <View style={{ marginTop: mainPaddingH }}>
          <Text style={{ ...TypoGrayphy.heading5 }}>First Name</Text>
          <TextInput style={styles.input} placeholder="Maximus" />
        </View>
        <View style={{ marginTop: 24 * calWidth }}>
          <Text style={{ ...TypoGrayphy.heading5 }}>Last name</Text>
          <TextInput style={styles.input} placeholder="Gold" />
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
  input: {
    padding: mainPaddingH,
    borderRadius: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.neutralLine,
    marginTop: 12 * calWidth,
  },
})

export default ChangeName
