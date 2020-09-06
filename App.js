/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react'
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import { createStackNavigator } from '@react-navigation/stack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import { HomeScreen, CartScreen } from './src/screens'
import ProductDetail from './src/screens/ProductDetail'
import ScreenShoest from './src/screens/ScreenShoest'
import { home } from './assets/images'

// const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
            // headerLeft: null,
            // headerRight: null,
            // headerTitle: (props) => <HeaderComponent {...props} />,
          }}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator> */}
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon size={30} color={color} name="home" />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Cart Screen"
          component={CartScreen}
          options={{
            tabBarIcon: ({ color }) => (

              <Image source={home} style={{ width: 24, height: 24 }} color={color} resizeMode="contain" />
            ),
            tabBarLabel: 'Cart',
          }}
        />
        <Tab.Screen name="ProductDetail" component={ProductDetail} />
        <Tab.Screen name="ScreenShoest" component={ScreenShoest} />
      </Tab.Navigator>

    </NavigationContainer>
  )
}

export default App
