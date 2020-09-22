import React, { useState } from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, Image,
} from 'react-native'
import { useSelector } from 'react-redux'
import {
  TypoGrayphy, mainPaddingH, Colors, calWidth,
} from '../../../assets/styles'
import { Header, Text } from '../../components'
import { Screen } from '../../constants'

const CategoryScreen = (props) => {
  const categoryList = useSelector((state) => state.products.categorys)
  const [onFocus, setOnFocus] = useState('')

  const handleOnFocus = (id) => {
    setOnFocus(id)
    navigation.navigate(Screen.SortByScreen)
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
          data={categoryList}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => handleOnFocus(item.id)}>
                <View style={[styles.viewCate, { backgroundColor: onFocus === item.id ? Colors.neutralLine : null }]}>
                  <Image source={item.image} style={styles.imageCate} resizeMode="contain" />
                  <Text style={{ marginLeft: mainPaddingH, color: item.id === 1 || Colors.primaryBlue }}>{item.title}</Text>
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
  imageCate: { width: 24 * calWidth, height: 24 * calWidth },
  viewCate: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: mainPaddingH,
    paddingHorizontal: mainPaddingH,
  },
  container: {
    flex: 1,
  },
  textButton: {
    color: 'white',
    ...TypoGrayphy.bodyMediumTextBold,
  },
  divider: { borderTopColor: Colors.neutralLine, borderTopWidth: StyleSheet.hairlineWidth },
})

export default CategoryScreen
