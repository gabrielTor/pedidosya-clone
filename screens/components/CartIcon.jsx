import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

export default function CartIcon() {

    const items = useSelector(state => state.cart.items)

  return (
    <View className='absolute bottom-0 z-50 bg-white w-full'>
        <TouchableOpacity 
            className='m-5 rounded-full p-3 flex-row justify-around' 
            style={{backgroundColor: 'red'}}>
            <MaterialCommunityIcons name="shopping-outline" size={24} color="white" />
            <Text className='color-white'>Ver mi pedido</Text>
            <Text className='color-white'>$1000</Text>
        </TouchableOpacity>
    </View>
  )
}