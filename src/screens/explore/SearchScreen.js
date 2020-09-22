import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity,
} from 'react-native'
import { useSelector } from 'react-redux'
import {
  TypoGrayphy, mainPaddingH, Colors,
} from '../../../assets/styles'
import HeaderSearch from './HeaderSearch'
import { mic } from '../../../assets/images'
import { Text } from '../../components'
import { Screen } from '../../constants'

const SearchSreen = (props) => {
  const [textInput, setTextInput] = useState('')
  const listSearch = useSelector((state) => state.search.listSearch)
  const handeChangeText = (text) => {
    setTextInput(text)
  }
  const filtered = listSearch.filter((todo) => todo.title.toLowerCase().includes(textInput.toLowerCase()))
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderSearch iconMic={mic} handeChangeText={handeChangeText} />
      <View style={styles.divider} />
      <View style={styles.viewWapper}>
        <FlatList
          data={filtered}
          keyExtractor={(item) => `List search ${item.id}`}
          extraData={listSearch}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => navigation.navigate(Screen.SearchResult)}>
                <View style={styles.viewItem}>
                  <Text style={styles.titleItem}>
                    {item.title}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewItem: { padding: mainPaddingH },
  titleItem: {
    ...TypoGrayphy.bodyNormalTextRegular,
    color: Colors.neutralGrey,
  },
  viewWapper: { marginTop: mainPaddingH, paddingHorizontal: mainPaddingH },
  divider: { borderTopColor: Colors.neutralLine, borderTopWidth: StyleSheet.hairlineWidth },
  container: {
    flex: 1,
  },
  textButton: {
    color: 'white',
    ...TypoGrayphy.bodyMediumTextBold,
  },
})

export default SearchSreen
