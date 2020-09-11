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
import { createStackNavigator } from '@react-navigation/stack'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  HomeScreen, AccountScreen, ProductDetail, OfferScreen, FavoriteProduct, WriteReview,
} from './src/screens'
import {
  Notification,
  NotificationOffer,
  NotificationFeed,
  NotificationActivity,
} from './src/screens/notifications'
import {
  Profile,
  ChangeName,
  Gender,
  BirthDay,
  Email,
  Phone,
  ChangePass,
  Order,
} from './src/screens/account'
import { Explore } from './src/screens/explore'
import {
  CartScreen,
  ShipTo,
  PaymentMethod,
  CreditCard,
  AddCard,
  Address,
  DeleteAddress,
} from './src/screens/carts'
import {
  home,
  search,
  cart,
  offer,
  user,
} from './assets/images'
import { calWidth } from './assets/styles'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false })
  } else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
      />
      <Stack.Screen
        name="NotificationOffer"
        component={NotificationOffer}
      />
      <Stack.Screen
        name="NotificationFeed"
        component={NotificationFeed}
      />
      <Stack.Screen
        name="NotificationActivity"
        component={NotificationActivity}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
      />
      <Stack.Screen
        name="Favorite"
        component={FavoriteProduct}
      />
      <Stack.Screen
        name="WriteReview"
        component={WriteReview}
      />

    </Stack.Navigator>
  )
}

const ExploreStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Explore"
        component={Explore}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
      />
      <Stack.Screen
        name="NotificationOffer"
        component={NotificationOffer}
      />
      <Stack.Screen
        name="NotificationFeed"
        component={NotificationFeed}
      />
      <Stack.Screen
        name="NotificationActivity"
        component={NotificationActivity}
      />
    </Stack.Navigator>
  )
}

const CartStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false })
  } else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator
      initialRouteName="CartScreen"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
      />
      <Stack.Screen
        name="ShipTo"
        component={ShipTo}
      />
      <Stack.Screen
        name="Payment"
        component={PaymentMethod}
      />
      <Stack.Screen
        name="Credit"
        component={CreditCard}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
      />
      <Stack.Screen
        name="Address"
        component={Address}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          // header: (props) => <Header title="Delete Address" {...props} />,
        }}
        name="DeleteAddress"
        component={DeleteAddress}
      />
    </Stack.Navigator>
  )
}

const AccountStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({
      tabBarVisible: false,
    })
  } else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator
      initialRouteName="AccountScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="AccountScreen"
        component={AccountScreen}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        name="ChangeName"
        component={ChangeName}
      />
      <Stack.Screen
        name="Gender"
        component={Gender}
      />
      <Stack.Screen
        name="BirthDay"
        component={BirthDay}
      />
      <Stack.Screen
        name="Email"
        component={Email}
      />
      <Stack.Screen
        name="Phone"
        component={Phone}
      />
      <Stack.Screen
        name="ChangePass"
        component={ChangePass}
      />
      <Stack.Screen
        name="Order"
        component={Order}
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
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={home}
                style={{
                  width: 24 * calWidth,
                  height: 24 * calWidth,
                  tintColor: color,
                }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={search}
                style={{
                  width: 24 * calWidth,
                  height: 24 * calWidth,
                  tintColor: color,
                }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: 'Explore',
          }}
        />
        <Tab.Screen
          name="CartScreen"
          component={CartStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={cart}
                style={{
                  width: 24 * calWidth,
                  height: 24 * calWidth,
                  tintColor: color,
                }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: 'Cart',
          }}
        />
        <Tab.Screen
          name="OfferScreen"
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={offer}
                style={{
                  width: 24 * calWidth,
                  height: 24 * calWidth,
                  tintColor: color,
                }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: 'Offer',
          }}
          component={OfferScreen}
        />
        <Tab.Screen
          name="AccountScreen"
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={user}
                style={{
                  width: 24 * calWidth,
                  height: 24 * calWidth,
                  tintColor: color,
                }}
                resizeMode="contain"
              />
            ),
            tabBarLabel: 'Account',
          }}
          component={AccountStack}
        />
      </Tab.Navigator>

    </NavigationContainer>
  )
}

export default App
