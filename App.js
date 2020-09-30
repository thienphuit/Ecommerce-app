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
import { Provider } from 'react-redux'
import {
  HomeScreen,
  AccountScreen,
  ProductDetail,
  OfferScreen,
  FavoriteProduct,
  WriteReview,
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
import {
  CategoryScreen, Explore, SearchResult, SearchScreen, SortByScreen,
} from './src/screens/explore'
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
import { store } from './src/redux/index'
import { SupperFlashSale } from './src/screens/home'
import { Screen } from './src/constants'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    if (route.state && route.state.index > 0) {
      navigation.setOptions({
        tabBarVisible: false,
      })
    } else {
      navigation.setOptions({ tabBarVisible: true })
    }
  }, [navigation, route])
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Screen.HomeScreen}
        component={HomeScreen}
      />
      <Stack.Screen
        name={Screen.Notification}
        component={Notification}
      />
      <Stack.Screen
        name={Screen.NotificationOffer}
        component={NotificationOffer}
      />
      <Stack.Screen
        name={Screen.NotificationFeed}
        component={NotificationFeed}
      />
      <Stack.Screen
        name={Screen.NotificationActivity}
        component={NotificationActivity}
      />
      <Stack.Screen
        name={Screen.ProductDetail}
        component={ProductDetail}
      />
      <Stack.Screen
        name={Screen.Favorite}
        component={FavoriteProduct}
      />
      <Stack.Screen
        name={Screen.WriteReview}
        component={WriteReview}
      />
      <Stack.Screen
        name={Screen.SubperSale}
        component={SupperFlashSale}
      />

    </Stack.Navigator>
  )
}

const ExploreStack = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    if (route.state && route.state.index > 0) {
      navigation.setOptions({
        tabBarVisible: false,
      })
    } else {
      navigation.setOptions({ tabBarVisible: true })
    }
  }, [navigation, route])
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={Screen.Explore}
        component={Explore}
      />
      <Stack.Screen
        name={Screen.Notification}
        component={Notification}
      />
      <Stack.Screen
        name={Screen.NotificationOffer}
        component={NotificationOffer}
      />
      <Stack.Screen
        name={Screen.NotificationFeed}
        component={NotificationFeed}
      />
      <Stack.Screen
        name={Screen.NotificationActivity}
        component={NotificationActivity}
      />
      <Stack.Screen
        name={Screen.SearchScreen}
        component={SearchScreen}
      />
      <Stack.Screen
        name={Screen.ProductDetail}
        component={ProductDetail}
      />
      <Stack.Screen
        name={Screen.SearchResult}
        component={SearchResult}
      />
      <Stack.Screen
        name={Screen.Category}
        component={CategoryScreen}
      />
      <Stack.Screen
        name={Screen.SortByScreen}
        component={SortByScreen}
      />
    </Stack.Navigator>
  )
}

const CartStack = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    if (route.state && route.state.index > 0) {
      navigation.setOptions({
        tabBarVisible: false,
      })
    } else {
      navigation.setOptions({ tabBarVisible: true })
    }
  }, [navigation, route])
  return (
    <Stack.Navigator
      initialRouteName={Screen.CartScreen}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={Screen.CartScreen}
        component={CartScreen}
      />
      <Stack.Screen
        name={Screen.ShipTo}
        component={ShipTo}
      />
      <Stack.Screen
        name={Screen.Payment}
        component={PaymentMethod}
      />
      <Stack.Screen
        name={Screen.Credit}
        component={CreditCard}
      />
      <Stack.Screen
        name={Screen.AddCard}
        component={AddCard}
      />
      <Stack.Screen
        name={Screen.Address}
        component={Address}
      />
      <Stack.Screen
        name={Screen.DeleteAddress}
        component={DeleteAddress}
      />
      <Stack.Screen
        name={Screen.ProductDetail}
        component={ProductDetail}
      />
    </Stack.Navigator>
  )
}

const AccountStack = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    if (route.state && route.state.index > 0) {
      navigation.setOptions({
        tabBarVisible: false,
      })
    } else {
      navigation.setOptions({ tabBarVisible: true })
    }
  }, [navigation, route])
  return (
    <Stack.Navigator
      initialRouteName={Screen.AccountScreen}
      screenOptions={{
        headerShown: false,

      }}
    >
      <Stack.Screen
        name={Screen.AccountScreen}
        component={AccountScreen}
      />
      <Stack.Screen
        name={Screen.Profile}
        component={Profile}
      />
      <Stack.Screen
        name={Screen.ChangeName}
        component={ChangeName}
      />
      <Stack.Screen
        name={Screen.Gender}
        component={Gender}
      />
      <Stack.Screen
        name={Screen.BirthDay}
        component={BirthDay}
      />
      <Stack.Screen
        name={Screen.Email}
        component={Email}
      />
      <Stack.Screen
        name={Screen.Phone}
        component={Phone}
      />
      <Stack.Screen
        name={Screen.ChangePass}
        component={ChangePass}
      />
      <Stack.Screen
        name={Screen.Order}
        component={Order}
      />
      <Stack.Screen
        name={Screen.Address}
        component={Address}
      />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name={Screen.HomeScreen}
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
            name={Screen.Explore}
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
              tabBarLabel: Screen.Explore,
            }}
          />
          <Tab.Screen
            name={Screen.CartScreen}
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
            name={Screen.OfferScreen}
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
            name={Screen.AccountScreen}
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
    </Provider>
  )
}

export default App
