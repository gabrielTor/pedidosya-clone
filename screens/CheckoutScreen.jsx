import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign } from '@expo/vector-icons'
import CheckoutCard from './components/CheckoutCard'

export default function CheckoutScreen({navigation}) {

  return (
    <>
    <SafeAreaView className='p-5 bg-white'>
      <TouchableOpacity 
        onPress={()=>navigation.goBack()}
        className='my-3'>
        <AntDesign name="arrowleft" size={20} color="black" />
      </TouchableOpacity>
      <Text className='my-1 font-bold text-xl'>Mi pedido</Text>
    </SafeAreaView>
    <Text className='p-5'>Estas llevando:</Text>
    
    <CheckoutCard/>

    <View className='absolute bottom-0 z-50 bg-white w-full border-t'>
      <TouchableOpacity
        onPress={()=>navigation.navigate('Success')}
        className='m-5 rounded-full p-4 flex-row justify-center' 
        style={{backgroundColor: 'rgb(250, 0, 80)'}}>
        <Text className='color-white font-bold'>Ir a pagar</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}