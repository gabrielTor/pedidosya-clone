import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

export default function Total() {

    const prices = useSelector(state => state.cart.items.map(item => item.price))
    const totalAmount = prices.length ? prices.reduce((total, amount) => total + amount) : 0
    const envio = 269
    const tarifa = 20

  return (
    <View className='bg-white my-2 rounded-lg py-2 mb-40'>
      <View className='flex-row justify-between px-3'>
        <Text>Productos</Text>
        <Text>${totalAmount}</Text>
      </View>
      <View className='flex-row justify-between px-3'>
        <Text>Envio</Text>
        <Text>${envio}</Text>
      </View>
      <View className='flex-row justify-between px-3'>
        <Text>Tarifa de servicio</Text>
        <Text>${tarifa}</Text>
      </View>
      <View className='text-center p-3'>
        <Text className='bg-gray-200 text-center w-full h-1'/>
      </View>
      <View className='flex-row justify-between px-3'>
        <Text className='font-bold text-lg'>Total</Text>
        <Text className='font-bold text-lg'>${totalAmount + envio + tarifa}</Text>
      </View>
    </View>
  )
}