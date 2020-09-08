import {
  View, StyleSheet, TouchableOpacity,
} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Text, NotificationMask } from '../../components'
import { Colors, calWidth } from '../../../assets/styles'

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.push('NotificationOffer')}
      >
        <View style={styles.offer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="tag" size={24} color={Colors.primaryBlue} />

            <Text style={{ marginLeft: 16 * calWidth }}>Offer</Text>
          </View>
          <NotificationMask number="2" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationFeed')}
      >
        <View style={styles.offer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="list-alt" size={24} color={Colors.primaryBlue} />

            <Text style={{ marginLeft: 16 * calWidth }}>Feed</Text>
          </View>
          <NotificationMask number="3" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('NotificationActivity')}
      >
        <View style={styles.offer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name="bell" size={24} color={Colors.primaryBlue} />

            <Text style={{ marginLeft: 16 * calWidth }}>Activity</Text>
          </View>
          <NotificationMask number="3" />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  offer: {
    flexDirection: 'row',
    padding: 16 * calWidth,
    justifyContent: 'space-between',
  },
})

export default Notification
