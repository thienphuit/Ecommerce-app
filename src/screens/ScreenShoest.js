import React, { useState } from 'react'
import { Text, View } from 'react-native'

const ScreenShoest = () => {
  const [name, setName] = useState('phu')

  return (
    <View>
      <Text>
        {`Hello ${name}`}
      </Text>
    </View>
  )
}
export default ScreenShoest
