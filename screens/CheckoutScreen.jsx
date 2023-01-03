import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

export default function CheckoutScreen() {

  const items = useSelector(state => state.cart.items)

  return (
    <>
    <SafeAreaView>
      <Text>Mi pedido</Text>
    </SafeAreaView>
    <View className='absolute bottom-0 z-50 bg-white w-full border-t'>
      <TouchableOpacity
        className='m-5 rounded-full p-4 flex-row justify-center' 
        style={{backgroundColor: 'rgb(250, 0, 80)'}}>
        <Text className='color-white font-bold'>Ir a pagar</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}