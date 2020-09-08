import React from 'react'
import {
  View, StyleSheet, SafeAreaView, Alert,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Text, ButtonComponent } from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'

const ChangeName = () => {
  const handleButtonSave = () => {
    Alert.alert('Save success')
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={{
        paddingVertical: 26 * calWidth,
        borderBottomWidth: 2 * StyleSheet.hairlineWidth,
        borderBottomColor: Colors.borderColor,
      }}
      >
        <Text style={{ ...TypoGrayphy.heading4, marginLeft: mainPaddingH }}>Name</Text>
      </View>
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
