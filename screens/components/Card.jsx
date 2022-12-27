import { View, Text, Image } from 'react-native'
import React from 'react'
import { FontAwesome, EvilIcons } from '@expo/vector-icons'

export default function Card() {
  return (
    <View className='mt-2 px-3 py-1 shadow rounded-md bg-white flex-row justify-between'>
      <Image
          className='h-12 w-12 mt-1.5 rounded-md'
          source={require('../../imgs/il-panino-las-heras.webp')}/>
      <View className='w-52'>
          <Text className='font-bold text-lg'>Panino Las Heras</Text>
          <Text className='my-0.5 text-xs'>
              <EvilIcons name="credit-card" size={16} color="black"/> Acepta pago online
          </Text>
          <Text className='my-0.5 text-xs mb-2'>25 - 40min - Envio$159</Text>
      </View>
      <Text className='p-1'><FontAwesome name="star" size={14} color="orange"/> 4.2</Text>
    </View>
  )
}