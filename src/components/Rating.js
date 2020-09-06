import React from 'react'
import {
  View, StyleSheet, Image,
} from 'react-native'
import { star, starActive } from '../../assets/images'

const Rating = ({ rating }) => {
  const filledStars = Math.floor(rating / 2)
  const maxStars = Array(5 - filledStars).fill('star')
  const r = [...Array(filledStars).fill('startActive'), ...maxStars]

  return (
    <View style={styles.rating}>
      {r.map((type, index) => {
        return <View key={index}>{type === 'star' ? <Image source={star} size={12} /> : <Image source={starActive} size={12} />}</View>
      })}
    </View>
  )
}
const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
    marginVertical: 4,
  },
})
export default Rating
