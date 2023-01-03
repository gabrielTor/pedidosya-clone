import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

export default function CartIcon() {

    const { navigate } = useNavigation()
    const items = useSelector(state => state.cart.items)
    const prices = useSelector(state => state.cart.items.map(item => item.price))
    const totalAmount = prices.length ? prices.reduce((total, amount) => total + amount) : 0

  return (
    !items.length ? null :
    <View className='absolute bottom-0 z-50 bg-white w-full border-t'>
        <TouchableOpacity onPress={()=>navigate('Checkout')}
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
            <Text className='color-white'>${totalAmount}</Text>
        </TouchableOpacity>
    </View>
  )
}