import React from 'react'
import {
  View, Image, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native'
import {
  Colors, mainPaddingH, calWidth,
} from '../../assets/styles'
import {
  love_24,
  search,
  notification,
} from '../../assets/images'

const HeaderComponent = ({ navigation }) => {
  return (
    <View style={styles.header}>
      <View style={styles.search}>
        <Image
          source={search}
          style={styles.iconSearch}
          resizeMode="contain"
        />
        <TextInput
          style={{ flex: 1, marginLeft: mainPaddingH }}
          placeholder="Search Product"
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
          <Image
            source={love_24}
            style={styles.image}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Notification')}
        >
          <View>
            <Image
              source={notification}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.dotNotification} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: mainPaddingH,
    alignItems: 'center',
    height: 46 * calWidth,
    marginHorizontal: mainPaddingH,
  },
  image: {
    width: 24 * calWidth,
    height: 24 * calWidth,
    marginLeft: mainPaddingH,
  },
  search: {
    flexDirection: 'row',
    borderRadius: 5 * calWidth,
    borderColor: Colors.neutralLine,
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 12,
    alignItems: 'center',
    flex: 1,
  },
  iconSearch: {
    width: mainPaddingH,
    height: mainPaddingH,
    marginLeft: 16 * calWidth,
  },
  dotNotification: {
    width: 8 * calWidth,
    height: 8 * calWidth,
    borderRadius: 4 * calWidth,
    right: 3 * calWidth,
    position: 'absolute',
    backgroundColor: Colors.primaryRed,
  },
})
export default HeaderComponent
