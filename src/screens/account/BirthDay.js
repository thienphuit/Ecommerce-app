import React, { useState, useEffect } from 'react'
import {
  View, StyleSheet, SafeAreaView, TouchableOpacity, Image,
} from 'react-native'
import { Calendar } from 'react-native-calendars'
import moment from 'moment'
import { Text, ButtonComponent, Header } from '../../components'
import {
  calWidth,
  Colors,
  mainPaddingH,
  TypoGrayphy,
} from '../../../assets/styles'
import { bottomIcon } from '../../../assets/images'

const BirthDay = ({ route, navigation }) => {
  // const [selectedValue, setSelectedValue] = useState('2020-02-02')
  const [showView, setShowView] = useState(false)
  const [selected, setSelected] = useState(date)

  const onDayPress = (day) => {
    setSelected(day.dateString)
    setShowView(!showView)
  }
  useEffect(() => {
    setSelected(date)
  }, [])
  const handleButtonSave = () => {

  }
  const handleShowList = () => {
    setShowView(!showView)
  }
  const { date } = route.params
  const formatTime = moment(selected).format('DD/MM/YYYY')
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title="BirthDay" navigation={navigation} />
      <View style={{ flex: 1, paddingHorizontal: mainPaddingH }}>
        <View style={{ marginTop: mainPaddingH }}>
          <Text style={{ ...TypoGrayphy.heading5 }}>Your BirthDay</Text>
          <TouchableOpacity onPress={handleShowList}>
            <View style={[styles.picker, { borderColor: showView ? Colors.primaryBlue : Colors.neutralLine }]}>
              <Text>{formatTime}</Text>
              <Image
                source={bottomIcon}
                style={{ width: 24 * calWidth, height: 24 * calWidth }}
              />
            </View>
          </TouchableOpacity>
          {showView ? <Calendar
            testID=""
            current={date}
            style={styles.calendar}
            hideExtraDays
            onDayPress={onDayPress}
            headerStyle={{ borderBottomWidth: 1, borderBottomColor: Colors.neutralLine }}
            markingType="custom"

            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
                selectedColor: 'orange',
                selectedTextColor: 'red',
              },
            }}
          /> : <View />}
        </View>

      </View>
      <View style={{ marginBottom: 20 }}>
        <ButtonComponent name="Save" handleClick={handleButtonSave} />
      </View>
      <SafeAreaView />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerStyle: {
    color: 'red',
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
  calendar: {
    marginTop: 12,
    borderRadius: 5,
  },
})

export default BirthDay
