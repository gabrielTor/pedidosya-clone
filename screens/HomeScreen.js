import { Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function HomeScreen() {

    const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Text>PedidosYa</Text>
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
