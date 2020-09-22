import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView,
} from 'react-native'
import {
  Text, ButtonComponent, PickerComponent, Header,
} from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'
import { Screen } from '../../constants'
import { Label } from '../../constants/common'

const listGender = [
  { id: 1, tilte: 'Male' },
  { id: 2, tilte: 'Female' },
  { id: 3, tilte: 'Other' },
]
const Gender = (props) => {
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

  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={Screen.Gender} navigation={navigation} />
      <View style={styles.viewWrapper}>
        <View style={styles.viewChoose}>
          <Text style={styles.label}>Choose gender</Text>
          <PickerComponent
            genders={listGender}
            showView={showView}
            handleFame={handleFame}
            handleShowList={handleShowList}
            selectedValue={selectedValue}
          />
        </View>

      </View>
      <ButtonComponent name={Label.Save} handleClick={handleButtonSave} />
      <SafeAreaView />

    </View>
  )
}

const styles = StyleSheet.create({
  viewChoose: { marginTop: mainPaddingH },
  label: { ...TypoGrayphy.heading5 },
  viewWrapper: {
    flex: 1,
    paddingHorizontal: mainPaddingH,
  },
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
