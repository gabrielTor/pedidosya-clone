import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Details from './screens/Details'
import HomeScreen from './screens/HomeScreen'
import { Feather } from '@expo/vector-icons'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            headerTitleAlign: 'center',
            headerLeft: () => <Feather name="menu" size={24} color="black" />
          }} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}