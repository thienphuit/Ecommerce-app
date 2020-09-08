import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView,
} from 'react-native'
import { Text, ButtonComponent, PickerComponent } from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'

const listGender = [
  { id: 1, tilte: 'Male' },
  { id: 2, tilte: 'Female' },
  { id: 3, tilte: 'Other' },
]
const Gender = () => {
  const [selectedValue, setSelectedValue] = useState('Male')
  const [showView, setShowView] = useState(false)
  const handleButtonSave = () => {

  }
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
      <View style={{ flex: 1, paddingHorizontal: mainPaddingH }}>
        <View style={{ marginTop: mainPaddingH }}>
          <Text style={{ ...TypoGrayphy.heading5 }}>Choose gender</Text>
          <PickerComponent
            genders={listGender}
            showView={showView}
            handleFame={handleFame}
            handleShowList={handleShowList}
            selectedValue={selectedValue}
          />
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

export default Gender
