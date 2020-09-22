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
const SortByScreen = (props) => {
  const [onFocus, setOnFocus] = useState('')

  const handleOnFocus = (id) => {
    setOnFocus(id)
  }
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Header title={Screen.Category} navigation={navigation} />
      <View style={styles.divider} />
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={listSortBy}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleOnFocus(item.id)}>
                <View style={[styles.viewItem, { backgroundColor: onFocus === item.id ? Colors.neutralLine : null }]}>
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
  viewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mainPaddingH,
  },
  divider: { borderTopColor: Colors.neutralLine, borderTopWidth: StyleSheet.hairlineWidth },
  container: {
    flex: 1,
  },
  textButton: {
    color: 'white',
    ...TypoGrayphy.bodyMediumTextBold,
  },
})

export default SortByScreen
