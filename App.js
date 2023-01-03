import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import DetailScreen from './screens/DetailScreen'
import HomeScreen from './screens/HomeScreen'
import { Feather } from '@expo/vector-icons'
import store from './redux/store'
import { Provider } from 'react-redux'
import CheckoutScreen from './screens/CheckoutScreen'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen}
            options={{
              headerTitleAlign: 'center',
              headerLeft: () => <Feather name="menu" size={24} color="black" />
            }} />
          <Stack.Screen name="Details" component={DetailScreen}
            options={{
              headerShown: false
            }} />
          <Stack.Screen name="Checkout" component={CheckoutScreen}
            options={{
              presentation: 'modal', headerShown: false
            }} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}