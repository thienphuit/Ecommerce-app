import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, Alert,
} from 'react-native'
import { TextInput, ScrollView } from 'react-native-gesture-handler'
import { Text, ButtonComponent, PickerComponent } from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'

const listPicker = [
  { id: 1, tilte: 'United States' },
  { id: 2, tilte: 'United Kingdom' },
  { id: 3, tilte: 'Afghanistan' },
  { id: 4, tilte: 'Albania' },
  { id: 5, tilte: 'American Samoa' },
]
const Address = () => {
  const handleButtonSave = () => {
    Alert.alert('Save success')
  }
  const [selectedValue, setSelectedValue] = useState(listPicker[0].tilte)
  const [showView, setShowView] = useState(false)

  const handleShowList = () => {
    setShowView(!showView)
  }
  const handleFame = (item) => {
    setSelectedValue(item.tilte)
    setShowView(!showView)
  }
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <ScrollView>
        <View style={{ flex: 1, paddingHorizontal: mainPaddingH }}>
          <View style={{ marginTop: mainPaddingH }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>Country or region</Text>
            <PickerComponent
              genders={listPicker}
              handleShowList={handleShowList}
              selectedValue={selectedValue}
              showView={showView}
              handleFame={handleFame}
            />
          </View>
          <View style={{ marginTop: 24 * calWidth }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>First name</Text>
            <TextInput style={styles.input} placeholder="Gold" />
          </View>
          <View style={{ marginTop: 24 * calWidth }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>Last name</Text>
            <TextInput style={styles.input} placeholder="Gold" />
          </View>
          <View style={{ marginTop: 24 * calWidth }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>Street Address</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ marginTop: 24 * calWidth }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>Street Address 2 (Optional)</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ marginTop: 24 * calWidth }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>City</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ marginTop: 24 * calWidth }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>State/Province/Region</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ marginTop: 24 * calWidth }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>Zip Code</Text>
            <TextInput style={styles.input} />
          </View>
          <View style={{ marginVertical: 24 * calWidth }}>
            <Text style={{ ...TypoGrayphy.heading5 }}>Number Phone</Text>
            <TextInput style={styles.input} />
          </View>
        </View>
      </ScrollView>
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

export default Address
