import React from 'react'
import {
  View, TouchableOpacity, StyleSheet, Image, TextInput, SafeAreaView, FlatList, Text,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import {
  TypoGrayphy, mainPaddingH, Colors, calWidth,
} from '../../../assets/styles'

const SearchSreen = (props) => {
  const listSearch = useSelector((state) => state.listSearch)
  const { navigation } = props
  return (
    <View>
      <SafeAreaView />
      <FlatList
        data={listSearch}
        keyExtractor={(item) => `List search ${item.id}`}
        renderItem={({ item }) => {
          return (
            <View>
              <Text>{item.title}</Text>
            </View>
          )
        }}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primaryBlue,
    padding: mainPaddingH,
    borderRadius: 5 * calWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    color: 'white',
    ...TypoGrayphy.bodyMediumTextBold,
  },
})

export default SearchSreen
