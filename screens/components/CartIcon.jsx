import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'

export default function CartIcon() {

    const items = useSelector(state => state.cart.items)

  return (
    <View className='absolute bottom-0 z-50 bg-white w-full border-t'>
        <TouchableOpacity
            className='m-5 rounded-full p-3 flex-row justify-around' 
            style={{backgroundColor: 'rgb(250, 0, 80)'}}>
            <>
                <MaterialCommunityIcons name="shopping-outline" size={24} color="white" />
                <Text
                    style={{backgroundColor: 'rgb(250, 0, 80)'}}
                    className='absolute rounded-full border-white border-2 w-6 h-6 color-white text-center top-1 left-11'>
                    {items.length}
                </Text>
            </>
            <Text className='color-white mx-10 font-bold'>Ver mi pedido</Text>
            <Text className='color-white'>$1000</Text>
        </TouchableOpacity>
    </View>
  )
}