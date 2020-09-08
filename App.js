/* eslint-disable react/jsx-props-no-spreading */
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
import {
  HomeScreen, AccountScreen, ProductDetail, OfferScreen,
} from './src/screens'
import {
  Notification, NotificationOffer, NotificationFeed, NotificationActivity,
} from './src/screens/notifications'
import {
  Profile, ChangeName, Gender, BirthDay, Email, Phone, ChangePass, Order,
} from './src/screens/account'
import { Explore } from './src/screens/explore'
import { Header } from './src/components'
import {
  CartScreen, ShipTo, PaymentMethod, CreditCard, AddCard, Address, DeleteAddress,
} from './src/screens/carts'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const NotificationComponent = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: true,
          header: (props) => <Header title="Notification" {...props} />,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Other" {...props} />,
        }}
        name="NotificationOffer"
        component={NotificationOffer}
      />
    </Stack.Navigator>
  )
}

const HomeStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({ tabBarVisible: false })
  } else {
    navigation.setOptions({ tabBarVisible: true })
  }
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
          headerShown: false,
          // header: (props) => <Header title="Notification" {...props} />,
        }}
        name="Notification"
        component={NotificationComponent}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Other" {...props} />,
        }}
        name="NotificationOffer"
        component={NotificationOffer}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Feed" {...props} />,
        }}
        name="NotificationFeed"
        component={NotificationFeed}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          // eslint-disable-next-line react/jsx-props-no-spreading
          header: (props) => <Header title="Activity" {...props} />,
        }}
        name="NotificationActivity"
        component={NotificationActivity}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="ProductDetail"
        component={ProductDetail}
      />
    </Stack.Navigator>
  )
}
const AccountStack = ({ navigation, route }) => {
  if (route.state && route.state.index > 0) {
    navigation.setOptions({
      tabBarVisible: false,
      headerShown: false,
    })
  } else {
    navigation.setOptions({ tabBarVisible: true })
  }
  return (
    <Stack.Navigator initialRouteName="AccountScreen">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="AccountScreen"
        component={AccountScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
          // header: (props) => <Header title="Profile" {...props} />,
        }}
        name="Profile"
        component={Profile}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="ChangeName"
        component={ChangeName}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Gender" {...props} />,
        }}
        name="Gender"
        component={Gender}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="BirthDay" {...props} />,
        }}
        name="BirthDay"
        component={BirthDay}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Email" {...props} />,
        }}
        name="Email"
        component={Email}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Phone Number" {...props} />,
        }}
        name="Phone"
        component={Phone}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Change Password" {...props} />,
        }}
        name="ChangePass"
        component={ChangePass}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Order" {...props} />,
        }}
        name="Order"
        component={Order}
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
      setOptions={{
      }}
    // screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="CartScreen"
        component={CartScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Shipto" {...props} />,
        }}
        name="ShipTo"
        component={ShipTo}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Payment" {...props} />,
          // headerTitle: 'Pyment',
          // ({ route }) => ({ title: route.params.name }),
        }}
        name="Payment"
        component={PaymentMethod}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="CreditCard " {...props} />,
          // headerTitle: 'Pyment',
          // ({ route }) => ({ title: route.params.name }),
        }}
        name="Credit"
        component={CreditCard}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="AddCard " {...props} />,
        }}
        name="AddCard"
        component={AddCard}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          header: (props) => <Header title="Address " {...props} />,
        }}
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

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeScreen"
          component={HomeStack}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon size={30} color={color} name="home" />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({ color }) => (
              <Icon size={30} color={color} name="search" />
            ),
            tabBarLabel: 'Explore',
          }}
        />
        <Tab.Screen
          name="Cart Screen"
          component={CartStack}
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
        <Tab.Screen
          name="AccountScreen"
          options={{
            tabBarIcon: ({ color }) => (
              <Icon size={30} color={color} name="user" />
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
