/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import { HomeScreen, CartScreen } from './src/screens'
import ScreenShoest from './src/screens/ScreenShoest'
import OfferScreen from './src/screens/OfferScreen'
import {
  Notification, NotificationOffer, NotificationFeed, NotificationActivity,
} from './src/screens/Notifications'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeComponent = () => {
  return (
    <Stack.Navigator>
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
      <Stack.Screen
        options={{
          headerShown: true,
          // headerLeft: null,
          // headerRight: null,
          // headerTitle: (props) => <HeaderComponent {...props} />,
        }}
        name="Notification"
        component={Notification}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          // headerLeft: null,
          // headerRight: null,
          // headerTitle: (props) => <HeaderComponent {...props} />,
        }}
        name="NotificationOffer"
        component={NotificationOffer}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          // headerLeft: null,
          // headerRight: null,
          // headerTitle: (props) => <HeaderComponent {...props} />,
        }}
        name="NotificationFeed"
        component={NotificationFeed}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          // headerLeft: null,
          // headerRight: null,
          // headerTitle: (props) => <HeaderComponent {...props} />,
        }}
        name="NotificationActivity"
        component={NotificationActivity}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeComponent}
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
              <Icon size={30} color={color} name="shopping-cart" />
            ),
            tabBarLabel: 'Cart',
          }}
        />
        <Tab.Screen
          name="OfferScreen"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon size={30} color={color} name="tag" />
            ),
          }}
          component={OfferScreen}
        />
        <Tab.Screen name="ScreenShoest" component={ScreenShoest} />
      </Tab.Navigator>

    </NavigationContainer>
  )
}

export default App
