import React from 'react'
import {
  View, StyleSheet, SafeAreaView, FlatList, Image, TouchableOpacity, Dimensions,
} from 'react-native'
import { useSelector } from 'react-redux'
import {
  TypoGrayphy, mainPaddingH, Colors, calWidth,
} from '../../../assets/styles'
import HeaderSearch from './HeaderSearch'
import { ButtonComponent, ProductCart, Text } from '../../components'
import { Screen } from '../../constants'
import { bottomIcon, notFound } from '../../../assets/images'

const { width } = Dimensions.get('window')

const SearchResult = (props) => {
  const productLikes = useSelector((state) => state.products.productLikes)
  const handeChangeText = (text) => {
    console.log('============================')
    console.log('texssss', text)
    console.log('============================')
  }
  const handleBackToHome = () => {
    navigation.navigate(Screen.HomeScreen)
  }
  const onChooseCategory = () => {
    navigation.navigate(Screen.Category)
  }
  const { navigation } = props
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <HeaderSearch handeChangeText={handeChangeText} />
      <View style={{ borderTopColor: Colors.neutralLine, borderTopWidth: StyleSheet.hairlineWidth }} />
      <View style={styles.viewFlatlist}>
        <View style={styles.viewWapperResult}>
          <Text style={styles.labelResul}>{`${productLikes.length} Result`}</Text>
          <TouchableOpacity onPress={onChooseCategory}>
            <View style={styles.optionResult}>
              <Text>Main shoes</Text>
              <Image source={bottomIcon} style={styles.imageOption} resizeMode="contain" />
            </View>
          </TouchableOpacity>
        </View>
        {productLikes.length > 0 ? <View>
          <FlatList
            data={productLikes}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <ProductCart
                  item={item}
                  handleChooseItem={() => navigation.navigate(Screen.ProductDetail, {
                    nameProduct: item.title,
                  })}
                  style={{
                    width: 165 * calWidth,
                    height: 282 * calWidth,
                    sImage: 133 * calWidth,
                  }}
                />
              )
            }}
            columnWrapperStyle={styles.conlumnWrapper}
            keyExtractor={(item, index) => `ProductLike list ${index}`}
          />
        </View>
          : <View
            style={styles.viewNotFound}
          >
            <Image source={notFound} style={styles.imageNotFound} resizeMode="contain" />
            <Text style={{ ...TypoGrayphy.heading2 }}>Product Not Found</Text>
            <Text style={{ ...TypoGrayphy.bodyNormalTextRegular, marginBottom: mainPaddingH }}>thank you for shopping using lafyuu</Text>
            <View style={{ width }}>
              <ButtonComponent name="Back to home" handleClick={handleBackToHome} />
            </View>
          </View>}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  imageNotFound: {
    width: 72 * calWidth, height: 72 * calWidth,
  },
  viewNotFound: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.6,
  },
  imageOption: {
    width: 24 * calWidth, height: 24 * calWidth,
  },
  optionResult: {
    flexDirection: 'row', alignItems: 'center',
  },
  labelResul: {
    color: Colors.neutralGrey,
  },
  viewWapperResult: {
    marginBottom: mainPaddingH,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  viewFlatlist: {
    flex: 1,
    paddingHorizontal: mainPaddingH,
    marginTop: mainPaddingH,
  },
  textButton: {
    color: 'white',
    ...TypoGrayphy.bodyMediumTextBold,
  },
  conlumnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 12 * calWidth,
  },
})

export default SearchResult
