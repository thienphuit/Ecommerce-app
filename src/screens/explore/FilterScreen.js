import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity,
} from 'react-native'
import {
  TypoGrayphy, mainPaddingH, Colors,
} from '../../../assets/styles'
import { Header, Text } from '../../components'
import { Screen } from '../../constants'

const listSortBy = [
  { id: 1, title: 'Best Match' },
  { id: 2, title: 'Time: ending soonest' },
  { id: 3, title: 'Time: newly listed' },
  { id: 4, title: 'Distance: nearest first' },

]
const FilterScreen = (props) => {
  const [onFocus, setOnFocus] = useState('')

  const handleOnFocus = (id) => {
    setOnFocus(id)
  }
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={Screen.Category} navigation={navigation} />
      <View style={{ borderTopColor: Colors.neutralLine, borderTopWidth: StyleSheet.hairlineWidth }} />
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={listSortBy}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleOnFocus(item.id)}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: mainPaddingH,
                  // paddingHorizontal: mainPaddingH,
                  backgroundColor: onFocus === item.id ? Colors.neutralLine : null,
                }}
                >
                  <Text style={{ marginLeft: mainPaddingH, color: item.id === 1 ? Colors.primaryBlue : null }}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item, index) => `List category ${index}`}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textButton: {
    color: 'white',
    ...TypoGrayphy.bodyMediumTextBold,
  },
})

export default FilterScreen
