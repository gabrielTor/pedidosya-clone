import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { urlFor } from '../../sanity'
import { AntDesign } from '@expo/vector-icons'
import CartBtns from './CartBtns'

export default function MenuCard({id, description, image, name, price}) {

    const [favorite, setFavorite] = useState(false)
    const [isPressed, setIsPressed] = useState(false)

  return (
    <>
    <TouchableOpacity 
        onPress={()=>setIsPressed(prev => !prev)}
        className='flex-row bg-white my-1 px-4 pt-4 pb-2'>
        <View className='flex-1 pr-2'>
            <Text className='text-lg font-bold'>{name}</Text>
            <Text>{description}</Text>
            <Text className='text-lg mt-5'>${price}</Text>
        </View>
        <View>
            <Image
                className='relative w-28 h-28'
                source={{uri: urlFor(image).url()}}
            />
            <TouchableOpacity
                onPress={()=>setFavorite(prev => !prev)}
                className='absolute top-0 right-3 p-2 bg-white rounded-full'>
                {!favorite ? <AntDesign name="hearto" size={16} color="black" />
                : <AntDesign name="heart" size={16} color="red" />}
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
    {isPressed && <CartBtns id={id}/>}
    </>
  )
}