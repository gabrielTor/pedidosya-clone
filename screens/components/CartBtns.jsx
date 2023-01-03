import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cartSlice'

export default function CartBtns({id}) {

    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items.filter(item => item === id))

  return (
    <View className='bg-white px-4 -mt-1 mb-1 pt-2'>
        <View className='flex-row items-center space-x-2 pb-3'>
            <TouchableOpacity onPress={()=>dispatch(removeFromCart(id))}>
                <Entypo name="circle-with-minus" size={28} 
                    color={items.length ? "red" : "gary"} />
            </TouchableOpacity>
            
            <Text>{items.length}</Text>
            
            <TouchableOpacity onPress={()=>dispatch(addToCart(id))}>
                <Entypo name="circle-with-plus" size={28} color="red" />
            </TouchableOpacity>
        </View>
    </View>
  )
}