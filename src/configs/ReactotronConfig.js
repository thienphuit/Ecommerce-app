import Reactotron from 'reactotron-react-native'
import AsyncStorage from '@react-native-community/async-storage'

Reactotron.clear()
const reactotron = Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: 'weather react native', // Ung dung dang chay
    host: 'localhost',
    post: 9090,
  }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!

console.tron = reactotron

console.tron.log()
export default reactotron
